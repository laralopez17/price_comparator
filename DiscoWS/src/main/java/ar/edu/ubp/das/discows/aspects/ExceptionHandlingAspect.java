package ar.edu.ubp.das.discows.aspects;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ExceptionHandlingAspect {
    private static final Logger logger = LoggerFactory.getLogger(ExceptionHandlingAspect.class);

    @Around("execution(* ar.edu.ubp.das.discows.services..*(..))")
    public Object handleExceptions(ProceedingJoinPoint joinPoint) throws Throwable {
        try {
            return joinPoint.proceed();
        }
        catch (SecurityException se) {
            throw se;
        }
        catch (Exception e) {
            logger.error("Error en el método: {}. Detalle: {}", joinPoint.getSignature().getName(), e.getMessage(), e);
            throw new RuntimeException("Ocurrió un error al procesar la solicitud. Inténtelo nuevamente más tarde.");
        }
    }
}
