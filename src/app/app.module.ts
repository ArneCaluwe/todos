import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from '@core/global-error-handler';
import { AppComponent } from './app.component';
import { APP_CONFIG, APP_DI_CONFIG } from './app.config';
import { PaperComponent } from './graphic/paper/paper.component';
import { MaterialModule } from './material.module';
import { TodoBoardModule } from './todo-board/todo-board.module';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  // TODO: import routerModule
  imports: [
    BrowserModule,
    PaperComponent,
    BrowserAnimationsModule,
    TodoListModule,
    TodoBoardModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: APP_CONFIG,
      useValue: APP_DI_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
