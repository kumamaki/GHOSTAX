# Dropdownue

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

A renderless vue dropdown component

## Why?

Almost every project needs a dropdown somewhere, And If you are like me, you just don't like to use UI frameworks and their made ready DOM and style and bullshits. So, I made a renderless component to abstract the usual logic behind dropdowns.

🐛 _This may be unstable for now. I'm working on it. And there certainly will be some breaking changes._

## Installation

```bash
yarn add dropdownue
# OR
npm i dropdownue
```

## Usage

### Register

```javascript
import { Dropdownue, DropdownueItem } from "dropdownue";

export default {
  ...
  components: {
    Dropdownue,
    DropdownueItem
  }
  ...
};
```

### `<dropdownue>`

You can use `<dropdownue>` like this. **required props are listed on API section**

```html
<dropdownue
  :list="list"
  default-value="value"
  v-slot="{ isOpen, value: providedValue, listItems, toggle }"
  @change="handleValueChange"
>
  ...
</dropdownue>
```

And in you `script` section...

```javascript
export default {
	...
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
    },
    methods: {
	    handleValueChange(newValue) {
		    ...
	    }
	}
```

### `<dropdownue-item>`

Inside your `<dropdownue>`, there it goes a `<dropdownue-item>` with `v-for` on it.  
**Remember to attach `itemEvents` to `v-on` of your list items**

```html
<dropdownue-item
  v-slot="{ isHighlighted, isSelected, itemEvents }"
  v-for="item in listItems"
  :key="item.id"
  :list="listItems"
  :item="item"
>
  <li v-on="itemEvents(item)">
    {{ item.name }}
  </li>
</dropdownue-item>
```

## API

This is the list of all APIs and Props you may want to know about.

### Props

#### `<dropdownue> ... </dropdwonue>`

| Name             | Description                                                               | Type      | Default     | is Required |
| ---------------- | ------------------------------------------------------------------------- | --------- | ----------- | ----------- |
| list             | Array of your items. Should contain `id`                                  | `Array`   | ---         | `true`      |
| defaultValue     | `id` of pre selected item                                                 | `String`  | `undefined` | `false`     |
| filterQuery      | The query that `listItems` gets generated based on                        | `String`  | `''`        | `false`     |
| closeOnSelect    | Should or should not change state to close after item selection           | `Boolean` | `true`      | `false`     |
| closeOnClickaway | Should or should not change state to close after clickaway or esc keydown | `Boolean` | `true`      | `false`     |
| resetOnSelect    | Should or should not reset filterQuery and listItems on item select       | `Boolean` | `true`      | `false`     |

#### `<dropdownue-item> ... </dropdwonue-item>`

| Name | Description                                   | Type    | Default | is Required |
| ---- | --------------------------------------------- | ------- | ------- | ----------- |
| list | The list that `<dropdownue>` provides for you | `Array` | ---     | `true`      |
| item | An item of your list                          | ---     | `true`  |

### Provides

The API mostly contains `Functions` for you to call, `Events` to listen on, and `Flags` to check, plus a `listItem` to be rendered. use these in `v-slot`

#### `<dropdownue> ... </dropdwonue>`

| Name     | Intension                                   | Type                 |
| -------- | ------------------------------------------- | -------------------- |
| listItem | Copy of your passed list, plus some goodies | `data`               |
| value    | ID of current selected item                 | `data`               |
| isClosed | Flag for state being close                  | `flag`               |
| isOpen   | Flag for state being open                   | `flag`               |
| open     | Changes state to open                       | `function`           |
| close    | Changes state to closed                     | `function`           |
| toggle   | Toggle state                                | `function (Boolean)` |
| filter   | Filters listItems                           | `function (String)`  |

#### `<dropdownue-item> ... </dropdwonue-item>`

| Name          | Intension                                   | Type              |
| ------------- | ------------------------------------------- | ----------------- |
| isSelected    | Copy of your passed list, plus some goodies | `flag`            |
| isHighlighted | ID of current selected item                 | `flag`            |
| itemEvents    | Events to be attached to list item DOM      | `data`            |
| highlight     | Highlights the item via ID                  | `funstion (item)` |

## Caveats

- You can use either `filterQuery` prop or `filter` function. whichever you want.
