import { Injectable } from '@angular/core';
import { Todo, TodoGroup } from '../models/todo.model';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  private _todos: Todo[] = [];
  private _inProgresses: Todo[] = [];
  private _dones: Todo[] = [];

  get simpleTodos(): string[] {
    return this.todos.map((t) => t.title);
  }

  get todos(): Todo[] {
    return this._todos;
  }

  get inProgresses(): Todo[] {
    return this._inProgresses;
  }

  get dones(): Todo[] {
    return this._dones;
  }

  addTodo(todo: Todo): void {
    this._todos.push(todo);
  }

  removeTodo(todo: Todo): Todo {
    return this.todos.splice(this.todos.indexOf(todo), 1)[0];
  }

  removeTodoAt(index: number): Todo {
    return this.todos.splice(index, 1)[0];
  }

  updateTodoAt(index: number, newTodo: string) {
    const todo = this._todos[index];
    todo.title = newTodo;
    this._todos.splice(index, 1, todo);
  }

  completeTodoAt(index: number): Todo {
    const todo = this._todos[index];
    const completedTodo = { ...todo, type: 'done' as const };
    this._todos.splice(index, 1);
    this._dones.push(completedTodo);
    return completedTodo;
  }

  moveTodoInList(container: Todo[], index: number, targetIndex: number): void {
    moveItemInArray(container, index, targetIndex);
  }

  moveTodoItemBetweenLists(
    container: Todo[],
    targetContainer: Todo[],
    index: number,
    targetIndex: number
  ): void {
    transferArrayItem(container, targetContainer, index, targetIndex);
  }
}
