import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardComponent } from '../shared/ui/card/card.component';

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
  },
  {
    path: 'board',
    loadChildren: () =>
      import('../todo-board/todo-board.module').then((m) => m.TodoBoardModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES), CardComponent],
})
export class TodoRouterModule {}
