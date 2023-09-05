import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JokesService } from '@services/jokes.service';
import { TodoDataService } from '@services/todo-data.service';
import { Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  private _jokeService = inject(JokesService);
  private _snackbar = inject(MatSnackBar);
  newTodo?: string;
  editedTodo?: number;

  private _jokeTrigger$ = new Subject<void>();

  constructor(private _todoDataService: TodoDataService) {
    this._jokeTrigger$
      .pipe(
        takeUntilDestroyed(),
        switchMap(() => this._jokeService.getJokes$()),
        tap((joke) =>
          this._snackbar.open(joke.joke, 'Close', { duration: 3000 })
        )
      )
      .subscribe();
  }

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
    this._jokeTrigger$.next();
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
