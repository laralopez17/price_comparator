/***************************************************
Procedure that returns a list of provinces.
Note: only for 'AR' (Argentina) it can be updated to 
receive a country code and filter.
****************************************************/

use indec
go

create or alter procedure dbo.get_provincias
as
begin

	select provinceCode		= p.cod_provincia,
		   countryCode      = p.cod_pais,
		   provinceName		= p.nom_provincia
	  from dbo.provincias p (nolock)
	 where p.cod_pais = 'AR'
	 order by provinceName

end
go