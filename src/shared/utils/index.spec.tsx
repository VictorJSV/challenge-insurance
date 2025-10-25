import { classes } from './index';

describe('classes utility', () => {
  test('when given multiple class names, then returns them joined by space', () => {
    expect(classes('a', 'b', 'c')).toBe('a b c');
  });

  test('when given falsy values, then filters them out', () => {
    expect(classes('a', false, null, undefined, 'b')).toBe('a b');
  });
});
