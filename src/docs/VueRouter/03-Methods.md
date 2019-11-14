## Methods

### `findRawRoute`

This returns a raw route object just like what you defined in routes object.

#### Example

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

And you will get the exact `docs` object. The object you're looking for can be in any level of nesting. It will traverse deeply until finds a match or will returns `null`.

Function     | Parameters | Parameters Description | returns
------------ | ---------- | ---------------------- | ------------------------------
findRawRoute | ($router)  | whole router object    | either founded route or `null`

---

### `findNextAbsoluteRoute`, `findPrevAbsoluteRoute`
Looks for next/prev sibling absolute route. Means if that itself is last/first child of its parent, then first/last child of its parent's next/prev sibling will get return. (It's really way simpler that it sounds 👀)

#### Example
```js
import { findNextAbsoluteRoute, findPrevAbsoluteRoute } from '@ghostax/vue-router-helpers';

export default {
    ...
    computed: {
        nextRoute() {
            return findNextAbsoluteRoute(this.$router, this.$route);
        },
        prevRoute() {
            return findPrevAbsoluteRoute(this.$router, this.$route);
        }
    }
    ...
}
```
Returns `null` if don't find anything.

Function     | Parameters | Parameters Description | returns
------------ | ---------- | ---------------------- | ------------------------------
findPrevAbsoluteRoute | ($router, $route)  | whole router object - current route    | either founded route or `null`
findNextAbsoluteRoute | ($router, $route)  | whole router object - current route    | either founded route or `null`

---

### `findNextRelativeRoute`, `findPrevRelativeRoute`
Looks for next/prev sibling relative route. Means the parent is the only place to look for.

#### Example
```js
import { findNextRelativeRoute, findPrevRelativeRoute } from '@ghostax/vue-router-helpers';

export default {
    ...
    computed: {
        nextRoute() {
            return findNextRelativeRoute(this.$router, this.$route);
        },
        prevRoute() {
            return findPrevRelativeRoute(this.$router, this.$route);
        }
    }
    ...
}
```
Returns `null` if don't find anything.

Function     | Parameters | Parameters Description | returns
------------ | ---------- | ---------------------- | ------------------------------
findPrevRelativeRoute | ($router, $route)  | whole router object - current route | either founded route or `null`
findNextRelativeRoute | ($router, $route)  | whole router object - current route| either founded route or `null`