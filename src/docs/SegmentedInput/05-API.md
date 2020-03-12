## API

This is the list of all APIs and Props you may want to know about.

### Props

Name                      | Description                                                | Type     | Default      | Required | Validation
------------------------- | ---------------------------------------------------------- | -------- | ------------ | -------- | ---------------------
`fieldsCount` | Number of desired fields | Number | --- | true | Should be 0 or more
`validation` | Validation of input entry. Should return `truthy/falsy` | Function | _isNumber_ |  | ---

---

### Provides

Name         | Intension                                                           | Type
------------ | ------------------------------------------------------------------- | ----------------
codes | Array of `code` objects. Each one contains `isFocused` and `value` | `data -> Array`
value | Aggregated value | `data -> String`
events | Object of events function. Contains only a `keydown` event. Do not use like `v-on="events". Because you should pass `$event` and `index` to the `keydown` function | `functions`

---

### Events

Name          | Payload                                 | When
------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------
`input` | ` {value, fieldIndex} ` | When any value changes in any way.
`focus` | `index` | When a field get focused
`delete` | `index` | When a field's value gets cleared
