<template>
    <div
        v-cq
        class="docs"
    >
        <docs-navigation
            class="docs__navigation"
            parent-name="docs"
        />
        <section class="docs__sheet">
            <router-view class="docs__content" />
            <docs-next-prev class="docs__nextPrev" />
        </section>
    </div>
</template>

<script>
import DocsNavigation from '~layout/Navigation';
import DocsNextPrev from './NextPrev';

export default {
    name: 'DocsPage',
    cq: {
        large: {
            maxWidth: 850
        }
    },
    components: {
        DocsNavigation,
        DocsNextPrev
    },
    props: {},
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.docs {
    --logo-size: 70px;

    width: var(--general-width);
    max-width: calc(100% - #{$grid--xxlarge});
    margin: 0 auto;
    display: grid;
    align-items: stretch;
    grid-template-columns: max-content minmax(0, 1fr);
    gap: $grid--xxxlarge;
    position: relative;

    @include size(large) {
        grid-template-columns: minmax(0, var(--logo-size)) minmax(0, 1fr);
        gap: $grid--large;
    }

    &__navigation {
        position: sticky;
        height: 100vh;
        top: 0;
        padding: $grid--xxlarge 0;

        &::before {
            content: '';
            position: absolute 0 0 0 0;
            right: calc(#{$grid--large} * -1);
            z-index: -1;
            background-color: $selago;
            transform-origin: right;
            transform: scaleX(10);
        }
    }

    &__sheet {
        display: grid;
        grid-template-rows: 1fr auto;
        padding: $grid--xxlarge 0;
        height: 100%;
    }

    &__content {

    }

    &__nextPrev {
        margin-top: $grid--xxlarge;
    }
}
</style>
