/********************************************************************
Procedure that returns all the products from a heading, category
product type and/or brand.
If null, returns all products.
*********************************************************************/

use indec
go

create or alter procedure dbo.get_productos
(
	@cod_idioma		varchar(6),
	@json			varchar(max)
)
as
begin
	declare	@nro_categoria			integer = null,
			@nro_marca				integer = null,
			@nro_tipo_producto		integer = null,
			@nro_rubro				integer	= null,
			@cuales					char(1) = null
	
	select	@nro_categoria			= json_value(@json, '$.categoryId'),
			@nro_marca				= json_value(@json, '$.brandId'),
			@nro_tipo_producto		= json_value(@json, '$.productTypeId'),
			@nro_rubro				= json_value(@json, '$.headingId')
	
	if @nro_tipo_producto = 0
		set @nro_tipo_producto = null
	if @nro_categoria = 0
		set @nro_categoria = null
	if @nro_rubro = 0
		set @nro_rubro = null
	if @nro_marca = 0
		set @nro_marca = null
	
	if @cuales is null and @nro_categoria is null and @nro_tipo_producto is null and @nro_rubro is null
	 set @cuales = 'T'
		
		select categoryId		= cp.nro_categoria,
			   categoryName		= icp.categoria,
			   productId		= p.cod_barra,
			   productName		= p.nom_producto,
			   productDesc		= p.desc_producto,
			   productImage		= p.imagen,
			   productBrandId	= p.nro_marca,
			   productBrandName	= mp.nom_marca,
			   productTypeId	= p.nro_tipo_producto,
			   headingId		= cp.nro_rubro
		  from dbo.productos p (nolock)
		  join  dbo.categorias_productos cp (nolock)
		    on p.nro_categoria = cp.nro_categoria
		  join dbo.idiomas_categorias_productos icp (nolock)
		    on cp.nro_categoria = icp.nro_categoria
		  join dbo.marcas_productos mp (nolock)
		    on p.nro_marca = mp.nro_marca
		 where cp.vigente		= 'S'
		   and icp.cod_idioma	= @cod_idioma
		   and p.vigente		= 'S'
		   and ((@nro_tipo_producto is not null and p.nro_tipo_producto = @nro_tipo_producto)
			or (@nro_tipo_producto is null and @nro_categoria is not null and cp.nro_categoria = @nro_categoria)
			or (@nro_tipo_producto is null and @nro_categoria is null and @nro_rubro is not null and cp.nro_rubro = @nro_rubro)
		    or @cuales='T')
		   and (@nro_marca is null
		    or p.nro_marca = @nro_marca)
		 order by productName,categoryId	 
end
go
