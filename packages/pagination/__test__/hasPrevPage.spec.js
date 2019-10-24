import { getScopedSlot } from './_utils';

describe('hasPrevPage', () => {
  it('should return false if is on first page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasPrevPage', {
        currentPage: 1
      })
    ).toBe(false);
  });

  it('should return true if at last page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasPrevPage', {
        currentPage: getScopedSlot('totalPages')
      })
    ).toBe(true);
  });

  it('should return true if is on somewhere middle', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasPrevPage', {
        currentPage: Math.ceil(getScopedSlot('totalPages') / 2)
      })
    ).toBe(true);
  });
});
