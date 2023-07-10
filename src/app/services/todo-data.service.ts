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

  addTodo(todoContainer: Todo[], todo: Todo): void {
    todoContainer.push(todo);
  }

  removeTodo(todoContainer: Todo[], todo: Todo): Todo {
    const index = todoContainer.indexOf(todo);
    if (index === -1) {
      throw Error('Sequence does not contain element');
    }
    return todoContainer.splice(index, 1)[0];
  }

  removeTodoAt(todoContainer: Todo[], index: number): Todo {
    return todoContainer.splice(index, 1)[0];
  }

  updateTodoAt(todoContainer: Todo[], index: number, newTodo: string): Todo {
    const todo = todoContainer[index];
    todo.title = newTodo;
    todoContainer.splice(index, 1, todo);
    return todo;
  }

  completeTodoAt(todoContainer: Todo[], index: number): Todo {
    const todo = todoContainer[index];
    const completedTodo = { ...todo, type: 'done' as const };
    todoContainer.splice(index, 1);
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
