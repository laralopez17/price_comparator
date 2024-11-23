package ar.edu.ubp.das.supermercadorest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class SupermercadoRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SupermercadoRestApplication.class, args);
	}

}
