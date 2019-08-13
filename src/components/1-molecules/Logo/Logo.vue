<template>
  <div class="logo">
    <ghostax class="logo__image" />
    <div class="logo__texts">
      <h1 class="logo__name">
        GHOSTAX
      </h1>
      <h2 class="logo__slogan">
        abstracts the logic!
      </h2>
    </div>
  </div>
</template>

<script>
import Ghostax from '~atoms/Ghostax';

export default {
  name: 'Logo',
  components: {
    Ghostax
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.logo {
  display: grid;
  grid-template-columns: [logo-start] var(--logo-size) [logo-end text-start] auto [text-end];
  grid-column-gap: $grid--normal;
  align-items: center;

  &__image {
    size: var(--logo-size);
  }

  &__texts {
    box: vertical;
  }

  &__name {
    font-size: ms(1);
    font-weight: 600;
    color: #26215D;
    line-height: 1;
  }

  &__slogan {
    font-family: 'operator mono lig book';
    font-size: ms(0);
    font-style: italic;
    color: $color-primary-500;
    font-weight: 600;
  }
}
</style>
