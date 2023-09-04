import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];

  private _token$: BehaviorSubject<string | undefined> = new BehaviorSubject<
    string | undefined
  >(undefined);

  token$ = this._token$.asObservable();

  constructor() {
    localStorage.getItem('users')
      ? (this.users = JSON.parse(localStorage.getItem('users') || '[]'))
      : (this.users = []);
    localStorage.getItem('token')
      ? this._token$.next(localStorage.getItem('token') || '')
      : this._token$.next(undefined);
  }

  logIn(userName: string, password: string): AuthResponse {
    if (userName === 'admin@m.com' && password === 'P@ssword123') {
      const token = Math.random().toString(36);
      localStorage.setItem('token', token);
      this._token$.next(token);
      return {
        valid: true,
        token: token,
      };
    }
    return {
      valid: false,
      message: 'Invalid credentials',
    };
  }

  register(
    name: string,
    lastName: string,
    email: string,
    password: string
  ): AuthResponse {
    if (this.users.find((user) => user.email === email)) {
      return {
        valid: false,
        message: 'User already exists',
      };
    }
    const token = Math.random().toString(36);
    this.users.push({ name, lastName, email, password, token });
    return {
      valid: true,
      token: token,
    };
  }

  logOut(): void {
    this._token$.next(undefined);
  }

  get isLoggedIn(): boolean {
    return !!this._token$.getValue();
  }
}

type AuthResponse = ValidAuthResponse | InvalidAuthResponse;

type ValidAuthResponse = {
  valid: true;
  token: string;
};

type InvalidAuthResponse = {
  valid: false;
  message: string;
};

type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  token?: string;
};
