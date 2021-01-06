## Usage

First, import the component

```javascript
import PromiseObserver from '@ghostax/promise-observer';

export default {
  ...
  components: {
    PromiseObserver
  },
  ...
}
```

Then wrap some, or all your template with `<promise-observer>...</promise-observer>`

```markup
<promise-observer
    :promise="promiseVariable"
    #default="{ isPending, hasFulfilled, hasRejected }"
>
  <div v-if="isPending"> <!--  loading indicator --> </div>
  <div v-if="hasRejected"> <!--  oops! --> </div>
  <div v-if="hasFulfilled"> <!--  data here --> </div>
</promise-observer>
```

Now you can easily toggle between loading, error, or main component.
