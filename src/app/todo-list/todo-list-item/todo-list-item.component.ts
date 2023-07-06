import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent {
  @Input() todo!: string;
  @Output() complete: EventEmitter<void> = new EventEmitter();

  onComplete(): void {
    this.complete.emit();
  }
}
