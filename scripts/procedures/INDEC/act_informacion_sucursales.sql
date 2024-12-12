/*****************************************************
Procedure that register the updated branch information
******************************************************/

use indec
go

create or alter procedure dbo.act_informacion_sucursales
(
	@nro_supermercado integer,
    @json nvarchar(max)
)
as
begin

	create table #sucursales
	(
	 nro_supermercado	integer,
	 nro_sucursal		integer,
	 nom_sucursal		varchar(255),
	 calle				varchar(255),
	 nro_calle			integer,
	 telefonos			varchar(50),
	 nro_localidad		integer,
	 latitud			decimal(9, 6),
	 longitud			decimal(9, 6),
	 horarios			varchar(max),
	 servicios			varchar(max)
	);

	create table #productos
	(
	 cod_barra					varchar(60),
	 nom_producto				varchar(100),	
	 desc_producto				varchar(255),
	 nro_categoria				integer,			
	 imagen						varchar(255),
	 nro_tipo_producto			integer,		
	 nro_marca					integer,	
	 vigente					char(1),	
	 verificado					char(1)
	);

	insert into #sucursales (nro_supermercado, nro_sucursal, nom_sucursal, calle, nro_calle, telefonos, nro_localidad,latitud,longitud, horarios, servicios)
	select  
		@nro_supermercado,
		json_value(branch.value, '$.branchId'), 
		json_value(branch.value, '$.branchName'), 
		json_value(branch.value, '$.street'), 
		json_value(branch.value, '$.streetId'),
		json_value(branch.value, '$.phone'), 
		json_value(branch.value, '$.localityId'),
		cast(json_value(branch.value, '$.latitude')as decimal(9, 6)),
		cast(json_value(branch.value, '$.longitude')as decimal(9, 6)),
		json_value(branch.value, '$.branchSchedule'),
		json_value(branch.value, '$.branchServices')
	from openjson(@json, '$[0].branches') as branch;

	insert into #productos (cod_barra, nom_producto, desc_producto, nro_categoria, imagen, nro_tipo_producto, nro_marca)
	select  
		json_value(product.value, '$.barcode'), 
		json_value(product.value, '$.productName'),
		json_value(product.value, '$.productDesc'),
		json_value(product.value, '$.categoryId'),
		json_value(product.value, '$.image'),
		json_value(product.value, '$.productTypeId'),
		json_value(product.value, '$.brandId')
	from openjson(@json, '$[0].products') as product;

	if exists (select 1 from dbo.sucursales)
	begin
	 -- Actualizar las filas existentes
    update suc
       set suc.nom_sucursal = src.nom_sucursal,
		   suc.calle = src.calle,
		   suc.nro_calle = src.nro_calle,
		   suc.telefonos = src.telefonos,
		   suc.horario_sucursal = src.horarios,
		   suc.coord_latitud = src.latitud,
		   suc.coord_longitud	= src.longitud,
		   suc.servicios_disponibles = src.servicios,
		   suc.nro_localidad = src.nro_localidad,
		   suc.habilitada = 'S'
      from dbo.sucursales suc
		   join #sucursales src
			 on suc.nro_supermercado = src.nro_supermercado
			and suc.nro_sucursal = src.nro_sucursal
	end
	--sp_help "dbo.sucursales"
    -- Insertar nuevas filas si no existen
    insert into dbo.sucursales (nro_supermercado, nro_sucursal, nom_sucursal, calle, nro_calle, telefonos, coord_latitud, coord_longitud, horario_sucursal, servicios_disponibles, nro_localidad, habilitada)
    select src.nro_supermercado, src.nro_sucursal, src.nom_sucursal, src.calle, src.nro_calle, src.telefonos, src.latitud, src.longitud,src.horarios, src.servicios, src.nro_localidad, 'S'
      from #sucursales src
     where not exists (select * 
						 from dbo.sucursales suc
						where suc.nro_supermercado = src.nro_supermercado
						  and suc.nro_sucursal = src.nro_sucursal)
	 
	 insert into dbo.productos(cod_barra,nom_producto,desc_producto,nro_categoria,imagen,nro_tipo_producto,nro_marca,vigente,verificado)
	 select p.cod_barra, p.nom_producto, p.desc_producto, p.nro_categoria, p.imagen, p.nro_tipo_producto, p.nro_marca, 'N', 'N'
	   from #productos p
	  where not exists (select 1
						  from dbo.productos pd
						 where p.cod_barra = pd.cod_barra)
end
go