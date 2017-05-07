const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });
  
  it('returns true if any object value in the is odd', () => {
    const dogs = {
      poodle: 2,
      husky: 4,
      shitzu: 5,
    };
    expect(_.some(dogs, dog => dog % 2 === 1)).toBe(true);
  });
});