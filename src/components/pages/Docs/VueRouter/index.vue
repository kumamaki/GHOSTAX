<template>
  <div class="vueRouter">
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
import MdIntro from '~docs/VueRouter/introduction.md';
import MdInstallation from '~docs/VueRouter/installation.md';
import MdMethods from '~docs/VueRouter/methods.md';

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
