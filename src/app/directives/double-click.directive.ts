import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDoubleClick]',
})
export class DoubleClickDirective {
  @Output() doubleClick = new EventEmitter<void>();

  @HostListener('dblclick', ['$event'])
  onDoubleClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.doubleClick.emit();
  }
}
