/*********************************************************************
For this project to work correctly, idealy you'll have as many databases 
as api's supermarket, as each brand needs a separate db.

In my case, the project has 4 supermarkets, so I had 4 db.
**********************************************************************/

use super1
go

/* -------------------------------------
   Tabla: paises
   ------------------------------------- */

create table dbo.paises
(
 cod_pais		varchar(3)			not null,
 nom_pais		varchar(255)		not null,
 local			varchar(30),
 constraint PK__paises__END 
			primary key(cod_pais),
)
go

/* -------------------------------------
   Tabla: provincias
   ------------------------------------- */

create table provincias
(
 cod_pais		varchar(3)			not null,
 cod_provincia	varchar(3)			not null,
 nom_provincia	varchar(255)		not null,
 
 constraint FK__provincias__paises__END 
			foreign key(cod_pais) references dbo.paises,
 constraint PK__provincias__END
			primary key(cod_pais, cod_provincia)
)
go

/* -------------------------------------
   Tabla: localidades
   ------------------------------------- */
create table dbo.localidades
(
 nro_localidad	integer					not null,
 nom_localidad	varchar(255)			not null,
 cod_pais		varchar(3)				not null,
 cod_provincia	varchar(3)				null,
 constraint PK__localidades__END 
			primary key(nro_localidad),
 constraint FK__localidades__paises__END			
			foreign key(cod_pais) references dbo.paises,
 constraint FK__localidades__provincias__END			
			foreign key(cod_pais, cod_provincia) references dbo.provincias,
 constraint UK__localidades__provincias__END
			unique(cod_pais, cod_provincia, nom_localidad)
);
go

/**************************************************************************************

								INFO DE SUPERMERCADOS

**************************************************************************************/
/* -------------------------------------
   Tabla: tipos_servicios_supermercado
   ------------------------------------- */
create table dbo.tipos_servicios_supermercado (
 nro_tipo_servicio	integer			not null,
 nom_tipo_servicio	varchar(100)	not null,
 constraint PK_tipos_servicios_supermercado__END
			primary key (nro_tipo_servicio)
);
go

/* -------------------------------------
   Tabla: supermercado
   ------------------------------------- */
create table dbo.supermercado 
(
 cuit			varchar(11)		not null,
 razon_social	varchar(100)	not null,
 calle			varchar(100)	not null,
 nro_calle		integer			not null,
 telefonos		varchar(50)		not null,
 constraint PK_supermercado__END
			primary key(cuit)
);
go

/* -------------------------------------
   Tabla: sucursales
   ------------------------------------- */
create table dbo.sucursales 
(
 nro_sucursal		integer			not null,
 nom_sucursal		varchar(100)	not null,
 calle				varchar(100)	not null,
 nro_calle			integer			not null,
 telefonos			varchar(50)		not null,
 coord_latitud		decimal(9, 6)	null,
 coord_longitud		decimal(9, 6)	null,
 nro_localidad		integer			not null,
 habilitada			char(1)			not null,
 constraint PK_sucursales__END
			primary key (nro_sucursal),
 constraint FK_sucursales__localidades__END
			foreign key (nro_localidad) references localidades(nro_localidad),
 constraint CK_sucursales__habilitada__END 
			check (habilitada in ('S', 'N'))
);
go

/* -------------------------------------
   Tabla: tipos_servicios_sucursales
   ------------------------------------- */
create table dbo.tipos_servicios_sucursales 
(
 nro_sucursal			integer		not null,
 nro_tipo_servicio		integer		not null,
 vigente				char(1)		not null default 'S',
 constraint PK_tipos_servicios_sucursales_END
			primary key (nro_sucursal, nro_tipo_servicio),
 constraint FK_tipos_servicios_sucursales__sucursales__END
			foreign key (nro_sucursal) references dbo.sucursales(nro_sucursal),
 constraint FK_tipos_servicios_sucursales__tipos_servicios_supermercado__END
			foreign key (nro_tipo_servicio) references dbo.tipos_servicios_supermercado(nro_tipo_servicio),
 constraint CK_tipos_servicios_sucursales__vigente__END
			check (vigente in ('S', 'N'))
);
go

/* -------------------------------------
   Tabla: horarios_sucursales
   ------------------------------------- */
create table dbo.horarios_sucursales 
(
 nro_sucursal		integer		not null,
 dia_semana			varchar(15)	not null,
 hora_desde			time		not null,
 hora_hasta			time		not null,
 orden				tinyint		not null,
 constraint PK_horarios_sucursales__END
			primary key (nro_sucursal, dia_semana),
 constraint FK_horarios_sucursales__sucursales__END
			foreign key (nro_sucursal) references dbo.sucursales(nro_sucursal)
);
go

