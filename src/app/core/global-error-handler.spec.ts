import { TestBed } from '@angular/core/testing';

import { GlobalErrorHandler } from './global-error-handler';
import { ErrorHandler } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('GlobalErrorHandlerService', () => {
  let service: GlobalErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [{ ErrorHandler, useClass: GlobalErrorHandler }],
    });

    service = TestBed.inject(ErrorHandler) as GlobalErrorHandler;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
