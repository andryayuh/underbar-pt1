const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns an empty array if given an empty array', () => {
    expect(_.first([], 5)).toEqual([]);
  });

  it('returns array sliced to a negative end index given a neg n', () => {
    expect(_.first(['a', 'b', 'c', 'd'], -1)).toEqual(['a', 'b', 'c']);
  });
});