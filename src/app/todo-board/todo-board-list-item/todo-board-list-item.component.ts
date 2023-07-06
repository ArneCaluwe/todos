import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '@models/todo.model';

@Component({
  selector: 'app-todo-board-list-item',
  templateUrl: './todo-board-list-item.component.html',
  styleUrls: ['./todo-board-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoBoardListItemComponent {
  @Input()
  todo!: Todo;
}
