import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoRouterModule } from '@router/router.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoBoardModule } from './todo-board/todo-board.module';
import { GlobalErrorHandler } from '@core/global-error-handler';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodoListModule,
    TodoBoardModule,
    TodoRouterModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
