<template>
  <div id="app">
    <main class="root">
      <router-view />
    </main>
  </div>
</template>

<script>
import '~icons';

export default {
  name: 'App'
};
</script>

<style scoped lang="scss">
.root {
  width: var(--general-width);
  margin: 0 auto;
  min-height: 100vh;
}
</style>
