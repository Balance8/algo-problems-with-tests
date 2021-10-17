import { findTransactionsBalance } from './find-transactions-balance';

describe('findTransactionsBalance', () => {
  it('test #1', () => {
    expect(
      findTransactionsBalance(
        [100, 100, 100, -10],
        ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29']
      )
    ).toEqual(230);
  });

  it('test #2', () => {
    expect(
      findTransactionsBalance(
        [180, -50, -25, -25],
        ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31']
      )
    ).toEqual(25);
  });

  it('test #3', () => {
    expect(
      findTransactionsBalance(
        [1, -1, 0, -105, 1],
        ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12']
      )
    ).toEqual(-164);
  });

  it('test #4', () => {
    expect(
      findTransactionsBalance(
        [100, 100, -10, -20, -30],
        ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08']
      )
    ).toEqual(80);
  });
});