/* -------------------------------------
   Tabla: empresas_externas
   ------------------------------------- */
create table dbo.empresas_externas 
(
 nro_empresa				integer			not null,
 razon_social				varchar(100)	not null,
 cuit_empresa				varchar(11)		not null,
 token_servicio				varchar(36)		not null,
 constraint PK_empresas_externas__END
			primary key (nro_empresa)
)
go

/**************************************************************************************

								INFO DE PRODUCTOS

**************************************************************************************/

/* -------------------------------------
   Tabla: rubros_productos
   ------------------------------------- */
create table dbo.rubros_productos
(
 nro_rubro			integer					not null,
 nom_rubro			varchar(255)			not null,
 vigente			char(1)					not null default 'S',
 constraint PK__rubros_productos__END
			primary key(nro_rubro),
 constraint CK__rubros_productos__vigente__END 
			check (vigente in ('S', 'N'))
)
go

/* -------------------------------------
   Tabla: categorias_productos
   ------------------------------------- */
create table dbo.categorias_productos
(
 nro_categoria		integer					not null,
 nom_categoria		varchar(255)			not null,
 nro_rubro			integer					not null,
 vigente			char(1)					not null default 'S',
 constraint PK__categorias_productos__END
			primary key(nro_categoria),
 constraint FK__categorias_productos__rubros_productos__END
			foreign key(nro_rubro) references dbo.rubros_productos,
 constraint CK__categorias_productos__vigente__END 
			check (vigente in ('S', 'N'))
)
go

/* -------------------------------------
   Tabla: marcas_productos
   ------------------------------------- */
create table dbo.marcas_productos
(
 nro_marca			integer					not null,
 nom_marca			varchar(60)				not null,
 vigente			char(1)					not null default 'S',
 constraint PK__marcas_productos__END
			primary key(nro_marca),
 constraint CK__marcas_productos__vigente__END 
			check (vigente in ('S', 'N'))
)
go

/* -------------------------------------
   Tabla: tipos_productos
   ------------------------------------- */
create table dbo.tipos_productos
(
 nro_tipo_producto	integer					not null,
 nro_categoria		integer					not null,
 nom_tipo_producto	varchar(255)			not null,
 constraint PK__tipos_productos__END
			primary key(nro_tipo_producto),
 constraint FK__tipos_productos__categorias_productos__END
			foreign key(nro_categoria) references dbo.categorias_productos
)
go

/* -------------------------------------
   Tabla: tipos_productos_marcas
   ------------------------------------- */
create table dbo.tipos_productos_marcas
(
 nro_tipo_producto	integer					not null,
 nro_marca			integer					not null,
 vigente			char(1)					not null default 'S',
 constraint PK__tipos_productos_marcas__END
			primary key(nro_tipo_producto,nro_marca),
 constraint FK__tipos_productos_marcas__tipos_productos__END
			foreign key(nro_tipo_producto) references dbo.tipos_productos,
 constraint FK__tipos_productos_marcas__marcas_productos__END
			foreign key(nro_marca) references dbo.marcas_productos,
 constraint CK__tipos_productos_marcas__vigente__END 
			check (vigente in ('S', 'N'))
)
go

/* -------------------------------------
   Tabla: productos
   ------------------------------------- */
create table dbo.productos
(
 cod_barra					varchar(60)		not null,
 nom_producto				varchar(100)	not null,
 desc_producto				varchar(255)	null,
 nro_categoria				integer			not null,
 imagen						varchar(255)	null,
 nro_tipo_producto			integer			not null,
 nro_marca					integer			not null,
 vigente					char(1)			not null default 'S',
 constraint FK__productos__categorias_productos__END
			foreign key(nro_categoria) references dbo.categorias_productos,
 constraint PK__productos__END
			primary key(cod_barra),
 constraint FK__productos__tipos_productos_marcas__END
			foreign key(nro_tipo_producto,nro_marca) references dbo.tipos_productos_marcas,
 constraint CK__productos__vigente__END 
			check (vigente in ('S', 'N'))
)
go

/* -------------------------------------
   Tabla: productos_sucursales
   ------------------------------------- */
create table dbo.productos_sucursales
(
 nro_sucursal			integer			not null,
 cod_barra				varchar(60)		not null,
 precio					decimal(10, 2)	not null,
 vigente				char(1)			not null default 'S',
 constraint PK_productos_sucursales__END
			primary key (nro_sucursal, cod_barra),
 constraint FK_productos_sucursales__sucursales__END
			foreign key (nro_sucursal) references dbo.sucursales(nro_sucursal),
 constraint FK_productos_sucursales__productos__END
			foreign key (cod_barra) references dbo.productos(cod_barra),
 constraint CK_productos_sucursales__vigente__END
			check (vigente in ('S', 'N'))
)
go
