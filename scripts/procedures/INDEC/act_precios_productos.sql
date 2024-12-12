/************************************************************************
Procedure that register the list of updated prices.
************************************************************************/
use indec
go

create or alter procedure dbo.act_precios_productos
(
    @json nvarchar(max),
	@nro_supermercado integer
)
as
begin
    declare @fecha_ult_actualizacion datetime = getdate()

    create table #temp_productos 
    (
        nro_supermercado    int,
        nro_sucursal        int,
        cod_barra           varchar(60),
		precio_anterior		decimal(10, 2),
        precio_nuevo        decimal(10, 2)
    )

    insert into #temp_productos (nro_supermercado, nro_sucursal, cod_barra, precio_nuevo)
    select
        nro_supermercado    = @nro_supermercado,
        nro_sucursal        = cast(json_value(value, '$.branchId')as int),
        cod_barra           = json_value(value, '$.barcode'),
        precio_nuevo        = cast(json_value(value, '$.price') as decimal(10, 2))
    from openjson(@json) as value

	update tp
	   set tp.precio_anterior = p.precio_nuevo
	  from #temp_productos tp
	  join dbo.productos_supermercados p
	    on p.nro_supermercado	= tp.nro_supermercado
	   and p.nro_sucursal		= tp.nro_sucursal
	   and p.cod_barra			= tp.cod_barra


    update p
       set p.precio_anterior			= tp.precio_anterior,
		   p.precio_nuevo				= tp.precio_nuevo,
           p.fecha_ult_actualizacion	= @fecha_ult_actualizacion
      from dbo.productos_supermercados p
		   join #temp_productos tp
		     on p.cod_barra = tp.cod_barra
			and p.nro_supermercado = tp.nro_supermercado
			and p.nro_sucursal = tp.nro_sucursal
			and tp.precio_nuevo != tp.precio_anterior

    insert into dbo.productos_supermercados (nro_supermercado, nro_sucursal, cod_barra, precio_nuevo, fecha_ult_actualizacion)
    select 
        tp.nro_supermercado, 
        tp.nro_sucursal, 
        tp.cod_barra, 
		tp.precio_nuevo,
        @fecha_ult_actualizacion
    from #temp_productos tp
    where not exists (
        select 1
        from dbo.productos_supermercados ps
        where ps.cod_barra = tp.cod_barra
          and ps.nro_supermercado = tp.nro_supermercado
          and ps.nro_sucursal = tp.nro_sucursal
    )
    and exists (
        select 1
        from dbo.productos p
        where p.cod_barra = tp.cod_barra
    )
	and exists (
		select 1
		from dbo.sucursales s
		where s.nro_supermercado = tp.nro_supermercado
		and s.nro_sucursal = tp.nro_sucursal
	)

end
go
