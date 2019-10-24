## API

This is the list of all APIs and Props you may want to know about.

### Props

Name                      | Description                                                | Type     | Default      | Required | Validation
------------------------- | ---------------------------------------------------------- | -------- | ------------ | -------- | ---------------------
`total-docs`              | Number of total documents                                  | `Number` | ---          | `true`   | Has to be real number
`page-limit`              | Number of item per page                                    | `Number` | ---          | `true`   | Has to be real number
`current-page`            | Number of current page                                     | `Number` | ---          | `true`   | Has to be real number
`area-count`              | Count of pages you want at pre or post of the current page | `Number` | `5`          | `false`  | Has to be real number
`options.query.pageSize`  | Name of page size field to use in query generator          | `String` | `pageSize`   | `false`  | ---
`options.query.pageLimit` | Name of page limit field to use in query generator         | `String` | `pageNumber` | `false`  | ---

### Provides in `v-slot`

`GhPagination` provides many data and some functions for navigation.

Name         | Intension                                                           | Type
------------ | ------------------------------------------------------------------- | ----------------
totalPages   | Number of total pages you will get                                  | `data (Number)`
progress     | Number of items that currently has been navigated                   | `data (Number)`
hasPrevPage  | If there is any previous page                                       | `data (Boolean)`
hasFirstPage | If first page navigator should be active                            | `data (Boolean)`
hasLastPage  | If last page navigator should be active                             | `data (Boolean)`
query        | Generated query string                                              | `data (String)`
pagesSet     | Array of page numbers to render                                     | `data (Array)`
pageSize     | Changes state to open                                               | `data (Number)`
showingInfo  | Information about current progress. contains `from`, `to`, and `of` | `data (Object)`
nextPage     | Navigate to next page                                               | `function`
prevPage     | Navigate to previous page                                           | `function`
firstPage    | Navigate to first page                                              | `function`
lastPage     | Navigate to last page                                               | `function`

### Events

Name          | Payload                                 | When
------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------
`change-page` | new `currentPage`                       | When current page changes via provided functions like `goToNextPage`/`goToPrevPage`/`goToFirstPage`/`goToLastPage`
`update`      | `{ query, area, pageSize, pageNumber }` | When current page changes in any sort of way
