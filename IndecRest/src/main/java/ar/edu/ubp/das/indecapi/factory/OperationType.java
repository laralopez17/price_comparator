package ar.edu.ubp.das.indecapi.factory;

public enum OperationType {
    OBTENER_PRECIOS("ObtenerPreciosRequest"),
    OBTENER_INFORMACION("ObtenerInformacionRequest");

    private final String operationName;

    OperationType(String operationName) {
        this.operationName = operationName;
    }

    public String getOperationName() {
        return operationName;
    }
}
