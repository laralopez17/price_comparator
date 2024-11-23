package ar.edu.ubp.das.supermercadorest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class LaEsquinitaRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(LaEsquinitaRestApplication.class, args);
	}

}
