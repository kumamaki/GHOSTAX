import { getScopedSlot } from './_utils';

describe('showingInfo', () => {
  it('should return correct info', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('showingInfo', {
        totalDocs: 200,
        pageLimit: 10,
        currentPage: 1
      })
    ).toStrictEqual({
      from: 1,
      to: 10,
      of: 200
    });

    expect(
      getScopedSlot('showingInfo', {
        totalDocs: 200,
        pageLimit: 10,
        currentPage: 2
      })
    ).toStrictEqual({
      from: 11,
      to: 20,
      of: 200
    });

    expect(
      getScopedSlot('showingInfo', {
        totalDocs: 200,
        pageLimit: 10,
        currentPage: 10
      })
    ).toStrictEqual({
      from: 91,
      to: 100,
      of: 200
    });

    expect(
      getScopedSlot('showingInfo', {
        totalDocs: 200,
        pageLimit: 10,
        currentPage: 20
      })
    ).toStrictEqual({
      from: 191,
      to: 200,
      of: 200
    });
  });
});
