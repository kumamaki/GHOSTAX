<template>
  <main class="root">
    <router-view />
  </main>
</template>

<script>
export default {
    name: 'RootPage',
    props: {},
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.root {
  min-height: 100vh;
  margin: 0 auto;
  box: vertical;
}
</style>
