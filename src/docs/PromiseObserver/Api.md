This is the list of all APIs and Props you may want to know about.

## Props

Name                  | Description                                                                                                   | Type     | Default | Required
--------------------- | ------------------------------------------------------------------------------------------------------------- | -------- | ------- | --------
`promise`             | Variable that contains a promise                                                                              | `Object` | ---     | `true`
`options.fields.data` | Property name of data field (could be useful for example when you use axios, your data lives in `data` field) | `String` | ''      | `false`

## Provides in `v-slot`

Name         | Intension                                                  | Type
------------ | ---------------------------------------------------------- | ------
state        | Current state of promise. either `rejected` or `fulfilled` | `data`
isPending    | If current state is pending                                | `data`
hasFulfilled | If the promise has been fulfilled                          | `data`
response     | raw response from promise                                  | `data`
mainData     | Value of property provided in `options.fields.data`        | `data`
hasRejected  | If the promise has been rejected                           | `data`
reason       | Error, only if the promise is in reject state              | `data`

## Events

Name      | Payload
--------- | --------
`fulfill` | response
`error`   | error
