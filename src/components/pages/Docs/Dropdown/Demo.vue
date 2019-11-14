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
            v-model="value"
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
import { Dropdown, DropdownItem } from '~packages/dropdown/src/dropdown.js';

export default {
    name: 'DropdownDemo',
    components: {
        Dropdown,
        DropdownItem
    },
    props: {},
    data() {
        return {
            value: '',
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
    --forground-color: #{$color-secondary-lighten};
    --background-color: #{$color-secondary-darken};
    --background-color-darken: #{$color-secondary-darker};
    --background-color--hover: #{$color-secondary-darkest};

    width: var(--width);
    display: flex;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, .1));

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
        color: gray(100);
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
        transition: transform .2s;

        &--stateOpen {
            transform: rotateZ(180deg);
        }
    }

    &__placeholder {
        box: center;
        padding-right: $grid--normal;
        font-size: .9em;
    }

    &__list {
        background-color: var(--background-color-darken);
        position: absolute;
        top: calc(100% - 2px);
        left: 0;
        right: 0;
        min-width: var(--width);
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        transition: clip-path .3s, transform .2s .3s, opacity .3s;
        transition-timing-function: cubic-bezier(0, .57, .01, .95);
        clip-path: circle(0% at 0 0);
        transform: translateY(-1rem);

        &--stateOpen {
            transition: clip-path .3s, transform .3s, opacity .3s;
            clip-path: circle(150% at 0% 0%);
            transform: translateY(0);
        }
    }

    &__item {
        padding: $grid $grid--normal;
        color: gray(100);
        cursor: pointer;
        user-select: none;

        & + & {
            border-top: 1px solid var(--background-color--hover);
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
