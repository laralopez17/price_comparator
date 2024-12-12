package ar.edu.ubp.das.indecapi.batch;

import ar.edu.ubp.das.indecapi.repositories.BatchRepository;
import ar.edu.ubp.das.indecapi.utils.Httpful;
import jakarta.ws.rs.HttpMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class Procesos {
    private static final Logger logger = LoggerFactory.getLogger(Procesos.class);
    private final Httpful httpClient = new Httpful("http://localhost:8087/api/v1/batch");

    public boolean ejecutarPrecios() {
        return ejecutarBatch("/precios-productos-batch");
    }

    public boolean ejecutarInformacion() {
        return ejecutarBatch("/informacion-batch");
    }

    private boolean ejecutarBatch(String path) {
        try {
            httpClient.path(path)
                    .method(HttpMethod.POST)
                    .execute(Void.class);
            return true;
        } catch (Exception e) {
            logger.error("Error al ejecutar batch en {}: {}", path, e.getMessage());
            return false;
        }
    }
}