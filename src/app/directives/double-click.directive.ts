import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDoubleClick]',
})
export class DoubleClickDirective {
  @Output() doubleClick = new EventEmitter<void>();

  @HostListener('dblclick')
  onDoubleClick(): void {
    this.doubleClick.emit();
  }
}
