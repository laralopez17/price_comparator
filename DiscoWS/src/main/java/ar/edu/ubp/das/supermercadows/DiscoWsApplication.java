package ar.edu.ubp.das.supermercadows;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy

public class DiscoWsApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiscoWsApplication.class, args);
    }

}
