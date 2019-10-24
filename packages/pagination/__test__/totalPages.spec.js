import { getScopedSlot } from './_utils';

describe('totalPages', () => {
  it('should return correct total pages when total docs are MORE than limit', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('totalPages', {
        totalDocs: 370,
        pageLimit: 15
      })
    ).toBe(25);
  });

  it('should return correct total pages when total docs are EQUAL to limit', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('totalPages', {
        totalDocs: 20,
        pageLimit: 20
      })
    ).toBe(1);
  });

  it('should return correct total pages when total docs are LESS than limit', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('totalPages', {
        totalDocs: 15,
        pageLimit: 17
      })
    ).toBe(1);
  });
});
