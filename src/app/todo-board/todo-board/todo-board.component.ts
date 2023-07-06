import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todo } from '@models/todo.model';
import { TodoDataService } from '@services/todo-data.service';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoBoardComponent {
  constructor(private _todoDataService: TodoDataService) {}
  boards = [
    { title: 'To Do', content: this._todoDataService.todos },
    { title: 'In Progress', content: this._todoDataService.inProgresses },
    { title: 'Done', content: this._todoDataService.dones },
  ] as const;

  onDrop(event: CdkDragDrop<Todo[], Todo[], Todo>): void {
    if (event.previousContainer === event.container) {
      this._todoDataService.moveTodoInList(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this._todoDataService.moveTodoItemBetweenLists(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
