/**********************************************************
Procedure that returns all products available on INDEC's db
***********************************************************/
use indec
go

create or alter procedure dbo.get_todos_productos
as
begin
	select barcode = cod_barra
	  from dbo.productos (nolock)
	 where vigente = 'S'
end
go

execute dbo.get_todos_productos