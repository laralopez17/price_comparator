package ar.edu.ubp.das.super4.aspects;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Optional;

@Aspect
@Component
public class SecurityAspect {

    private static final Logger logger = LoggerFactory.getLogger(SecurityAspect.class);

    @Value("${api.security.key}")
    private String validApiKey;

    @Before("execution(* ar.edu.ubp.das.super4.endpoints.*(..))")
    public void checkSecurity(JoinPoint joinPoint) throws SecurityException {
        String apiKey = getApiKeyFromHeaders();

        if (!validApiKey.equals(apiKey)) {
            logger.error("Acceso no autorizado al método: " + joinPoint.getSignature().getName() + ". Clave API inválida.");
            throw new SecurityException("Acceso no autorizado: clave API no válida.");
        }

        logger.info("Acceso autorizado al método: " + joinPoint.getSignature().getName());
    }

    private String getApiKeyFromHeaders() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        return Optional.ofNullable(request.getHeader("X-API-KEY"))
                .orElseThrow(() -> new SecurityException("Acceso no autorizado: falta el encabezado X-API-KEY."));
    }

}
