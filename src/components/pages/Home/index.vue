<template>
  <div class="home">
    <home-content class="home__content" />
    <home-hero class="home__hero" />
  </div>
</template>

<script>
import HomeHero from './Hero';
import HomeContent from './Content';

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeContent
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__content {

  }

  &__hero {

  }
}
</style>
