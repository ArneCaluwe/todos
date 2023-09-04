import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  user = {
    email: '',
    password: '',
  };

  submitted = false;
  loginError: string | undefined = undefined;

  onSubmit(): void {
    this.submitted = true;
    const response = this._authService.logIn(
      this.user.email,
      this.user.password
    );
    response.valid
      ? this._router.navigate(['/list'])
      : (this.loginError = response.message);
  }
}
