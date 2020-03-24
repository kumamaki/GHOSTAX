## Usage

```javascript
import { Dropdown, DropdownItem } from "@ghostax/dropdown";

export default {
  ...
  components: {
    Dropdown,
    DropdownItem
  }
  ...
};
```

---

### `Dropdown` component

You can use `<dropdown>` like this. **required props are listed on API section**

```markup
<dropdown
  v-model="value"
  v-slot="{ listToRender, instance, isOpen, selected, toggle }"
  :raw-list="list"
>
  <button class="dropdown__handler" @click="toggle">
    {{ selected.label || 'Select item' }}
  </button>
  <ul
    :class="{
      'dropdown__list--stateOpen': isOpen
    }"
    class="dropdown__list"
  >
    <!-- <dropdown-item>...</dropdown-item> may be here -->
  </ul>
</dropdown>
```

and in your script section

```javascript
data() {
    return {
        list: [
            {
                name: 'draft',
                id: 1
            },
            {
                name: 'published',
                id: 2
            },
            {
                name: 'archive',
                id: 3,
            }
        ],
        value: 1
    }
}
```

---

### `DropdownItem` component

Inside your `<dropdown>`, there it goes a `<dropdown-item>` with `v-for` on it.

❗ **You have to get instance from `<dropdown>` and pass it to `<dropdown-item>`**

```markup
<dropdown-item
  v-for="listItem in listToRender"
  :key="listItem.id"
  v-slot="{ itemEvents, isHighlighted, isSelected }"
  :instance="instance"
  :item="listItem"
>
  <li
    :class="{
      'dropdown__item--isSelected': isSelected,
      'dropdown__item--isHovered': isHighlighted
    }"
    class="dropdown__item"
    v-on="itemEvents(listItem)"
  >
    {{ listItem.label }}
  </li>
</dropdown-item>
```
