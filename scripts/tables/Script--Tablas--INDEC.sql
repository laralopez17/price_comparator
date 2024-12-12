/************************************************************
This script represents the tables of the company that will
compare the prices, in Argentina's context, it is INDEC.
************************************************************/

use indec
go

/*
drop table dbo.productos_supermercados
drop table dbo.productos
drop table dbo.servicios_supermercados
drop table dbo.sucursales
drop table dbo.supermercados
drop table dbo.idiomas_tipos_productos
drop table dbo.idiomas_rubros_productos
drop table dbo.idiomas_categorias_productos
drop table dbo.tipos_productos_marcas
drop table dbo.tipos_productos
drop table dbo.marcas_productos
drop table dbo.categorias_productos
drop table dbo.rubros_productos
drop table dbo.localidades
drop table dbo.provincias
drop table dbo.paises
drop table dbo.idiomas

*/

/*
select * from dbo.idiomas
select * from dbo.paises
select * from dbo.provincias
select * from dbo.localidades
select * from dbo.rubros_productos
select * from dbo.categorias_productos
select * from dbo.marcas_productos
select * from dbo.tipos_productos
select * from dbo.tipos_productos_marcas
select * from dbo.idiomas_categorias_productos
select * from dbo.idiomas_rubros_productos
select * from dbo.idiomas_tipos_productos
select * from dbo.supermercados
select * from dbo.servicios_supermercados
select * from dbo.sucursales
select * from dbo.productos
select * from dbo.productos_supermercados

*/

/* -------------------------------------
   Tabla: idiomas
   ------------------------------------- */
create table dbo.idiomas
(
 cod_idioma			varchar(6)		not null,
 nom_idioma			varchar(40)		not null,
 constraint PK__idiomas__END
			primary key(cod_idioma)
)
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

create table dbo.provincias
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
)
go

/* -------------------------------------
   Tabla: supermercados
   ------------------------------------- */

create table dbo.supermercados
(
 nro_supermercado	integer					not null identity,
 razon_social		varchar(100)			not null,
 cuit				varchar(40)				not null,
 constraint PK__supermercados__END
			primary key(nro_supermercado),
)
go

/* -------------------------------------
   Tabla: servicios_supermercados
   ------------------------------------- */

create table dbo.servicios_supermercados
(
 nro_supermercado		integer				not null,
 url_servicio			varchar(255)		not null,
 tipo_servicio			varchar(255)		not null,
 token_servicio			varchar(60)			not null,
 fecha_ult_act_servicio	smalldatetime		not null,
 espacio_nombre			varchar(255)		null,
 nombre_servicio		varchar(100)		null,
 puerto					varchar(100)		null
 constraint PK__servicios_supermercados__END
			primary key(nro_supermercado),
 constraint FK__servicios_supermercados__supermercados__END
			foreign key(nro_supermercado) references dbo.supermercados
)
go

/*
alter table dbo.servicios_supermercados
add espacio_nombre	varchar(255) null,
	nombre_servicio	varchar(100) null,
	puerto			varchar(100) null
go
*/
/* -------------------------------------
   Tabla: sucursales
   ------------------------------------- */

create table dbo.sucursales
(
 nro_supermercado		integer				not null,					
 nro_sucursal			integer				not null,
 nom_sucursal			varchar(255)		not null,
 calle					varchar(255),
 nro_calle				integer,
 telefonos				varchar(50),
 coord_latitud			decimal(9, 6),
 coord_longitud			decimal(9, 6),
 horario_sucursal		varchar(max),
 servicios_disponibles	varchar(max),
 nro_localidad			integer				not null,
 habilitada				char(1)				not null default 'S',
 constraint FK__sucursales__supermercados__END
			foreign key(nro_supermercado) references dbo.supermercados,
 constraint PK__sucursales__END
			primary key(nro_supermercado, nro_sucursal),
 constraint FK__sucursales__localidades__END
			foreign key(nro_localidad) references dbo.localidades,
 constraint CK__sucursales__habilitada__END 
			check (habilitada in ('S', 'N'))
)
go
 

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
   Tabla: idiomas_rubros_productos
   ------------------------------------- */
create table dbo.idiomas_rubros_productos
(
 nro_rubro			integer					not null,
 cod_idioma			varchar(6)				not null,
 rubro				varchar(255)			not null,
 constraint PK__idiomas_rubros_productos__END
			primary key(cod_idioma,nro_rubro),
 constraint FK__idiomas_rubros_productos__idiomas__END
			foreign key(cod_idioma) references dbo.idiomas
)
go

/* -------------------------------------
   Tabla: categorias_productos -- 40 inserciones Ej.: categorías del rubro almacen: aderezos, aceites, golosinas. Rubro Bebidas: Aguas, Energizantes, jugos, etc. Y así...
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
   Tabla: idiomas_categorias_productos 
   ------------------------------------- */

create table dbo.idiomas_categorias_productos
(
 nro_categoria		integer					not null,
 cod_idioma			varchar(6)				not null,
 categoria			varchar(255)			not null,
 constraint PK__idiomas_categorias_productos__END
			primary key(nro_categoria,cod_idioma),
 constraint FK__idiomas_categorias_productos__idiomas__END
			foreign key(cod_idioma) references dbo.idiomas,
  constraint FK__idiomas_categorias_productos__categorias_productos__END
			foreign key(nro_categoria) references dbo.categorias_productos
)
go

/* -------------------------------------
   Tabla: marcas_productos -- 30 inserciones--  marcas inventadas si queres
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
   Tabla: tipos_productos -- 60 inserciones Ej en aderezos: mayonesa, ketchup.. Etc. Gaseosas: Lima, Cola, Tónica, Naranja... etc
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
   Tabla: idiomas_tipos_productos
   ------------------------------------- */
create table dbo.idiomas_tipos_productos
(
 nro_tipo_producto	integer					not null,
 cod_idioma			varchar(6)				not null,
 tipo_producto		varchar(255)			not null,
 constraint PK__idiomas_tipos_productos__END
			primary key(nro_tipo_producto,cod_idioma),
 constraint FK__idiomas_tipos_productos__idiomas__END
			foreign key(cod_idioma) references dbo.idiomas,
 constraint FK__idiomas_tipos_productos__tipos_productos__END
			foreign key(nro_tipo_producto) references dbo.tipos_productos
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
 verificado					char(1)			not null default 'S'
 constraint FK__productos__categorias_productos__END
			foreign key(nro_categoria) references dbo.categorias_productos,
 constraint PK__productos__END
			primary key(cod_barra),
 constraint FK__productos__tipos_productos_marcas__END
			foreign key(nro_tipo_producto,nro_marca) references dbo.tipos_productos_marcas,
 constraint CK__productos__vigente__END 
			check (vigente in ('S', 'N')),
 constraint CK__productos__verificado__END 
			check (verificado in ('S', 'N'))
)
go

/* -------------------------------------
   Tabla: productos_supermercados
   ------------------------------------- */

create table dbo.productos_supermercados
(
 nro_supermercado			integer			not null,
 nro_sucursal				integer			not null,
 cod_barra					varchar(60)		not null,
 precio_anterior			decimal(10,2),
 precio_nuevo				decimal(10,2),
 fecha_ult_actualizacion	smalldatetime,
 constraint FK__productos_supermercados__sucursales__END
			foreign key(nro_supermercado,nro_sucursal) references dbo.sucursales,
 constraint PK__productos_supermercados__END
			primary key(nro_supermercado,nro_sucursal,cod_barra),
 constraint FK__productos_supermercados__productos__END
			foreign key(cod_barra) references dbo.productos
)
go