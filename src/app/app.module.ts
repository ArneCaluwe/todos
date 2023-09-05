import { ErrorHandler, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoRouterModule } from '@router/router.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoBoardModule } from './todo-board/todo-board.module';
import { GlobalErrorHandler } from '@core/global-error-handler';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { PaperComponent } from './graphic/paper/paper.component';
import { APP_CONFIG, APP_DI_CONFIG } from './app.config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PaperComponent,
    BrowserAnimationsModule,
    TodoRouterModule,
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
