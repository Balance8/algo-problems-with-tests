import { maxWords } from './max-words';

describe('maxWords', () => {
  test('#1', () => {
    expect(maxWords('We test coders. Give us a try?')).toBe(4);
  });

  test('#2', () => {
    expect(maxWords('Forget  CVs..Save time . x x')).toBe(2);
  });
});
