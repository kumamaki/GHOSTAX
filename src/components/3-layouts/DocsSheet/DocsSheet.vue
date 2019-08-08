<template>
  <section class="docs">
    <app-navigation class="docs__navigatinon" />
    <router-view class="docs__content" />
  </section>
</template>

<script>
import AppNavigation from '~molecules/Navigation/Navigation';

export default {
  name: 'DocsSheetLayout',
  components: {
    AppNavigation
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
  grid-template-columns: 12.5rem auto;
  grid-column-gap: $grid--xlarge;

  &__navigatinon {
  }

  &__content {
    padding-left: $grid--xxlarge;
  }

  &__sectionManager {
  }
}
</style>
