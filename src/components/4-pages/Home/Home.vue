<template>
  <div class="home">
    <content-holder class="home__contentHolder">
      <project-description class="home__description" />
      <base-button
        :to="{
          name: 'docs'
        }"
        class="home__docsLink"
        icon="glasses"
      >
        Check out the docs!
      </base-button>
    </content-holder>
  </div>
</template>

<script>
import ContentHolder from '~organisms/ContentHolder/ContentHolder';
import ProjectDescription from '~organisms/ProjectDescription/ProjectDescription';

export default {
  name: 'HomePage',
  components: {
    ContentHolder,
    ProjectDescription
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.home {
  &__header {

  }

  &__contentHolder {
    flex-grow: 1;
    box: vertical center;
  }

  &__description {
  }

  &__docsLink {
    margin-top: ms(3);
  }

}
</style>
