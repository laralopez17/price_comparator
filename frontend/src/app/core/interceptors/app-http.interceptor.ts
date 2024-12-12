import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const _loader = inject(LoaderService);
  _loader.start();

  return next(req).pipe(
    catchError((error) => {
      let errorMessage = 'Ocurrió un error desconocido.';

      if (error.error instanceof ProgressEvent) {
        errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión o si la API está activa.';
      } else if (error.status) {
        if (error.error && typeof error.error === 'object') {
          // Intentamos obtener el campo 'message' si está presente
          errorMessage = error.error.message || `Error ${error.status}: ${error.statusText}`;
        } else {
          // Respuesta no JSON o inesperada
          errorMessage = `Error ${error.status}: ${error.statusText}`;
        }
      }
      console.error(errorMessage);
      
      return throwError(() => new Error(errorMessage));
    }),
    finalize(() => _loader.complete())
  );
};
