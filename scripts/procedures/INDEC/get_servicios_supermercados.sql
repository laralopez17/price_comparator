/***************************************************************
Procedure that returns the service information of a supermarket. 
This information is related to the APIs, both REST and WS, such 
as tokens, service's type, namespace
****************************************************************/

use indec
go

create or alter procedure dbo.get_servicios_supermercados
as
begin

		select superId		= nro_supermercado, 
			   serviceUrl	= url_servicio, 
			   serviceType	= tipo_servicio, 
			   serviceToken	= token_servicio, 
			   lastActDate	= fecha_ult_act_servicio,
			   namespace	= espacio_nombre,
			   serviceName	= nombre_servicio,
			   portName		= puerto
		  from dbo.servicios_supermercados

end
go
