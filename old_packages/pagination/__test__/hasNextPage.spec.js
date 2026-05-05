import { getScopedSlot } from './_utils';

describe('hasNextPage', () => {
  it('should return true if is on first page and its not the only one', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasNextPage', {
        currentPage: 1
      })
    ).toBe(true);
  });

  it('should return true if not at last page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasNextPage', {
        currentPage: 10
      })
    ).toBe(true);
  });

  it('should return false if on last page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasNextPage', {
        currentPage: 25
      })
    ).toBe(false);
  });
});
