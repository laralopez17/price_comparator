/***********************************************************************************************
Procedure that returns the information of all branches pero supermarket
**************************************************************************************************/

use indec
go

create or alter procedure dbo.get_informacion_sucursales
(
 @nro_localidad  integer
)
as
begin

	select superId			= s.nro_supermercado,
		   superName		= su.razon_social,
		   branchId			= s.nro_sucursal,
		   branchName		= s.nom_sucursal,
		   address			= upper(s.calle + ' '+ cast(s.nro_calle as varchar)  + ' - ' + l.nom_localidad + ' - ' + p.nom_provincia),
		   phone			= s.telefonos,
		   latitude			= s.coord_latitud,
		   longitude		= s.coord_longitud,
		   localityId       = s.nro_localidad,
		   branchSchedule	= s.horario_sucursal,
		   branchServices	= s.servicios_disponibles
	  from dbo.sucursales s (nolock)
		   join dbo.localidades l (nolock)
		     on s.nro_localidad = l.nro_localidad
		   join dbo.provincias p (nolock)
		     on l.cod_provincia = p.cod_provincia
		   join dbo.supermercados su (nolock)
		     on s.nro_supermercado = su.nro_supermercado
	 where s.habilitada = 'S'
	   and l.nro_localidad = @nro_localidad
	 order by s.nro_supermercado,s.nro_sucursal;

end
go