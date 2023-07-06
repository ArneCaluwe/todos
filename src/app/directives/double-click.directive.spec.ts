import { DoubleClickDirective } from './double-click.directive';

describe('DoubleClickDirective', () => {
  it('should create an instance', () => {
    const directive = new DoubleClickDirective();
    expect(directive).toBeTruthy();
  });

  it('should emit a doubleClick event on double-click', (done) => {
    const directive = new DoubleClickDirective();
    directive.doubleClick.subscribe(() => {
      done();
    });
    directive.onDoubleClick();
  });
});
