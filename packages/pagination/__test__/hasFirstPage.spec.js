import { getScopedSlot } from './_utils';

describe('hasFirstPage', () => {
  it('should return true if not on first page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasFirstPage', {
        currentPage: 2
      })
    ).toBe(true);
    expect(
      getScopedSlot('hasFirstPage', {
        currentPage: getScopedSlot('totalPages')
      })
    ).toBe(true);
  });

  it('should return false if on first page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasFirstPage', {
        currentPage: 1
      })
    ).toBe(false);
  });

  it('should return false if only has one page', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('hasFirstPage', {
        totalDocs: 10,
        pageLimit: 10,
        currentPage: 1
      })
    ).toBe(false);
  });
});
