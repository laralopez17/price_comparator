import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const _loader = inject(LoaderService);
  _loader.start();

  const headersConfig = {
    'Authorization': 'Basic ' + btoa('usr_admin:pwd_admin'),
    'X-API-KEY': 'C67423HSAQOKSAN097KL2B4M65O2B'
  };

  // Clonar la request con los headers agregados
  const authReq = req.clone({ setHeaders: headersConfig });

  return next(authReq).pipe(
    finalize(()=> _loader.complete())
  );
};
