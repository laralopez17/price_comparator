package ar.edu.ubp.das.diaws;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy

public class DiaWsApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiaWsApplication.class, args);
    }

}
