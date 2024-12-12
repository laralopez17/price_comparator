package ar.edu.ubp.das.super1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class Super1Application {

	public static void main(String[] args) {
		SpringApplication.run(Super1Application.class, args);
	}

}
