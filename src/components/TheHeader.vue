<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="https://vuejs.org/images/logo.png"
        class="header__logoImage"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data() {
    return {};
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  &__logo {
    width: 100px;
    height: 100px;
  }
  &__logoImage {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
