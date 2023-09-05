import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { APP_CONFIG } from 'app/app.config';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JokesService {
  private _httpClient = inject(HttpClient);
  private _config = inject(APP_CONFIG);

  getJokes$(): Observable<Joke> {
    return this._httpClient.get<Joke>(`${this._config.apiEndpoint}joke/Any`, {
      params: {
        format: 'json',
        type: 'single',
      },
    });
  }
  constructor() {}
}

export type Joke = {
  error: boolean;
  category: string;
  type: 'single';
  joke: string;
  id: number;
  safe: boolean;
  lang: string;
};
