<template>
  <section class="docsSheet">
    <docs-navigation
      class="docsSheet__navigatinon"
      parent-name="docs"
    />
    <router-view class="docsSheet__content" />
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
.docsSheet {
  display: grid;
  grid-template-columns: calc(#{$grid * 25}) auto;
  grid-column-gap: $grid--xlarge;

  &__navigatinon {
  }

  &__content {
    min-height: 0;
  }
}
</style>
