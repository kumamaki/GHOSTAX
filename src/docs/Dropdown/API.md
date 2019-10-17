This is the list of all APIs and Props you may want to know about.

## Props

### `<dropdown>`

Name                       | Description                                                                       | Type             | Default     | Required
-------------------------- | --------------------------------------------------------------------------------- | ---------------- | ----------- | --------
`raw-list`                 | Array of your items. Should contain some unique field                             | `Array`          | ---         | `true`
`value`                    | uid of selected item                                                              | `String, Number` | `undefined` | `false`
`filter-query`             | The query that `listToRender` gets generated based on                             | `String`         | `''`        | `false`
`options.closeOnSelect`    | Should or should not change state to close after item selection                   | `Boolean`        | `true`      | `false`
`options.closeOnClickaway` | Should or should not change state to close after clickaway or esc keydown         | `Boolean`        | `true`      | `false`
`options.resetOnSelect`    | Should or should not reset filterQuery and listItems on item select and clearance | `Boolean`        | `true`      | `false`
`options.fields.unique`    | Unique property of items in list                                                  | `String`         | `id`        | `false`
`options.fields.label`     | Label property of items in list                                                   | `String`         | `label`     | `false`

### `<dropdown-item>`

Name     | Description                                     | Type     | Default | is Required
-------- | ----------------------------------------------- | -------- | ------- | -----------
instance | The instance that `<dropdown>` provides for you | `Object` | ---     | `true`
item     | An item of your list                            | ---      | ---     | `true`

## Provides in `v-slot`

The API mostly contains `Functions` for you to call, `Events` to listen on, and `Flags` to check, plus a `listToRender` to be rendered. use these in `v-slot`

### `<dropdown>`

Name           | Intension                                                     | Type
-------------- | ------------------------------------------------------------- | --------------------
listToRender   | Copy of your passed list, filtered, plus some goodies         | `data`
instance       | Instance of you dropdown                                      | `data`
value          | UID of current selected item                                  | `data`
wholeList      | Copy of your passed list, **not** filtered, plus some goodies | `data`
selected.uid   | UID of selected item                                          | `data`
selected.label | Label of selected item                                        | `data`
wholeList      | Copy of your passed list, **not** filtered, plus some goodies | `data`
isClosed       | Flag for state being close                                    | `flag`
isOpen         | Flag for state being open                                     | `flag`
open           | Changes state to open                                         | `function`
close          | Changes state to closed                                       | `function`
toggle         | Toggle state                                                  | `function (Boolean)`
filter         | Filters listItems                                             | `function (String)`

### `<dropdown-item>`

Name          | Intension                                   | Type
------------- | ------------------------------------------- | -----------------
isSelected    | Copy of your passed list, plus some goodies | `flag`
isHighlighted | ID of current selected item                 | `flag`
itemEvents    | Events to be attached to list item DOM      | `data`
highlight     | Highlights the item via ID                  | `function (item)`

## Events

### `<dropdown>`

Name        | Payload
----------- | ---------
`input`     | itemID
`open`      | undefined
`close`     | undefined
`toggle`    | new state
`filter`    | undefined
`highlight` | itemUID
`blur`      | itemUID
