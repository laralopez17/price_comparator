package ar.edu.ubp.das.Super3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy

public class Super3Application {

    public static void main(String[] args) {
        SpringApplication.run(Super3Application.class, args);
    }

}
