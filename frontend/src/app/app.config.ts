import { ApplicationConfig, ErrorHandler, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppErrorHandler } from './core/handlers/app-error-handler';
import { CoreModule } from './core/core.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appHttpInterceptor } from './core/interceptors/app-http.interceptor';
import { IndecResourceService } from './api/resources/indec-resource.service';

export const appConfig: ApplicationConfig = {
  providers: [
    IndecResourceService,
    provideHttpClient(
      withInterceptors([appHttpInterceptor])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(CoreModule),
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: LOCALE_ID,
      useFactory: () => localStorage.getItem('locale_id') || 'es-AR',
    },
  ]
};
