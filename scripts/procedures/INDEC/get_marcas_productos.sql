/**************************************************************
Procedure that returns branches
****************************************************************/

use indec
go

create or alter procedure dbo.get_marcas_productos
(
	@cod_idioma		varchar(6),
	@json			varchar(max)
)
as
begin
		declare @nro_categoria		integer = null,
				@nro_rubro			integer = null,
				@nro_tipo_producto	integer	= null,
				@cuales				char(1) = null


		select	@nro_categoria		= json_value(@json, '$.categoryId'),
				@nro_rubro			= json_value(@json, '$.headingId'),
				@nro_tipo_producto	= json_value(@json, '$.productTypeId')

		if @nro_tipo_producto = 0
			set @nro_tipo_producto = null
		if @nro_categoria = 0
			set @nro_categoria = null
		if @nro_rubro = 0
			set @nro_rubro = null

		select brandId			= mp.nro_marca,
			   brandName		= mp.nom_marca
		  from dbo.marcas_productos mp (nolock)
		  join dbo.tipos_productos_marcas tpm (nolock)
		    on mp.nro_marca = tpm.nro_marca
		   and tpm.vigente = 'S'
		  join dbo.tipos_productos tp (nolock)
		    on tpm.nro_tipo_producto = tp.nro_tipo_producto
		  join dbo.categorias_productos cp (nolock)
		    on tp.nro_categoria = cp.nro_categoria
		   and cp.vigente = 'S'
		  join dbo.rubros_productos rp (nolock)
		    on rp.nro_rubro = cp.nro_rubro
		   and rp.vigente = 'S'
		 where mp.vigente = 'S'
		   and ((@nro_tipo_producto is not null and tp.nro_tipo_producto = @nro_tipo_producto)
			or (@nro_tipo_producto is null and @nro_categoria is not null and cp.nro_categoria = @nro_categoria)
			or (@nro_tipo_producto is null and @nro_categoria is null and @nro_rubro is not null and rp.nro_rubro = @nro_rubro))
		 group by mp.nro_marca,mp.nom_marca
		 order by brandName

end
go

/*

exec dbo.get_marcas_productos 
@json='{"cod_idioma":"ES","headingId":"1","categoryId":"1","productTypeId":"2"}' 

*/