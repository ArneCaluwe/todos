import { InjectionToken } from '@angular/core';
import { AppConfig } from './app-config';

export const APP_CONFIG: InjectionToken<AppConfig> =
  new InjectionToken<AppConfig>('app.config');

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: 'https://jokeapi-v2.p.rapidapi.com/',
  key: 'xxx',
  host: 'xxx',
};
