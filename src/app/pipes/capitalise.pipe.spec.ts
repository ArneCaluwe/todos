import { CapitalisePipe } from './capitalise.pipe';

describe('CapitalisePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalisePipe();
    expect(pipe).toBeTruthy();
  });

  it('should capitalise the first letter of a string', () => {
    const pipe = new CapitalisePipe();
    expect(pipe.transform('hello')).toBe('Hello');
  });
});
