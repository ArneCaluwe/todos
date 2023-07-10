import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardComponent } from './todo-board.component';
import { TodoBoardListComponent } from '../todo-board-list/todo-board-list.component';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

describe('TodoBoardComponent', () => {
  let component: TodoBoardComponent;
  let fixture: ComponentFixture<TodoBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoBoardComponent, TodoBoardListComponent],
      imports: [CdkDrag, CdkDropList, CdkDropListGroup],
    });
    fixture = TestBed.createComponent(TodoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
