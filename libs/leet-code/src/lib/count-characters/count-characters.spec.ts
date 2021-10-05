import { countCharacters } from './count-characters';
describe('countCharacters', () => {
  it('test #1', () => {
    expect(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')).toEqual(6);
  });
  it('test #2', () => {
    expect(
      countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')
    ).toEqual(10);
  });

  it('test #3', () => {
    expect(countCharacters(['a', 'b', 'c'], 'abc')).toEqual(3);
  });

  it('test #4', () => {
    expect(countCharacters(['a', 'b', 'c'], 'ac')).toEqual(2);
  });
});
