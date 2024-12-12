/**********************************************************************
Procedure that compares prices of the selected products.
***********************************************************************/
use indec
go

create or alter procedure dbo.get_precios_comparados
(
    @json varchar(max)
)
as
begin
    declare @nro_localidad	integer,
			@fecha			smalldatetime = getdate(),
			@dos_horas		time	= CONVERT(time,'02:00:00')

    -- Obtener el ID de la localidad
    select @nro_localidad = json_value(@json, '$.localityId');

    -- Crear tabla temporal para los códigos de barra
    create table #productos 
	(
	 cod_barra varchar(60)
	);

    insert into #productos (cod_barra)
    select value
    from openjson(@json, '$.barcodes');

	 declare @total_productos int;
    select @total_productos = count(*) from #productos;
    -- Crear tabla temporal para totales
     create table #totales
     (
      nro_sucursal					integer,
      nro_supermercado				integer,
      total							integer,
	  productos_actualizados		int, -- Cantidad de productos con precios válidos y actualizados
      porcentaje_actualizados		float,
	  precios_actualizados_horas	int
     );

	  -- Insertar totales y productos actualizados por sucursal
    insert into #totales (nro_sucursal, nro_supermercado, total, productos_actualizados, porcentaje_actualizados, precios_actualizados_horas)
    select ps.nro_sucursal, 
		   ps.nro_supermercado, 
		   sum(ps.precio_nuevo),
		   count(case when ps.precio_nuevo is not null 
                       and convert(date, ps.fecha_ult_actualizacion) = convert(date, @fecha) 
                      then 1 
				  end),
		   cast(count(case when ps.precio_nuevo is not null 
							and convert(date, ps.fecha_ult_actualizacion) = convert(date, @fecha) 
						   then 1 
					   end) as float) / @total_productos,
		   sum(case when datediff(hour, ps.fecha_ult_actualizacion, @fecha) <  2
											and ps.precio_anterior is not null
											then 1
											else 0
										end)
      from dbo.productos_supermercados ps (nolock)
     join #productos p (nolock)
       on ps.cod_barra = p.cod_barra
     join (
    -- Subconsulta para obtener una única sucursal representativa por supermercado
    select nro_supermercado,
		   nro_sucursal		= min(nro_sucursal)
      from dbo.sucursales (nolock)
     where nro_localidad = @nro_localidad
       and habilitada = 'S'
     group by nro_supermercado ) s
       on ps.nro_supermercado = s.nro_supermercado
      and ps.nro_sucursal = s.nro_sucursal
    where convert(date, ps.fecha_ult_actualizacion) = convert(date, @fecha)
    group by ps.nro_sucursal, ps.nro_supermercado;

    -- Obtener la sucursal óptima (mejor porcentaje + menor total)
    declare @optima_sucursal int, @optima_supermercado int;
    select top 1 @optima_sucursal = nro_sucursal, 
                 @optima_supermercado = nro_supermercado
    from #totales
    order by porcentaje_actualizados desc, total asc;

	with MinPrices as (
    select cod_barra, 
           min(precio_nuevo) as min_precio
    from dbo.productos_supermercados ps
    join (
    -- Subconsulta para obtener una única sucursal representativa por supermercado
    select nro_supermercado,
		   nro_sucursal		= min(nro_sucursal)
      from dbo.sucursales (nolock)
     where nro_localidad = @nro_localidad
       and habilitada = 'S'
     group by nro_supermercado ) s
      on ps.nro_sucursal = s.nro_sucursal
     and ps.nro_supermercado = s.nro_supermercado
      and convert(date, ps.fecha_ult_actualizacion) = convert(date, @fecha)
    group by cod_barra
	)

    -- Seleccionar todas las combinaciones de productos y sucursales/supermercados habilitados en la localidad
    select barcode          = pr.cod_barra,
		   productName      = pr.nom_producto,
		   image            = pr.imagen,
		   brandName        = mp.nom_marca,
		   price            = case when convert(date, ps.fecha_ult_actualizacion) = convert(date, @fecha)
								then ps.precio_nuevo
								else null
							  end,
		   time_diference	= datediff(hour, ps.fecha_ult_actualizacion, @fecha),
		   hasPriceChanged  = cast(case when datediff(hour, ps.fecha_ult_actualizacion, @fecha) <  2
										and ps.precio_anterior is not null
								then 1
								else 0
							  end as bit),
		   diferencePerc    = cast(round(((precio_nuevo - ps.precio_anterior)/ps.precio_nuevo)*100, 2)as decimal(10,2)),
		   isPositive		= cast(case when ps.precio_anterior > ps.precio_nuevo 
										then 0 
										else 1 
									end as bit),
		   branchId         = s.nro_sucursal,
		   branchName       = s.nom_sucursal,
		   superId          = sm.nro_supermercado,
		   superName        = sm.razon_social,
		   isCheapest       = cast(case when ps.precio_nuevo is not null
										 and ps.precio_nuevo = minp.min_precio
										then 1 
										else 0 
									end as bit),
           totalPrices		= case when t.total = 0 then null else t.total end,
		   isTotalCheapest	= cast(case when t.total = (select min(total) 
														  from #totales)
                                   then 1 
                                   else 0 
                               end as bit),
		   isCheapestWProducts  = cast(case when t.nro_sucursal = @optima_sucursal 
                                         and t.nro_supermercado = @optima_supermercado
                                     then 1
                                     else 0
                                 end as bit),
		  hasPriceChangedTotal = cast(case when t.precios_actualizados_horas > 1 
											then 1 
											else 0 
									end as bit)
     from dbo.productos pr (nolock)
    cross join dbo.sucursales s (nolock)
		  join dbo.supermercados sm (nolock)
			on s.nro_supermercado	= sm.nro_supermercado
		  left join dbo.productos_supermercados ps (nolock)
			on pr.cod_barra			= ps.cod_barra 
		   and ps.nro_sucursal		= s.nro_sucursal 
           and ps.nro_supermercado	= sm.nro_supermercado
		  left join dbo.marcas_productos mp (nolock) 
		    on pr.nro_marca			= mp.nro_marca
		  left join #totales t 
			on s.nro_sucursal		= t.nro_sucursal 
		   and s.nro_supermercado	= t.nro_supermercado
		  left join MinPrices minp (nolock)
		    on minp.cod_barra = pr.cod_barra
	where s.nro_localidad = @nro_localidad
      and s.habilitada = 'S'
      and pr.cod_barra in (select cod_barra 
	                         from #productos)
	  and not (t.productos_actualizados is null)

	union all

    select barcode				= null,
		   productName			= null,
		   image				= null,
		   brandName			= null,
		   price				= null,
		   time_diference		= null,
		   hasPriceChanged		= null,
		   diferencePerc		= null,
		   isPositive			= null,
		   branchId				= s.nro_sucursal,
		   branchName			= s.nom_sucursal,
		   superId				= sm.nro_supermercado,
		   superName			= sm.razon_social,
		   isCheapest			= null,
		   totalPrices			= null,
		   isTotalCheapest		= null,
		   isCheapestWProducts	= null,
		   hasPriceChangedTotal = null
      from dbo.sucursales s
		   join dbo.supermercados sm
		     on s.nro_supermercado = sm.nro_supermercado
	 where s.nro_localidad = @nro_localidad
	   and not exists (select 1
						 from dbo.productos_supermercados ps
							  join #productos p 
							    on ps.cod_barra = p.cod_barra
					    where ps.nro_sucursal = s.nro_sucursal
						  and ps.nro_supermercado = s.nro_supermercado
						  and convert(date, ps.fecha_ult_actualizacion) = convert(date, @fecha))
    
	order by productName, superName, branchName

end;
go