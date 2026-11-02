import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

registerLocaleData(localeIt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: LOCALE_ID, useValue: 'it-IT' },
  ],
};
