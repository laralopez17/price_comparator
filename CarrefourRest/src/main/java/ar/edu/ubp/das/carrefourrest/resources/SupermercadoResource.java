package ar.edu.ubp.das.carrefourrest.resources;

import ar.edu.ubp.das.carrefourrest.repositories.SupermercadosRepository;
import ar.edu.ubp.das.carrefourrest.beans.InformacionBean;
import ar.edu.ubp.das.carrefourrest.beans.PrecioBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supermercados")
public class SupermercadoResource {

    @Autowired
    private SupermercadosRepository supermercadosRepository;

    @PostMapping(value = "/precios-productos", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PrecioBean>> obtenerPrecios(@RequestBody String criteria) {
        List<PrecioBean> precios = supermercadosRepository.getPreciosSucursal(criteria);
        return ResponseEntity.ok(precios);
    }

    @PostMapping(value = "/informacion-supermercado", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<InformacionBean>> obtenerInformacionSupermercado() {
        List<InformacionBean> info = supermercadosRepository.getInformacionSucursales();
        return ResponseEntity.ok(info);
    }
}
