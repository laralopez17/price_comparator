/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Idiomas soportados
const SUPPORTED_LANGUAGES = ['es-AR', 'en'];
// Extraer idioma desde la URL
const urlSegments = window.location.pathname.split('/');
const langFromUrl = urlSegments[1];

// Validar idioma o asignar el predeterminado
const locale = SUPPORTED_LANGUAGES.includes(langFromUrl) ? langFromUrl : 'es-AR';

// Actualizar localStorage y <html lang>
localStorage.setItem('locale_id', locale);
document.documentElement.lang = locale;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
