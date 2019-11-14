## API

This is the list of all APIs and Props you may want to know about.

### Props

Name                      | Description                                                | Type     | Default      | Required | Validation
------------------------- | ---------------------------------------------------------- | -------- | ------------ | -------- | ---------------------
`value` | Value of current page | Number | --- | true | Should be 0 or more than 0
`total-docs` | Number of total documents | Number | --- | `true` | Should be 0 or more than 0
`page-limit` | Number of item per page | Number | --- | `true` | Should be 0 or more than 0
`page-numbers-set-count` | Count of pages you want at pre or post of the current page | Number | `5` | false | Should be 0 or more than 0
`options.query.pageSize` | Name of page size field to use in query generator | String | `pageSize` | false | ---
`options.query.pageLimit` | Name of page limit field to use in query generator | String | `pageNumber` | false  | ---

---

### Provides

`GhPagination` provides many data and some functions for navigation.

Name         | Intension                                                           | Type
------------ | ------------------------------------------------------------------- | ----------------
totalPages | Number of total pages you will get | `data -> Number`
itemsPassed | Number of items that currently has been navigated | `data -> Number`
itemsLeft | Number of items that currently has not been navigated | `data -> Number`
hasPrevPage | If there is any previous page | `data -> Boolean`
hasFirstPage | If first page navigator should be active | `data -> Boolean`
hasNextPage | If there is any next page | `data -> Boolean`
hasLastPage | If last page navigator should be active | `data -> Boolean`
query | Generated query string | `data -> String`
pagesSet | Array of page numbers to render | `data -> Array`
pageSize | Changes state to open | `data -> Number`
showingInfo | Information about current progress. contains `from`, `to`, and `of` | `data -> Object`
goToNextPage | Navigate to next page | `function`
goToPrevPage | Navigate to previous page | `function`
goToFirstPage | Navigate to first page | `function`
goToLastPage | Navigate to last page | `function`
showingInfo | Information of current status | `data -> Object`

---

### Events

Name          | Payload                                 | When
------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------
`change-page` | new `currentPage` | When current page changes via provided functions like `goToNextPage`/`goToPrevPage`/`goToFirstPage`/`goToLastPage`
`update` | `{ query, pageNumbersSet, pageSize, pageNumber }` | When current page changes in any sort of way
