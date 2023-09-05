import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MaterialModule } from 'app/material.module';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MaterialModule], // TODO: Add capitalise pipe to imports
})
export class TodoListItemComponent {
  @Input() todo!: string;
  @Input() completable: boolean = true;
  @Output() complete: EventEmitter<void> = new EventEmitter();

  onComplete(): void {
    this.complete.emit();
  }
}
