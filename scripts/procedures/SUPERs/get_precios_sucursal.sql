/*****************************************************************************
Procedure that returns the prices of each branch of the requested products.
To be runed in each supermarket's db
*****************************************************************************/

use super4
go

create or alter procedure dbo.get_precios_sucursal
(
	@json			nvarchar(max)
)
as
begin

	create table #temp_productos 
	(
     cod_barra					varchar(60)
    )

    insert into #temp_productos (cod_barra)
    select
        cod_barra			= json_value(value, '$.barcode')
    from openjson(@json) as value
	
	select branchId = p.nro_sucursal,
		   barcode = p.cod_barra,
		   price = p.precio 
	  from dbo.productos_sucursales p 
	       join #temp_productos tp
		     on p.cod_barra = tp.cod_barra
end
go