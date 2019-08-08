<template>
  <main class="presentor">
    <the-header
      :collapse="$router.currentRoute.name !== 'home'"
      class="presentor__header"
    />
    <div class="presentor__content">
      <slot />
    </div>
  </main>
</template>

<script>
import TheHeader from '~organisms/TheHeader/TheHeader';

export default {
  name: 'PresentorLayout',
  components: {
    TheHeader
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.presentor {
  box: vertical middle;

  &__header {
    margin-top: $grid--huge;
  }

  &__content {
    margin: $grid--huge 0;
  }

}


</style>
