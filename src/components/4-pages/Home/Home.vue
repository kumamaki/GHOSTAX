<template>
  <div class="home">
    <present>
      <content-holder class="home__contentHolder">
        <project-description class="home__description" />
      </content-holder>
    </present>
  </div>
</template>

<script>
import Present from '~layouts/Present/Present';
import ContentHolder from '~organisms/ContentHolder/ContentHolder';
import ProjectDescription from '~organisms/ProjectDescription/ProjectDescription';

export default {
  name: 'HomePage',
  components: {
    Present,
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
  background-color: $color-gray-100;
  height: 100vh;
  box: vertical;

  &__header {

  }

  &__contentHolder {
    flex-grow: 1;
    box: middle;
  }

  &__description {
  }

}
</style>
