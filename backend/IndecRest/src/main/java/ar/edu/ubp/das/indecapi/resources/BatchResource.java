package ar.edu.ubp.das.indecapi.resources;

import ar.edu.ubp.das.indecapi.repositories.BatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/batch")
public class BatchResource {

    @Autowired
    private BatchRepository batchRepository;

    @PostMapping("/precios-productos-batch")
    public ResponseEntity<Void> obtenerPreciosProductosBatch() {
        batchRepository.obtenerPreciosProductosBatch();
        return ResponseEntity.ok().build();
    }


    @PostMapping("/informacion-batch")
    public ResponseEntity<Void> obtenerInformacionBatch() {
        batchRepository.obtenerInformacionBatch();
        return ResponseEntity.ok().build();
    }
}