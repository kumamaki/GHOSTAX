## Usage

First, import the component

```javascript
import GhSegmentedInput from '@ghostax/segmented-input';

export default {
  ...
  components: {
    GhSegmentedInput
  },
  ...
}
```

Then wrap your input which you have a `v-for` on it with `<gh-segmented-input>`.

---

### Simple

This is basic usage of `GhSegmentedInput` component:  
Pass required props, attach the received `keydown` event, set `input`'s value and that's it! Let's see it in action:

```vue
<template>
    <gh-segmented-input
        :fields-count="5"
        #default="{codes, events, value}"
    >
        <input
            v-for="(field, index) in 5"
            :key="index"
            :value="codes[index].value"
            @keydown="events.keydown($event, index)"
        />
    </gh-segmented-input>
</template>
```

All parts of the above example are required. `value` is the aggregation if all fields into one string. If there is any space between, it will be simply get omitted.

---

### Advance

You may want to customize this a little. __Default validation for data entry in "Number". You want characters too? write your own validator and pass it as `:validation=""` into `gh-segmented-input`__. your validation should return `truthy` or `falsy` as the representation of should or should not be able to put that value into the input.

```vue
    <gh-segmented-input
        class="segmentedInput"
        :fields-count="5"
        :validation="isNumberOrCharacter"
        #default="{codes, events, value}"
    >
        <input
            v-for="(field, index) in 5"
            :key="index"
            :value="codes[index].value"
            class="segmentedInput__field"
            @keydown="events.keydown($event, index)"
        />
    </gh-segmented-input>
    
    ...
    
    methods: {
        isNumberOrCharacter(value) {
            return ...
        }
    }
```
