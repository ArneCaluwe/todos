import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '@models/todo.model';

@Component({
  selector: 'app-todo-board-list',
  templateUrl: './todo-board-list.component.html',
  styleUrls: ['./todo-board-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoBoardListComponent {
  @Input()
  title!: string;
  @Input()
  todos: Todo[] | null = [];
}
