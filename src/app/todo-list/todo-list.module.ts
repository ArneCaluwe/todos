import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '@directives/directives.module';
import { CardComponent } from '@shared/ui/card/card.component';
import { CellComponent } from '@shared/ui/cell/cell.component';
import { JokeInterceptor } from 'app/interceptors/joke.interceptor';
import { MaterialModule } from 'app/material.module';
import { TodoListFormComponent } from '../todo-list-form/todo-list-form.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const ROUTES: Routes = [{ path: '', component: TodoListComponent }];
@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
  imports: [
    TodoListItemComponent,
    TodoListFormComponent,
    CommonModule,
    MaterialModule,
    FormsModule,
    CdkDrag,
    CdkDropList,
    RouterModule.forChild(ROUTES),
    CardComponent,
    CellComponent,
    DirectivesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JokeInterceptor, multi: true },
  ],
})
export class TodoListModule {}
