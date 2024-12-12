/***********************************************************************************************
Procedure that returns the information all supermarkets in a locality and province
**************************************************************************************************/

use indec
go

create or alter procedure dbo.get_supermercados
(
	@cod_provincia		varchar(6),
	@nro_localidad		integer
)
as
begin

	select superId			= s.nro_supermercado,
		   superName		= sm.razon_social,
		   branchId			= s.nro_sucursal,
		   branchName		= s.nom_sucursal,
		   address			= s.calle + cast(s.nro_calle as varchar) + ', ' + l.nom_localidad + ', ' + p.nom_provincia,
		   phone			= s.telefonos,
		   hours			= s.horario_sucursal

	  from dbo.sucursales s (nolock)
		   join dbo.supermercados sm (nolock)
		     on s.nro_supermercado = sm.nro_supermercado
		   join dbo.localidades l (nolock)
		     on s.nro_localidad = l.nro_localidad
		   join dbo.provincias p (nolock)
		     on l.cod_provincia = p.cod_provincia
	 where s.nro_localidad = @nro_localidad
	   and p.cod_provincia = @cod_provincia
	   and s.habilitada = 'S'

end
go