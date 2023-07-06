import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardListItemComponent } from './todo-board-list-item.component';
import { CellComponent } from '@shared/ui';

describe('TodoBoardListItemComponent', () => {
  let component: TodoBoardListItemComponent;
  let fixture: ComponentFixture<TodoBoardListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoBoardListItemComponent],
      imports: [CellComponent],
    });
    fixture = TestBed.createComponent(TodoBoardListItemComponent);
    component = fixture.componentInstance;
    component.todo = { title: 'hello', type: 'todo' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
