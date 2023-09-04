import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup<{
    name: FormControl<string | null>;
    lastName: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
  }>;
  private _authService = inject(AuthService);

  constructor() {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
          ),
        ]),
        confirmPassword: new FormControl('', Validators.required),
      },
      {
        validators: this.passwordsMatchValidator,
      }
    );
  }

  passwordsMatchValidator: ValidatorFn = (group: AbstractControl) => {
    console.log(group);
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null; // Passwords match, validation passes
    } else {
      return { passwordsNotMatch: true }; // Passwords don't match, validation fails
    }
  };

  onSubmit(): void {
    console.log(this.registerForm.value);
    const user = this.registerForm.value;
    console.log(
      this._authService.register(
        user.name!,
        user.lastName!,
        user.email!,
        user.password!
      )
    );
  }
}
