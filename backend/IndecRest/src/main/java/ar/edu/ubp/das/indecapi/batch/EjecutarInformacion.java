package ar.edu.ubp.das.indecapi.batch;

import ar.edu.ubp.das.indecapi.IndecRestApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContext;

public class EjecutarInformacion {

    public static void main(String[] args) {
        ApplicationContext context = new SpringApplicationBuilder(IndecRestApplication.class)
                .web(WebApplicationType.NONE)
                .run(args);

        Procesos procesos = context.getBean(Procesos.class);
        procesos.ejecutarInformacion();
    }
}