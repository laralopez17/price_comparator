package ar.edu.ubp.das.indecapi.resources;

import ar.edu.ubp.das.indecapi.beans.*;
import ar.edu.ubp.das.indecapi.services.IndecService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/indec")
public class IndecResource {

    @Autowired
    private IndecService indecService;

    @GetMapping("/categorias")
    public ResponseEntity<List<RubroBean>> obtenerCategorias(@RequestHeader("Accept-Language") String codIdioma) {
        List<RubroBean> rubros = indecService.obtenerCategoriasProductos(codIdioma);
        return ResponseEntity.ok(rubros);
    }

    @PostMapping("/marcas/")
    public ResponseEntity<List<MarcaBean>> obtenerMarcas(@RequestHeader("Accept-Language") String codIdioma, @RequestBody RequestBean criteria) {
        List<MarcaBean> marcas = indecService.obtenerMarcas(codIdioma,criteria);
        return ResponseEntity.ok(marcas);
    }

    @PostMapping("/productos")
    public ResponseEntity<List<ProductoDescBean>> obtenerProductos(@RequestHeader("Accept-Language")String codIdioma, @RequestBody RequestBean criteria) {
        List<ProductoDescBean> productos = indecService.obtenerProductos(codIdioma, criteria);
        return ResponseEntity.ok(productos);
    }

    @GetMapping("/provincias")
    public ResponseEntity<List<ProvinciaBean>> obtenerProvincias() {
        List<ProvinciaBean> provincias = indecService.obtenerProvincias();
        return ResponseEntity.ok(provincias);
    }

    @PostMapping("/localidades")
    public ResponseEntity<List<LocalidadBean>> obtenerLocalidades(@RequestBody String provinceCode) {
        List<LocalidadBean> localidades = indecService.obtenerLocalidades(provinceCode);
        return ResponseEntity.ok(localidades);
    }

    @PostMapping("/comparador")
    public ResponseEntity<CarritoFinalBean> obtenerPreciosComparados(@RequestBody ProductoCriteriaBean criteria) {
        CarritoFinalBean response = indecService.obtenerPreciosComparados(criteria);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/informacion-sucursales")
    public ResponseEntity<List<InformacionSucursalBean>> obtenerInformacion(@RequestBody int nroLocalidad) {
        List<InformacionSucursalBean> response = indecService.obtenerInformacion(nroLocalidad);
        return ResponseEntity.ok(response);
    }
}
