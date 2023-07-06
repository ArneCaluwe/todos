import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss'],
})
export class TodoListFormComponent implements OnInit {
  @Input() todo!: string;
  @Output() submit = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  newTodo?: string;

  ngOnInit(): void {
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
