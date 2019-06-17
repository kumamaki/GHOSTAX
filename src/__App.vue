<template>
  <div id="app">
    <the-header />
  </div>
</template>

<script>
import './assets/styles/global.scss'
import './assets/styles/base.scss'

import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
    }
  }
};
</script>

<style scoped lang="scss">
</style>
