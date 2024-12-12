package ar.edu.ubp.das.super2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class Super2Application {

	public static void main(String[] args) {
		SpringApplication.run(Super2Application.class, args);
	}

}
