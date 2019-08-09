<template>
  <section class="docs">
    <docs-navigation
      class="docs__navigatinon"
      parent-name="docs"
    />
    <router-view class="docs__content" />
  </section>
</template>

<script>
import DocsNavigation from '~molecules/Navigation/Navigation';

export default {
  name: 'DocsSheetLayout',
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
  display: grid;
  grid-template-columns: calc(#{$grid * 25}) auto;
  grid-column-gap: $grid--xlarge;

  &__navigatinon {
  }

  &__content {
    padding-left: $grid--xxlarge;
  }
}
</style>
