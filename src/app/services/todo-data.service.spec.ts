import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from '@models/todo.model';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', () => {
    service.addTodo({ title: 'hello', type: 'todo' });
    expect(service.todos.length).toBe(1);
  });

  it('should update a todo', () => {
    const todo: Todo = { title: 'hello', type: 'todo' };
    service.addTodo(todo);
    service.updateTodoAt(0, 'hello world');
    expect(service.todos[0].title).toBe('hello world');
  });

  it('should delete a todo by Id', () => {
    const todo: Todo = { title: 'hello', type: 'todo' };
    service.addTodo(todo);
    const response = service.removeTodoAt(0);
    expect(service.todos.length).toBe(0);
    expect(response).toEqual(todo);
  });

  it('should delete a todo', () => {
    const todo: Todo = { title: 'hello', type: 'todo' };
    service.addTodo(todo);
    const response = service.removeTodo(todo);
    expect(service.todos.length).toBe(0);
    expect(response).toEqual(todo);
  });
});
