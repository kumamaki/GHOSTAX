<template>
  <header class="header">
    <div class="header__logoHolder">
      <svg-icon
        class="header__logoIcon"
        name="ghost"
      />
    </div>
    <h1 class="header__title">
      Ghostr
    </h1>
    <h2 class="header__description">
      abstracts the logic!
    </h2>
  </header>
</template>

<script>
export default {
  name: 'HeaderOrganism',
  components: {
  }
};
</script>

<style scoped lang="scss">
.header {
  box: vertical center;
  padding-top: ms(3);
  position: relative;
  align-self: center;

  &__logoHolder {
    box: center middle;
  }

  &__logoIcon {
    transform: rotateZ(15deg);
    size: 90px;
    color: $color-primary-500;
  }

  &__title {
    font-size: ms(2);
    color: $color-primary-900;
    font-family: "Londrina Solid";
    color: $color-primary-500;
    margin-top: 0.5rem;
  }

  &__description {
    box: middle center;
    font-size: ms(1);
    font-weight: 600;
    font-style: italic;
    margin-top: .5rem;
    color: $color-gray-700;
    position: relative;
    &:before, &:after {
      content: '';
      background-color: currentColor;
      margin: 0 .75rem;
      height: 3px;
      width: 1.5rem;
    }
  }
}


</style>
