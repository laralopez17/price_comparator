package ar.edu.ubp.das.indecapi.factory;

import ar.edu.ubp.das.indecapi.beans.InformacionBean;
import ar.edu.ubp.das.indecapi.beans.PrecioBean;
import ar.edu.ubp.das.indecapi.beans.PrecioCriteriaBean;
import ar.edu.ubp.das.indecapi.utils.Httpful;
import com.google.gson.reflect.TypeToken;
import jakarta.ws.rs.HttpMethod;

import java.util.List;

public class SupermercadoApiRest implements SupermercadoApi {
    private final Httpful httpClient;
    private final int superId;

    public SupermercadoApiRest(String apiUrl, String apiKey, int superId) {
        this.superId = superId;
        this.httpClient = new Httpful(apiUrl).apiKey(apiKey);
    }

    @Override
    public int getSuperId() {
        return superId;
    }

    @Override
    public List<PrecioBean> getPreciosProductos(List<PrecioCriteriaBean> criteria) {
        return httpClient.path("/precios-productos")
                .method(HttpMethod.POST)
                .post(criteria)
                .execute(new TypeToken<List<PrecioBean>>(){}.getType());
    }

    @Override
    public List<InformacionBean> getInformacionSupermercado() {
        return httpClient.path("/informacion-supermercado")
                .method(HttpMethod.POST)
                .execute(new TypeToken<List<InformacionBean>>(){}.getType());
    }
}

