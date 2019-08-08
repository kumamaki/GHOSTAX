<template>
  <main class="root">
    <presentor>
      <router-view />
    </presentor>
  </main>
</template>

<script>
import Presentor from '~layouts/Presentor/Presentor';

export default {
  name: 'RootPage',
  components: {
    Presentor
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.root {
  min-height: 100vh;
  box: vertical;
}
</style>
