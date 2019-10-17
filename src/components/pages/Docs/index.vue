<template>
  <div class="docs">
    <docs-navigation
      class="docs__navigation"
      parent-name="docs"
    />
    <section class="docs__sheet">
      <router-view class="docs__content" />
    </section>
  </div>
</template>

<script>
import DocsNavigation from '~layout/Navigation';

export default {
  name: 'DocsPage',
  components: {
    DocsNavigation
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
  align-items: start;
  margin: 0 auto;
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: $grid--xxlarge;
  margin-top: $grid--xxlarge;
  position: relative;

  &__navigation {
    position: sticky;
    top: $grid--large;
  }

  &__sheet {

  }

  &__content {

  }
}
</style>
