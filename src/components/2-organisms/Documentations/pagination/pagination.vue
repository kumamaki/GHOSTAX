<template>
  <div class="pagination">
    <h1>
      Pagination
    </h1>

    <MdIntro />
    <MdInstallation />
    <MdUsage />
    <MdDemo />
  </div>
</template>

<script>
import MdIntro from './Introduction.md';
import MdInstallation from './Installation.md';
import MdUsage from './Usage.md';
import MdDemo from './Demo.md';

export default {
  name: 'VueRouter',
  components: {
    MdIntro,
    MdInstallation,
    MdUsage,
    MdDemo
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
