import { getScopedSlot } from './_utils';

describe('itemsPassed', () => {
  it('should return correct passed items number when current page is first one', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('itemsPassed', {
        totalDocs: 200,
        pageLimit: 10,
        currentPage: 1
      })
    ).toBe(10);
  });

  it('should return correct passed items number when current page is in middle', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('itemsPassed', {
        totalDocs: 200,
        pageLimit: 10,
        currentPage: 10
      })
    ).toBe(100);
  });

  it('should return correct passed items number when current page is last one', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('itemsPassed', {
        totalDocs: 200,
        pageLimit: 10,
        currentPage: 20
      })
    ).toBe(200);
  });
});
