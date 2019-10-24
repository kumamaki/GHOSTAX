import { getScopedSlot } from './_utils';

describe('pageNumbersSet', () => {
  it('should return correct page numbers set if total pages are many', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 400,
        pageLimit: 10,
        currentPage: 1,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 400,
        pageLimit: 10,
        currentPage: 3,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 400,
        pageLimit: 10,
        currentPage: 5,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 400,
        pageLimit: 10,
        currentPage: 6,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 400,
        pageLimit: 10,
        currentPage: 20,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 400,
        pageLimit: 10,
        currentPage: 38,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([31, 32, 33, 34, 35, 36, 37, 38, 39, 40]);
  });


  it('should return correct page numbers set if total pages are few', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 20,
        pageLimit: 10,
        currentPage: 1,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([1, 2]);
  });


  it('should return correct page numbers set if total pages are one', () => {
    expect.hasAssertions();
    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 20,
        pageLimit: 20,
        currentPage: 1,
        pageNumbersSetCount: 10
      })
    ).toStrictEqual([1]);

    expect(
      getScopedSlot('pageNumbersSet', {
        totalDocs: 20,
        pageLimit: 20,
        currentPage: 1,
        pageNumbersSetCount: 1
      })
    ).toStrictEqual([1]);
  });
});
