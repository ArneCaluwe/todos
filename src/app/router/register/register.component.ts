import { Component } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor() {}

  //TODO: implement register form
  // it should contain the following fields:
  // first name, last name, email, password, confirm password
  // the form should be validated as follows:
  // first name, last name, email, password are required
  // email should be a valid email address
  // password and confirm password should match
  // the form should be submitted on button click

  // on submit, use the auth service. If succesfull, navigate to /list

  passwordsMatchValidator: ValidatorFn = (group: AbstractControl) => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null; // Passwords match, validation passes
    } else {
      return { passwordsNotMatch: true }; // Passwords don't match, validation fails
    }
  };

  onSubmit(): void {
    // TODO: implement onSubmit
  }
}
