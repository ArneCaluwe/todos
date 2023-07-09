import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '@models/todo.model';
import { TodoDataService } from '@services/todo-data.service';

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
  todos: Todo[] = [];

  editedTodo?: number;
  creatingNewTodo: boolean = false;

  constructor(private _todoDataService: TodoDataService) {}

  editTodo(index: number): void {
    this.editedTodo = index;
  }

  onSubmitEdit(newTodo: string, index: number): void {
    this._todoDataService.updateTodoAt(index, newTodo);
    this.editedTodo = undefined;
  }
  onCancelEdit(): void {
    this.editedTodo = undefined;
  }

  createNewTodo(): void {
    console.log('createNewTodo');
    this.creatingNewTodo = true;
  }
  onSubmitCreate(newTodo: string): void {
    this._todoDataService.addTodo({ title: newTodo, type: 'todo' });
    this.creatingNewTodo = false;
  }
  onCancelCreate(): void {
    this.creatingNewTodo = false;
  }
}
