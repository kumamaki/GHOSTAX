## `findRawRoute`

This returns a raw route object just like what you defined in routes object.

### Example

Assume this is part of routes:

```javascript
...,
{
  path: '/docs',
  name: 'docs',
  children: [ ... ]
},
...
```

Then, you can use `findRawRoute` like below:

```javascript
import { findRawRoute } from '@ghostax/vue-router';

findRawRoute(this.$router, {
  name: 'docs'
});
```

And you will get the exact `docs` object. The object you're looking for can be in any level of nesting. It will traverse deeply until finds a match or returns `null`.

Function     | Parameters | Parameters Description | returns
------------ | ---------- | ---------------------- | ------------------------------
findRawRoute | ($router)  | whole router object    | either founded route or `null`
