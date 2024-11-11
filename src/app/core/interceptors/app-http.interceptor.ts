import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const _loader = inject(LoaderService);
  _loader.start();

  return next(req).pipe(
    finalize(()=> _loader.complete())
  );
};
