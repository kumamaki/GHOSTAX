## API

This is the list of all APIs and Props you may want to know about.

### Props

Name                      | Description                                                | Type     | Default      | Required
------------------------- | ---------------------------------------------------------- | -------- | ------------ | --------
`total-docs`              | Number of total documents                                  | `Number` | ---          | `true`
`page-limit`              | Number of item per page                                    | `Number` | ---          | `true`
`current-page`            | Number of current page                                     | `Number` | ---          | `true`
`area-count`              | Count of pages you want at pre or post of the current page | `Number` | `5`          | `false`
`options.query.pageSize`  | Name of page size field to use in query generator          | `String` | `pageSize`   | `false`
`options.query.pageLimit` | Name of page limit field to use in query generator         | `String` | `pageNumber` | `false`

### Provides in `v-slot`

`GhPagination` doesn't provide any function or click events. only data.

Name         | Intension                                                           | Type
------------ | ------------------------------------------------------------------- | ----------------
totalPages   | Number of total pages you will get                                  | `data (Number)`
progress     | Number of items that currently has been navigated                   | `data (Number)`
hasPrevPage  | If there is any previous page                                       | `data (Boolean)`
hasFirstPage | If first page navigatior should be active                           | `data (Boolean)`
hasLastPage  | If last page navigatior should be active                            | `data (Boolean)`
nextPage     | Number of next page                                                 | `data (Boolean)`
prevPage     | Number of previous page                                             | `data (Boolean)`
query        | Generated query string                                              | `data (String)`
area         | Array of pages list to render                                       | `data (Array)`
pageSize     | Changes state to open                                               | `data (Number)`
showingInfo  | Information about current progress. contains `from`, `to`, and `of` | `data (Object)`

### Events

Name     | Payload                               | When
-------- | ------------------------------------- | -------------------------
`update` | { query, area, pageSize, pageNumber } | When current page changes
