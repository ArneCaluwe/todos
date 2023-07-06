import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoBoardModule } from './todo-board/todo-board.module';
import { TodoRouterModule } from '@router/router.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from '@core/global-error-handler';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TodoListModule,
        TodoBoardModule,
        TodoRouterModule,
        MatIconModule,
        MatSnackBarModule,
      ],
      providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
