import sum from '@helpers/sum';
import {expect} from '@jest/globals';

describe('sum', () => {
  it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
