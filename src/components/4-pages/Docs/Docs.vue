<template>
  <div class="docs">
    <docs-sheet class="docs__sheet" />
  </div>
</template>

<script>
import DocsSheet from '~layouts/DocsSheet/DocsSheet';

export default {
  name: 'DocsPage',
  components: {
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
}
</style>
