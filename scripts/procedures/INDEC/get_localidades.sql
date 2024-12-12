/************************************************************
Procedure that returns the list of localities in a province.
*************************************************************/

use indec
go

create or alter procedure dbo.get_localidades
(
	@cod_provincia		varchar(3)
)
as
begin

	select provinceCode		= l.cod_provincia,
		   countryCode      = l.cod_pais,
		   localityId		= l.nro_localidad,
		   localityName     = l.nom_localidad
	  from dbo.localidades l (nolock)
	 where l.cod_provincia	= @cod_provincia
	 order by localityName

end
go