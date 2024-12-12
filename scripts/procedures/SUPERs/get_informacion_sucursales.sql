/***********************************************************************************************
Procedure that returns the basic information from branches.
To be runed in each supermarket's db
**************************************************************************************************/

use super4
go

create or alter procedure dbo.get_informacion_sucursales
as
begin

	with horarios_cte as (
		 select nro_sucursal	= s.nro_sucursal,
				orden			= hs.orden,
				horarios		= ' ' + hs.dia_semana + 
								  ': ' + convert(varchar(5), hs.hora_desde, 108) + 
								 ' a ' + convert(varchar(5), hs.hora_hasta, 108) + 
								 ' hs.'
	    from dbo.horarios_sucursales hs (nolock)
			 join dbo.sucursales s (nolock)
			   on s.nro_sucursal = hs.nro_sucursal )

	select  branches		= (	select	branchId			= s.nro_sucursal,
										branchName			= s.nom_sucursal,
										street				= s.calle,
										streetId			= s.nro_calle,
										phone				= s.telefonos,
										latitude			= s.coord_latitud,
										longitude			= s.coord_longitud,
										localityId			= s.nro_localidad,
										branchSchedule		= string_agg(h.horarios, ' ') within group (order by h.orden),
										branchServices		= (select serviceTypeName = string_agg(tss.nom_tipo_servicio, ' - ')
																 from dbo.tipos_servicios_supermercado tss 
																	  join dbo.tipos_servicios_sucursales ts 
																		on tss.nro_tipo_servicio = ts.nro_tipo_servicio 
																where ts.vigente = 'S' 
																  and ts.nro_sucursal = s.nro_sucursal)
										from dbo.sucursales s (nolock)
													join horarios_cte h (nolock)
													  on h.nro_sucursal = s.nro_sucursal
										 where s.habilitada = 'S'
										 group by s.nro_sucursal, s.nom_sucursal, s.calle, s.nro_calle, s.telefonos, s.nro_localidad, s.coord_latitud,s.coord_longitud
										 order by s.nro_sucursal
								for json path),
			products		= (select barcode		= p.cod_barra,
									  productName	= p.nom_producto,
									  productDesc	= p.desc_producto,
									  categoryId	= p.nro_categoria,
									  image			= p.imagen,
									  productTypeId	= p.nro_tipo_producto,
									  brandId		= p.nro_marca
								 from dbo.productos p (nolock)
								where p.vigente = 'S'
								for json path)
		   

end
go