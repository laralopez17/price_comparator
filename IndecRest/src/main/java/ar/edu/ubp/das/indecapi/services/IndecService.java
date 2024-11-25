package ar.edu.ubp.das.indecapi.services;

import ar.edu.ubp.das.indecapi.beans.*;
import ar.edu.ubp.das.indecapi.repositories.IndecRepository;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class IndecService {

    @Autowired
    private IndecRepository indecRepository;

    private final Gson gson = new Gson();
    public List<RubroBean> obtenerCategoriasProductos(String codIdioma) {
        List<Map<String, Object>> filas = indecRepository.getCategoriasProductos(codIdioma);

        return new ArrayList<>(filas.stream()
                .collect(Collectors.groupingBy(
                        row -> (int) row.get("headingId"),
                        Collectors.collectingAndThen(
                                Collectors.toList(),
                                listaRubros -> {
                                    RubroBean rubro = new RubroBean();
                                    rubro.setHeadingId((int) listaRubros.get(0).get("headingId"));
                                    rubro.setHeadingName((String) listaRubros.get(0).get("headingName"));

                                    List<CategoriaBean> categorias = new ArrayList<>(listaRubros.stream()
                                            .collect(Collectors.groupingBy(
                                                    row -> (int) row.get("categoryId"),
                                                    Collectors.collectingAndThen(
                                                            Collectors.toList(),
                                                            listaCategorias -> {
                                                                CategoriaBean categoria = new CategoriaBean();
                                                                categoria.setCategoryId((int) listaCategorias.get(0).get("categoryId"));
                                                                categoria.setCategoryName((String) listaCategorias.get(0).get("categoryName"));

                                                                List<TipoProductoBean> tiposProductos = new ArrayList<>(listaCategorias.stream()
                                                                        .collect(Collectors.groupingBy(
                                                                                row -> (int) row.get("productTypeId"),
                                                                                Collectors.collectingAndThen(
                                                                                        Collectors.toList(),
                                                                                        listaTipos -> {
                                                                                            TipoProductoBean tipoProducto = new TipoProductoBean();
                                                                                            tipoProducto.setProductTypeId((int) listaTipos.get(0).get("productTypeId"));
                                                                                            tipoProducto.setProductTypeName((String) listaTipos.get(0).get("productTypeName"));
                                                                                            return tipoProducto;
                                                                                        }
                                                                                )
                                                                        ))
                                                                        .values());

                                                                categoria.setProductTypes(tiposProductos);
                                                                return categoria;
                                                            }
                                                    )
                                            ))
                                            .values());

                                    rubro.setCategories(categorias);
                                    return rubro;
                                }
                        )
                ))
                .values());
    }

    public List<MarcaBean> obtenerMarcas(String codIdioma, RequestBean criteria) {
        return indecRepository.getMarcas(codIdioma, criteria);
    }

    public List<ProductoDescBean> obtenerProductos(String codIdioma, RequestBean criteria) {
        return indecRepository.getProductos(codIdioma, criteria);
    }

    public List<ProvinciaBean> obtenerProvincias() {
        return indecRepository.getProvincias();
    }

    public List<LocalidadBean> obtenerLocalidades(String codProvince) {
        return indecRepository.getLocalidades(codProvince);
    }

    public CarritoFinalBean obtenerPreciosComparados(ProductoCriteriaBean criteria) {

        List<ComparadorPreciosBean> preciosComparados = indecRepository.getPreciosComparados(criteria);

        Map<String, List<ComparadorPreciosBean>> preciosPorProducto = preciosComparados.stream()
                .filter(precio -> precio.getBarcode() != null)
                .collect(Collectors.groupingBy(ComparadorPreciosBean::getBarcode));

        List<ComparadorProductosBean> products = preciosPorProducto.entrySet().stream()
                .map(entry -> {
                    String barcode = entry.getKey();

                    List<ComparadorPreciosBean> precios = entry.getValue();

                    String productName = precios.get(0).getProductName();
                    String image = precios.get(0).getImage();
                    String brandName = precios.get(0).getBrandName();

                    List<ComparadorPrecioBean> prices = precios.stream()
                            .map(precio -> {
                                ComparadorPrecioBean priceResponse = new ComparadorPrecioBean();
                                priceResponse.setSuperId(precio.getSuperId());
                                priceResponse.setBranchId(precio.getBranchId());
                                priceResponse.setPrice(precio.getPrice());
                                priceResponse.setBranchName(precio.getBranchName());
                                priceResponse.setSuperName(precio.getSuperName());
                                priceResponse.setCheapest(precio.isCheapest());
                                return priceResponse;
                            })
                            .collect(Collectors.toList());

                    // Creamos el ProductResponseBean
                    ComparadorProductosBean productResponse = new ComparadorProductosBean();
                    productResponse.setBarcode(barcode);
                    productResponse.setProductName(productName);
                    productResponse.setImage(image);
                    productResponse.setPrices(prices);
                    productResponse.setBrandName(brandName);
                    return productResponse;
                })

                .collect(Collectors.toList());

        List<ComparadorTotalBean> totals = new ArrayList<>(preciosComparados.stream()
                .collect(Collectors.toMap(
                        // Agrupamos por sucursal y supermercado
                        p -> Arrays.asList(p.getSuperId(), p.getBranchId()),
                        p -> {
                            ComparadorTotalBean totalResponse = new ComparadorTotalBean();
                            totalResponse.setSuperId(p.getSuperId());
                            totalResponse.setBranchId(p.getBranchId());
                            totalResponse.setTotalPrices(p.getTotalPrices());
                            totalResponse.setBranchName(p.getBranchName());
                            totalResponse.setSuperName(p.getSuperName());
                            totalResponse.setTotalCheapest(p.isTotalCheapest());
                            totalResponse.setCheapestWProducts(p.isCheapestWProducts());
                            return totalResponse;
                        },
                        (total1, total2) -> total1
                ))
                .values());

        CarritoFinalBean response = new CarritoFinalBean();
        response.setProducts(products);
        response.setTotals(totals);

        return response;
    }

    public List<InformacionSucursalBean> obtenerInformacion(int nroLocalidad) {
        return indecRepository.getInformacionSucursales(nroLocalidad);
    }
}
