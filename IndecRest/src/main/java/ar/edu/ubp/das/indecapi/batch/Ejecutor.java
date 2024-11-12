package ar.edu.ubp.das.indecapi.batch;

import ar.edu.ubp.das.indecapi.IndecApiApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContext;

import java.util.InputMismatchException;
import java.util.Scanner;
public class Ejecutor {

    public static void main(String[] args) {
        ApplicationContext context = new SpringApplicationBuilder(IndecApiApplication.class)
                .web(WebApplicationType.NONE)
                .run(args);

        Procesos procesos = context.getBean(Procesos.class);
        Scanner scanner = new Scanner(System.in);
        boolean exit = false;

        while (!exit) {
            System.out.println("Seleccione una acción a realizar:");
            System.out.println("1- Actualizar precios");
            System.out.println("2- Actualizar información de sucursales y productos");
            System.out.println("3- Salir");

            try {
                int opcion = scanner.nextInt();

                switch (opcion) {
                    case 1:
                        System.out.println("Ejecutando actualización de precios...");
                        if (procesos.ejecutarPrecios()) {
                            System.out.println("Precios actualizados correctamente.");
                        } else {
                            System.out.println("Error al actualizar precios.");
                        }
                        break;
                    case 2:
                        System.out.println("Ejecutando actualización de información de sucursales y productos...");
                        if (procesos.ejecutarInformacion()) {
                            System.out.println("Información de sucursales y productos actualizada correctamente.");
                        } else {
                            System.out.println("Error al actualizar la información.");
                        }
                        break;
                    case 3:
                        exit = true;
                        System.out.println("Saliendo del programa.");
                        break;
                    default:
                        System.out.println("Opción no válida, intente nuevamente.");
                        break;
                }
            } catch (InputMismatchException e) {
                System.out.println("Entrada inválida. Por favor, ingrese un número.");
                scanner.next(); // Limpiar el scanner para evitar bucles infinitos
            }
        }

        scanner.close();
    }
}