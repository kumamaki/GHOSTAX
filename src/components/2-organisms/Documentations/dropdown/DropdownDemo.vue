<template>
  <div class="dropdown">
    <dropdown
      v-slot="{
        listToRender,
        instance,
        isOpen,
        selected,

        toggle
      }"
      :default-value="2"
      :raw-list="list"
    >
      <div class="dropdown__inner">
        <button
          class="dropdown__handler"
          @click="toggle"
        >
          <div
            :class="{
              'dropdown__iconHolder--stateOpen': isOpen
            }"
            class="dropdown__iconHolder"
          >
            <svg-icon
              name="arrow"
              :class="{
                'dropdown__icon--stateOpen': isOpen
              }"
              class="dropdown__icon"
            />
          </div>
          <span class="dropdown__placeholder">
            {{ selected.label || 'Select item' }}
          </span>
        </button>
        <ul
          :class="{
            'dropdown__list--stateOpen': isOpen
          }"
          class="dropdown__list"
        >
          <dropdown-item
            v-for="listItem in listToRender"
            :key="listItem.id"
            v-slot="{
              itemEvents,
              isHighlighted,
              isSelected
            }"
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
        </ul>
      </div>
    </dropdown>
  </div>
</template>

<script>
import { Dropdown, DropdownItem } from '@ghostax/dropdown';

export default {
  name: 'DropdownDemo',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {},
  data() {
    return {
      list: [
        {
          id: 0,
          label: 'First item'
        },
        {
          id: 1,
          label: 'Second item'
        },
        {
          id: 2,
          label: 'Third item'
        },
        {
          id: 3,
          label: 'Fourth item'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.dropdown {
  --height: 45px;
  --width: auto;
  --border-radius: 3px;
  --background-color: #{$color-primary-200};
  --background-color--hover: #{$color-primary-300};

  width: var(--width);
  display: flex;

  &__inner {
    position: relative;
    min-width: 150px;
  }

  &__handler {
    box: horizontal middle;
    width: 100%;
    height: var(--height);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    cursor: pointer;
  }

  &__iconHolder {
    box: center middle;
    height: var(--height);
    width: var(--height);
    border-radius: var(--border-radius);
    background-color: var(--background-color);

    &--stateOpen {
    }
  }

  &__icon {
    color: $color-gray-800;
    transition: transform .2s;

    &--stateOpen {
      color: $color-primary-700;
      transform: rotateZ(180deg);
    }
  }

  &__placeholder {
    box: center;
    padding-right: $grid--normal;
    color: $color-gray-700;
    font-weight: 600;
    font-size: .9em;
  }

  &__list {
    background-color: var(--background-color);
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    right: 0;
    min-width: var(--width);
    padding-top: $grid;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: clip-path .2s, transform .1s;
    transition-timing-function: cubic-bezier(0, .57, .01, .95);
    clip-path: circle(0% at 0 0);
    transform: translateY(-1rem);

    &--stateOpen {
      clip-path: circle(150% at 0% 0%);
      transform: translateY(0);
    }
  }

  &__item {
    padding: $grid $grid--normal;
    color: $color-gray-800;
    cursor: pointer;
    user-select: none;

    & + & {
      border-top: 1px solid rgba(0, 0, 0, .1);
    }

    &--isSelected {
      background-color: var(--background-color--hover);
    }

    &--isHovered {
      background-color: var(--background-color--hover);
    }
  }
}
</style>
