import { getScopedSlot } from './_utils';

describe('hasLastPage', () => {
  it('should return true if not on last page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasLastPage', {
        currentPage: 1
      })
    ).toBe(true);
    expect(
      getScopedSlot('hasLastPage', {
        currentPage: 10
      })
    ).toBe(true);
  });

  it('should return false if on last page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasLastPage', {
        currentPage: getScopedSlot('totalPages')
      })
    ).toBe(false);
  });
});
