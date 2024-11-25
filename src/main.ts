/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode, LOCALE_ID } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const locale = localStorage.getItem('locale_id') || 'es-AR';
document.documentElement.lang = locale;

if (!window.location.pathname.startsWith(`/${locale}`)) {
  window.location.pathname = `/${locale}${window.location.pathname}`;
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
