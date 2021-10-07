import { uncommonFromSentences } from './uncommonFromSentences';

describe('uncommonFromSentences', () => {
  test('#1', () => {
    expect(
      uncommonFromSentences('this apple is sweet', 'this apple is sour')
    ).toEqual(['sweet', 'sour']);
  });
  test('#2', () => {
    expect(uncommonFromSentences('apple apple', 'banana')).toEqual(['banana']);
  });
  test('#3', () => {
    expect(uncommonFromSentences('s z z z s', 's z ejt')).toEqual(['ejt']);
  });
});
