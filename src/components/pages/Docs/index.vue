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
    align-items: start;
    margin: 0 auto;
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    gap: $grid--xxlarge;
    margin-top: $grid--xxlarge;
    position: relative;
    margin-bottom: $grid--xlarge;

    &--size\: {

        &large {
            grid-template-columns: minmax(0, var(--logo-size)) minmax(0, 1fr);
            gap: $grid--large;
        }
    }

    &__navigation {
        position: sticky;
        top: $grid--large;
    }

    &__sheet {
        min-width: 0;
    }

    &__content {

    }

    &__nextPrev {
        margin-top: $grid--xxlarge;
    }
}
</style>
