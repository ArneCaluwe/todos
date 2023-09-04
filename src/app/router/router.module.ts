import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardComponent } from '../shared/ui/card/card.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '@services/auth.service';

const LoggedInGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLoggedIn ? true : router.navigate(['/login']);
};

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () =>
      import('../todo-list/todo-list.module').then((m) => m.TodoListModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'board',
    loadChildren: () =>
      import('../todo-board/todo-board.module').then((m) => m.TodoBoardModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [NotFoundComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    CardComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class TodoRouterModule {}
