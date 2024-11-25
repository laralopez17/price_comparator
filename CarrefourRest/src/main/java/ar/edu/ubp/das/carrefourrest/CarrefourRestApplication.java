package ar.edu.ubp.das.carrefourrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class CarrefourRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarrefourRestApplication.class, args);
	}

}
