import { InjectionToken } from '@angular/core';
import { AppConfig } from './app-config';

export const APP_CONFIG: InjectionToken<AppConfig> =
  new InjectionToken<AppConfig>('app.config');

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: 'https://jokeapi-v2.p.rapidapi.com/',
  key: 'ed409aa8a6msh61c546c72569897p12912cjsn06fe5a094cfe',
  host: 'jokeapi-v2.p.rapidapi.com',
};
