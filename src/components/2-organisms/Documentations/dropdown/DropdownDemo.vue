<template>
  <div class="dropdown">
    <dropdown
      v-slot="{
        listToRender,
        instanceId,
        isOpen,

        open
      }"
      :raw-list="list"
    >
      <div class="dropdown__inner">
        <button
          class="dropdown__handler"
          @click="open"
        >
          <div class="dropdown__iconHolder">
            <svg-icon
              name="arrow"
              class="dropdown__icon"
            />
          </div>
          <span class="dropdown__placeholder">
            Select item
          </span>
        </button>
        <ul
          :class="{
            'dropdown__list--isVisible': isOpen
          }"
          class="dropdown__list"
        >
          <dropdown-item
            v-for="listItem in listToRender"
            :key="listItem.id"
            :instance-id="instanceId"
            :list="listToRender"
            :item="listItem"
          >
            <li class="dropdown__item">
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
        },
        {
          id: 4,
          label: 'Fifth item'
        },
        {
          id: 5,
          label: 'Sixth item'
        },
        {
          id: 6,
          label: 'Seventh item'
        },
        {
          id: 7,
          label: 'Eighth item'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.dropdown {
  --height: 55px;
  --width: 200px;
  --border-radius: 10em;

  width: var(--width);

  &__inner {
    position: relative;
  }

  &__handler {
    box: horizontal;
    width: 100%;
    height: var(--height);
    border-radius: var(--border-radius);
    background-color: $color-primary-200;
    cursor: pointer;
  }

  &__iconHolder {
    box: center middle;
    height: var(--height);
    width: var(--height);
    background-color: $color-primary-300;
    border-radius: var(--border-radius);
  }

  &__icon {
    color: $color-primary-700;
  }

  &__placeholder {
    box: center;
    color: mix(#000000, $color-primary-200, 50%);
    padding: $grid--normal;
  }

  &__list {
    background-color: #FFFFFF;
    position: absolute;
    left: calc((var(--height) / 2) - .6rem);
    top: calc(100% - #{$grid});
    min-width: var(--width);
    padding: $grid 0;
    color: $color-primary-900;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, .1);
    opacity: 0;
    pointer-events: none;
    transform: translateY(30px);

    &--isVisible {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }

    &::before {
      content: '';
      width: 15px;
      height: 15px;
      position: absolute;
      bottom: 100%;
      transform: rotateZ(45deg) translateX(8px) translateY(4px);
      border-radius: 2px 0 2px 0;
      background: #FFFFFF;
    }
  }

  &__item {
    padding: $grid $grid--normal;
  }
}
</style>
