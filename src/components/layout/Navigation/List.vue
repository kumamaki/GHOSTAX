<template>
    <ul
        class="navigationList"
    >
        <li
            v-for="(child) in children"
            :key="child.name"
            class="navigationList__item"
        >
            <router-link
                :to="{
                    name: child.name
                }"
                class="navigationList__name"
            >
                {{ child.meta.title }}
            </router-link>
            <NavigationList
                v-if="hasMoreChildren"
                :parent-name="child.name"
                :indent-number="indentNumber + 1"
                :class="[`navigationList--inner--${indentNumber}`]"
                class="navigationList--inner"
            />
        </li>
    </ul>
</template>

<script>
import _isEmpty from 'lodash.isempty';
import { findRoute } from '~helpers/router';

export default {
    name: 'NavigationList',
    props: {
        parentName: {
            type: String,
            required: true
        },
        indentNumber: {
            type: Number,
            required: false,
            default: 0
        }
    },
    data() {
        return {};
    },
    computed: {
        children() {
            return findRoute(this.$router.options.routes, this.parentName).children;
        },
        hasMoreChildren() {
            return !_isEmpty(this.children);
        }
    }
};
</script>

<style scoped lang="scss">
.navigationList {
    box: vertical;

    &--inner {
        display: grid;
        grid-row-gap: var(--links-vertical-gap, #{$grid});
        margin-top: $grid--normal;
        padding-left: $grid--normal;
        text-transform: none;
        color: gray(40);
        font-size: ms(1);
        font-weight: 400;

        &:empty {
            display: none;
        }
    }

    &__item {
        line-height: 1;
    }

    &__name {
        box: horizontal;

        &::before {
            content: '';
            align-self: flex-end;
            height: 2px;
            background-color: $color-secondary-darkest;
            will-change: width;
            transition: width .1s, margin-right .1s;
            border-radius: 3px;
            width: 0;
        }

        &.isActive {
            color: $color-secondary-darkest;

            &::before {
                width: $grid--normal;
                margin-right: $grid;
            }
        }
    }

    &:not(&--inner) {
        text-transform: uppercase;
        color: gray(65);
        font-size: ms(-1);
        font-weight: 700;
        display: grid;
        align-items: start;
        grid-auto-rows: minmax(min-content, max-content);
        grid-row-gap: $grid--large;
    }
}
</style>
