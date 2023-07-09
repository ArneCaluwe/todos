import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'app/material.module';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListFormComponent implements OnInit {
  @Input() todo?: string;
  @Output() submit = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  newTodo?: string;

  ngOnInit(): void {
    if (!this.todo) return;
    this.newTodo = this.todo;
  }

  @HostListener('document:keydown.enter')
  onSubmit(): void {
    if (!this.newTodo) return;
    this.submit.emit(this.newTodo);
  }

  @HostListener('document:keydown.escape')
  onCancel(): void {
    this.cancel.emit();
  }
}
