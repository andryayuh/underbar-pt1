const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });
  it('de-dupes an object of names and returns a de-duped array', () => {
    const ppl = {
      1: 'Fluttershy',
      2: 'Pinkie Pie',
      3: 'Fluttershy',
      4: 'Rarity',
      5: 'Lilo',
      6: 'Lilo'
    };
    const dedupePpl = ['Fluttershy', 'Pinkie Pie', 'Rarity', 'Lilo'];
    expect(_.uniq(ppl)).toEqual(dedupePpl);
    expect(_.isArrayLike(dedupePpl)).toBe(true);
  });
});