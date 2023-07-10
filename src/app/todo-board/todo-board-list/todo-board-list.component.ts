import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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

  @Output()
  drop: EventEmitter<CdkDragDrop<Todo[], Todo[], Todo>> = new EventEmitter();
  @Output()
  edit: EventEmitter<[number, string]> = new EventEmitter();
  @Output()
  create: EventEmitter<Todo> = new EventEmitter();

  editedTodo?: number;
  creatingNewTodo: boolean = false;

  onDrop = (event: CdkDragDrop<Todo[], Todo[], Todo>) => this.drop.emit(event);

  editTodo(index: number): void {
    this.editedTodo = index;
  }

  onSubmitEdit(newTodo: string, index: number): void {
    this.edit.emit([index, newTodo]);
    this.editedTodo = undefined;
  }

  onCancelEdit(): void {
    this.editedTodo = undefined;
  }

  onCreateNewTodo(): void {
    this.creatingNewTodo = true;
  }
  onSubmitCreate(newTodo: string): void {
    this.create.emit({ title: newTodo, type: 'todo' });
    this.creatingNewTodo = false;
  }
  onCancelCreate(): void {
    this.creatingNewTodo = false;
  }
}
