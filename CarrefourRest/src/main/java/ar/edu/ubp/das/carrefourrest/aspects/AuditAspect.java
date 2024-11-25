package ar.edu.ubp.das.carrefourrest.aspects;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Aspect
@Component

public class AuditAspect {

    private static final Logger logger =
            LoggerFactory.getLogger(AuditAspect.class);

    @Pointcut("execution(* ar.edu.ubp.das.supermercadorest.resources.*(..))")
    public void serviceMethods() {}

    @Before("serviceMethods()")
    public void logBefore(JoinPoint joinPoint) {
        logger.info("Entrando en el método: {} con argumentos: {}", joinPoint.getSignature().getName(), Arrays.toString(joinPoint.getArgs()));
    }

    @AfterReturning(pointcut = "serviceMethods()", returning = "result")
    public void logAfter(JoinPoint joinPoint, Object result) {
        logger.info("Método: {} ejecutado con éxito. Resultado: {}", joinPoint.getSignature().getName(), result);
    }

}