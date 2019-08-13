<template>
  <header class="docsHeader">
    <app-logo class="docsHeader__logo" />
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
