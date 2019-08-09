<template>
  <div class="home">
    <home-content class="home__content" />
    <home-hero class="home__hero" />
    <!-- <project-description class="home__description" /> -->
    <!-- <base-button
      :to="{
        name: 'docs'
      }"
      class="home__docsLink"
      icon="glasses"
    >
      Check out the docs!
    </base-button> -->
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
  width: 1920px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__content {

  }

  &__hero {

  }
}
</style>
