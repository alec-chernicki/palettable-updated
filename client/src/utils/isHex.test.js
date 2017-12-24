import isHex from './isHex';

describe('isHex', () => {
  it('returns false when passed a non-hex string', () => {
    expect(isHex('hello')).toBe(false);
  });

  it('returns true when passed a hex string with pound symbol', () => {
    expect(isHex('#FFF')).toBe(true);
  });

  it('returns true when passed a hex string without pound symbol', () => {
    expect(isHex('FFF')).toBe(true);
  });
});
