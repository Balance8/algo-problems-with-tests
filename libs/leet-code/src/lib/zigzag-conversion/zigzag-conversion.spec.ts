import { convert } from './zigzag-conversion';
describe('convert', () => {
  it('test 1', () => {
    const result = convert('PAYPALISHIRING', 3);
    expect(result).toEqual('PAHNAPLSIIGYIR');
  });

  it('test 2', () => {
    const result = convert('PAYPALISHIRING', 4);
    expect(result).toEqual('PINALSIGYAHRPI');
  });

  it('test 3', () => {
    const result = convert('A', 1);
    expect(result).toEqual('A');
  });
});
