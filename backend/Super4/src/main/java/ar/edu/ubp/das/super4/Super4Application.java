package ar.edu.ubp.das.super4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy

public class Super4Application {

    public static void main(String[] args) {
        SpringApplication.run(Super4Application.class, args);
    }

}
