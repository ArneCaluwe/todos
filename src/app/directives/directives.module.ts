import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleClickDirective } from './double-click.directive';

@NgModule({
  declarations: [DoubleClickDirective],
  imports: [CommonModule],
  exports: [DoubleClickDirective],
})
export class DirectivesModule {}
