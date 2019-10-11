<template>
  <header class="docsHeader">
    <router-link :to="{name: 'home'}">
      <app-logo class="docsHeader__logo" />
    </router-link>
  </header>
</template>

<script>
import AppLogo from '~molecules/Logo/Logo';

export default {
  name: 'DocsHeader',
  components: {
    AppLogo
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.docsHeader {

}
</style>
