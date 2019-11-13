<template>
    <nav
        v-cq
        class="navigation"
    >
        <router-link :to="{name: 'home'}">
            <app-logo class="docsHeader__logo" />
        </router-link>
        <div
            v-if="$cq.small"
            class="navigation__hamburger"
        >
            <svg-icon
                name="menu-line"
                class="navigation__hamburgerIcon"
                :original="true"
                @click.native="showHamburger"
            />
            <portal to="modal">
                <div
                    :class="{
                        'navigation__hamburgerDimer--visibility:true': hamburgerIsOpen
                    }"
                    class="navigation__hamburgerDimer"
                    @mousedown="hideHamburger"
                    @touchstart="hideHamburger"
                />
                <navigation-list
                    :class="{
                        'navigation__list--mode:floating--visibility:true': hamburgerIsOpen
                    }"
                    class="navigation__list | navigation__list--mode:floating"
                    :parent-name="parentName"
                />
            </portal>
        </div>
        <navigation-list
            v-else
            class="navigation__list"
            :parent-name="parentName"
        />
    </nav>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import '~icons/menu-line';
import AppLogo from '~units/Logo';
import NavigationList from './List';

export default {
    name: 'Navigation',
    cq: {
        small: {
            maxWidth: 200
        }
    },
    components: {
        AppLogo,
        NavigationList
    },
    directives: {
        ClickOutside
    },
    props: {
        parentName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            hamburgerIsOpen: false
        };
    },
    computed: {
    },
    watch: {
        $route() {
            setTimeout(() => {
                this.hideHamburger();
            }, 500);
        }
    },
    methods: {
        showHamburger() {
            console.log('YOYO');
            this.hamburgerIsOpen = true;
        },
        hideHamburger() {
            console.log('HEEHEHE');
            this.hamburgerIsOpen = false;
        }
    }
};
</script>

<style scoped lang="scss">
.navigation {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: $grid--xlarge;

    &--size\: {

        &small {
            gap: $grid--medium;
        }
    }

    &__logo {

    }

    &__hamburger {
        margin-left: $grid;
    }

    &__hamburgerDimer {
        position: fixed 0 0 0 0;
        border-radius: 50em;
        transform-origin: left;
        transform: scale(.3) translateX(-50%);
        transition: all .15s ease-in-out;
        opacity: 0;
        pointer-events: none;

        &--visibility\:true {
            opacity: 1;
            border-radius: 0;
            transform: scale(1) translateX(0);
            background-color: rgba(0, 0, 0, .75);
            pointer-events: all;
        }
    }

    &__hamburgerIcon {
        size: $grid--large;
        color: gray(20);
    }

    &__list {
        display: grid;
        grid-template-rows: auto-fit;
        grid-row-gap: $grid--large;

        &--mode\:floating {
            --links-vertical-gap: #{$grid--normal};

            position: fixed 0 auto 0 0;
            margin: $grid--medium;
            background-color: gray(100);
            padding: $grid--medium;
            padding-right: $grid--large;
            border-radius: 3px;
            box-shadow: 0 4px 100px 0 rgba(0, 0, 0, .5);
            opacity: 0;
            pointer-events: none;
            transform: translateX(-50%);
            transition: all .15s .1s ease-in-out;
            will-change: box-shadow, opacity;

            &--visibility\:true {
                opacity: 1;
                transform: translateX(0);
                pointer-events: all;
            }
        }
    }
}
</style>
