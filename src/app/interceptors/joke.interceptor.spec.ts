import { TestBed } from '@angular/core/testing';

import { JokeInterceptor } from './joke.interceptor';

describe('JokeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JokeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JokeInterceptor = TestBed.inject(JokeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
