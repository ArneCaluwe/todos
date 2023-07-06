import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardListComponent } from './todo-board-list.component';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { CellComponent } from '@shared/ui';

describe('TodoBoardListComponent', () => {
  let component: TodoBoardListComponent;
  let fixture: ComponentFixture<TodoBoardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoBoardListComponent],
      imports: [
        CommonModule,
        CdkDrag,
        CdkDropList,
        CdkDropListGroup,
        CellComponent,
      ],
    });
    fixture = TestBed.createComponent(TodoBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
