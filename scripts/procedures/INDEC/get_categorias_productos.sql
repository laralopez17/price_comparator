/**************************************************************
Procedure that returns headings, categories, product types.
****************************************************************/

use indec
go

create or alter procedure dbo.get_categorias_productos
(
	@cod_idioma		varchar(6)
)
as
begin
		
		select headingId		= rp.nro_rubro,
			   headingName		= irp.rubro,
			   categoryId		= cp.nro_categoria,
			   categoryName		= icp.categoria,
			   productTypeId	= tp.nro_tipo_producto,
			   productTypeName	= itp.tipo_producto
		  from dbo.rubros_productos rp (nolock)
		  join dbo.idiomas_rubros_productos irp (nolock)
		    on rp.nro_rubro = irp.nro_rubro
		   and irp.cod_idioma = @cod_idioma
		  join dbo.categorias_productos cp (nolock)
		    on rp.nro_rubro = cp.nro_rubro
		  join dbo.idiomas_categorias_productos icp (nolock)
		    on cp.nro_categoria = icp.nro_categoria
		   and icp.cod_idioma = @cod_idioma
		  join dbo.tipos_productos tp (nolock)
		    on cp.nro_categoria = tp.nro_categoria
		  join dbo.idiomas_tipos_productos itp (nolock)
		    on tp.nro_tipo_producto = itp.nro_tipo_producto
		   and itp.cod_idioma = @cod_idioma
		  join dbo.tipos_productos_marcas tpm (nolock)
		    on tp.nro_tipo_producto = tpm.nro_tipo_producto
		   and tpm.vigente = 'S'
		  join dbo.marcas_productos mp (nolock)
		    on tpm.nro_marca = mp.nro_marca
		   and mp.vigente = 'S'
		 where cp.vigente = 'S'
		 order by headingId,categoryId,productTypeId


end
go