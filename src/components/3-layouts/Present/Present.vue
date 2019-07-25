<template>
  <main class="present">
    <the-header class="present__header" />
    <div class="present__content">
      <slot />
    </div>
  </main>
</template>

<script>
import TheHeader from '~organisms/TheHeader/TheHeader';

export default {
  name: 'PresentLayout',
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
.present {
  box: vertical middle;

  &__header {
    margin: ms(3) 0;
  }

  &__content {

  }

}


</style>
