package ar.edu.ubp.das.indecapi.beans;

import java.time.LocalDateTime;

public class ServicioSupermercadoBean {
    private int superId;
    private String serviceUrl;
    private String serviceType;
    private String serviceToken;
    private LocalDateTime lastActDate;
    private String namespace;
    private String serviceName;
    private String portName;

    public int getSuperId() {
        return superId;
    }

    public void setSuperId(int superId) {
        this.superId = superId;
    }

    public String getServiceUrl() {
        return serviceUrl;
    }

    public void setServiceUrl(String serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public String getServiceToken() {
        return serviceToken;
    }

    public void setServiceToken(String serviceToken) {
        this.serviceToken = serviceToken;
    }

    public LocalDateTime getLastActDate() {
        return lastActDate;
    }

    public void setLastActDate(LocalDateTime lastActDate) {
        this.lastActDate = lastActDate;
    }

    public String getNamespace() {
        return namespace;
    }

    public void setNamespace(String namespace) {
        this.namespace = namespace;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getPortName() {
        return portName;
    }

    public void setPortName(String portName) {
        this.portName = portName;
    }
}
