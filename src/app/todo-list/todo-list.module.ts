import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '@shared/ui/card/card.component';
import { CellComponent } from '@shared/ui/cell/cell.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { MaterialModule } from 'app/material.module';
import { DirectivesModule } from '@directives/directives.module';
import { TodoListFormComponent } from './todo-list-form/todo-list-form.component';

const ROUTES: Routes = [{ path: '', component: TodoListComponent }];
@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent, TodoListFormComponent],
  exports: [TodoListComponent],
  imports: [
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
})
export class TodoListModule {}
