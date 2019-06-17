<template>
  <div id="app">
    <dropdownue
      :list="list"
      :close-on-select="true"
      :close-on-clickaway="true"
      :filter-query="filterQuery"
      v-slot="{ instanceId, isOpen, value, listItems, open, filter }"
      default-value="3"
    >
      <div class="dropdown">
        <input v-model="filterQuery" />
        <div
          class="dropdown__handler"
          @click="open"
        >
          {{ value || "Choose" }}
        </div>
        <ul
          class="dropdown__list"
          v-show="isOpen"
        >
          <dropdownue-item
            :instance-id="instanceId"
            v-slot="{ isHighlighted, isSelected, itemEvents }"
            v-for="item in listItems"
            :key="item.id"
            :list="listItems"
            :item="item"
          >
            <li
              class="dropdown__item"
              v-on="itemEvents(item)"
            >
              {{ item }}
            </li>
          </dropdownue-item>
        </ul>
      </div>
    </dropdownue>
  </div>
</template>

<script>
import { Dropdownue, DropdownueItem } from "./components/dropdownue";

export default {
  name: "App",
  components: {
    Dropdownue,
    DropdownueItem
  },
  data() {
    return {
      filterQuery: "",
      list: [
        {
          name: "one",
          id: 1
        },
        {
          name: "two",
          id: 2
        },
        {
          name: "three",
          id: 3
        },
        {
          name: "four",
          id: 4
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
#app {
  background-color: hsl(35, 68%, 86%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropdown {
  color: hsl(0, 0%, 20%);
  &__handler {
    background-color: white;
    padding: 1em 2em;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: hsl(0, 0%, 98%);
    }
  }
  &__list {
    list-style: none;
    padding: 0;
    background-color: white;
    margin: 0;
    margin-top: -3px;
  }

  &__item {
    padding: 0.5em 1em;
    cursor: pointer;
    user-select: none;
    &--isHighlighted {
      background-color: hsl(0, 0%, 98%);
    }
  }
}
</style>
