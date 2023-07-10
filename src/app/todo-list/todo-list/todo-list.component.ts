import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoDataService } from '@services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  newTodo?: string;
  editedTodo?: number;

  constructor(private _todoDataService: TodoDataService) {}

  get todos(): string[] {
    return this._todoDataService.simpleTodos;
  }

  onSubmit(): void {
    if (!this.newTodo) return;
    this._todoDataService.addTodo(this._todoDataService.todos, {
      title: this.newTodo,
      type: 'todo',
    });
    this.newTodo = '';
  }

  onComplete(index: number): void {
    this._todoDataService.completeTodoAt(this._todoDataService.todos, index);
  }

  onDrop(event: CdkDragDrop<string[]>): void {
    this._todoDataService.moveTodoInList(
      this._todoDataService.todos,
      event.previousIndex,
      event.currentIndex
    );
  }

  onDropRemoveZone(event: CdkDragDrop<string[]>): void {
    this._todoDataService.removeTodoAt(
      this._todoDataService.todos,
      event.previousIndex
    );
  }

  onDoubleClick(index: number): void {
    this.editedTodo = index;
  }

  onSubmitEdit(newTodo: string, index: number): void {
    this._todoDataService.updateTodoAt(
      this._todoDataService.todos,
      index,
      newTodo
    );
    this.editedTodo = undefined;
  }
  onCancelEdit(): void {
    this.editedTodo = undefined;
  }
}
