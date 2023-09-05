import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JokesService {
  private _httpClient = inject(HttpClient);

  getJokes$(): Observable<any> {
    return this._httpClient.get('https://jokeapi-v2.p.rapidapi.com/joke/Any', {
      params: {
        format: 'json',
        type: 'single',
      },
      headers: {
      },
    });
  }
  constructor() {}
}
