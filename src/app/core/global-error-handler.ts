import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  override handleError(error: Error): void {
    this._snackBar.open(`An error occurred; ${error.message}`, 'Dismiss');
    console.error(error);
  }
  constructor(private _snackBar: MatSnackBar) {
    super();
  }
}

/**
 * `@injectable`will make the class available for dependency injection.
 * It will analyze the constructor parameters and inject the dependencies.
 * In this case, the `MatSnackBar` and `Router` will be injected.
 * Functions in case of a factoryDI do not do this.
 */
