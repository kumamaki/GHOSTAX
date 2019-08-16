<template>
  <div class="docs">
    <docs-header class="docs__header" />
    <docs-sheet class="docs__sheet" />
  </div>
</template>

<script>
import DocsHeader from '~molecules/DocsHeader/DocsHeader';
import DocsSheet from '~layouts/DocsSheet/DocsSheet';

export default {
  name: 'DocsPage',
  components: {
    DocsHeader,
    DocsSheet
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.docs {
  width: var(--general-width);
  height: calc(100vh - #{$grid--xxlarge});
  margin: 0 auto;
  display: grid;
  grid-template-rows: var(--logo-size) calc(100vh - var(--logo-size) - (#{$grid--xxlarge} + #{$grid--xxlarge}));
  grid-row-gap: $grid--xxlarge;
  margin-top: $grid--xxlarge;

  &__header {
  }
}
</style>
