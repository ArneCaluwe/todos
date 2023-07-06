import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoBoardComponent } from './todo-board/todo-board.component';
import { TodoBoardListComponent } from './todo-board-list/todo-board-list.component';
import { TodoBoardListItemComponent } from './todo-board-list-item/todo-board-list-item.component';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { CellComponent } from '../shared/ui/cell/cell.component';

const ROUTES: Routes = [{ path: '', component: TodoBoardComponent }];
@NgModule({
  declarations: [
    TodoBoardComponent,
    TodoBoardListComponent,
    TodoBoardListItemComponent,
  ],
  exports: [TodoBoardComponent],
  imports: [
    CommonModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    RouterModule.forChild(ROUTES),
    CellComponent,
  ],
})
export class TodoBoardModule {}
