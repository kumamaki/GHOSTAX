<template>
  <div class="vueRouter">
    <h1>
      Vue Router Helpers
    </h1>
    <MdIntro />

    <h2>
      Installation
    </h2>
    <MdInstallation />

    <h2>
      Methods
    </h2>
    <MdMethods />
  </div>
</template>

<script>
import MdIntro from './introduction.md';
import MdInstallation from './installation.md';
import MdMethods from './methods.md';

export default {
  name: 'VueRouter',
  components: {
    MdIntro,
    MdInstallation,
    MdMethods
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.dropdown {
}
</style>
