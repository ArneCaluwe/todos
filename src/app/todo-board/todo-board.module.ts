import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoBoardComponent } from './todo-board/todo-board.component';
import { TodoBoardListComponent } from './todo-board-list/todo-board-list.component';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { CellComponent } from '../shared/ui/cell/cell.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from '../todo-list-form/todo-list-form.component';
import { DirectivesModule } from '@directives/directives.module';

const ROUTES: Routes = [{ path: '', component: TodoBoardComponent }];
@NgModule({
  declarations: [TodoBoardComponent, TodoBoardListComponent],
  exports: [TodoBoardComponent],
  imports: [
    CommonModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    DirectivesModule,
    RouterModule.forChild(ROUTES),
    CellComponent,
    TodoListItemComponent,
    TodoListFormComponent,
  ],
})
export class TodoBoardModule {}
