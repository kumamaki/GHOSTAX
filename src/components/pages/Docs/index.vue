<template>
  <div class="docs">
    <docs-navigation
      class="docs__navigation"
      parent-name="docs"
    />
    <section class="docs__sheet">
      <router-view class="docs__content" />
    </section>
    <nav class="docs__navigate">
      {{ prevRoute }}
      {{ nextRoute }}
    </nav>
  </div>
</template>

<script>
import { findNextRelativeRoute, findPrevRelativeRoute } from '~packages/vue-router-helpers/src/vue-router';
import DocsNavigation from '~layout/Navigation';

export default {
    name: 'DocsPage',
    components: {
        DocsNavigation
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        nextRoute() {
            return findNextRelativeRoute(this.$router, this.$route);
        },
        prevRoute() {
            return findPrevRelativeRoute(this.$router, this.$route);
        }
    }
};
</script>

<style scoped lang="scss">
.docs {
    --logo-size: 70px;

    width: var(--general-width);
    align-items: start;
    margin: 0 auto;
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    gap: $grid--xxlarge;
    margin-top: $grid--xxlarge;
    position: relative;

    &__navigation {
        position: sticky;
        top: $grid--large;
    }

    &__sheet {
        min-width: 0;
    }

    &__content {

    }
}
</style>
