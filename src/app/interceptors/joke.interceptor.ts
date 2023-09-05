import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Joke } from '@services/jokes.service';
import { APP_CONFIG } from 'app/app.config';
import { Observable } from 'rxjs';

@Injectable()
export class JokeInterceptor implements HttpInterceptor {
  private _config = inject(APP_CONFIG);

  intercept(
    request: HttpRequest<Joke>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const key = this._config.key;
    const host = this._config.host;
    const requestClone = request.clone({
      headers: request.headers
        .set('X-RapidAPI-Key', key)
        .set('X-RapidAPI-Host', host),
    });
    return next.handle(requestClone);
  }
}
