/* eslint-disable */
<template>
  <div class="promiseObserver">
    <h1>
      Promise Observer
    </h1>

    <MdIntro />
    <MdInstallation />
    <MdUsage />
    <MdApi />
  </div>
</template>

<script>
import MdIntro from './Intro.md';
import MdInstallation from './Installation.md';
import MdUsage from './Usage.md';
import MdApi from './Api.md';

export default {
  name: 'PromiseObserver',
  components: {
    MdIntro,
    MdInstallation,
    MdUsage,
    MdApi
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.promiseObserver {
}
</style>
