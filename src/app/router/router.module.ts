import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'app/material.module';
import { CardComponent } from '../shared/ui/card/card.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

// TODO: add routes:
// default route: redirect to /not-found
// /not-found: NotFoundComponent
// /login: LoginComponent
// /register: RegisterComponent
// list: TodoListModule (lazy loaded)
// board: TodoBoardModule (lazy loaded)
// redirect '' to /list
// create a guard logged in (can call authentification service)
// guard /list and /board

const ROUTES: Routes = [];

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
