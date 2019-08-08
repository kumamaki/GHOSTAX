<template>
  <header
    :class="{
      'header--isCollapsed': collapse
    }"
    class="header"
  >
    <div class="header__logoHolder">
      <svg-icon
        :class="{
          'header__logoIcon--isCollapsed': collapse
        }"
        class="header__logoIcon"
        name="ghost"
      />
    </div>
    <div
      :class="{
        'header__textsHolder--isCollapsed': collapse
      }"
      class="header__textsHolder"
    >
      <h1
        :class="{
          'header__title--isCollapsed': collapse
        }"
        class="header__title"
      >
        Ghostr
      </h1>
      <h2
        :class="{
          'header__description--isCollapsed': collapse
        }"
        class="header__description"
      >
        abstracts the logic!
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderOrganism',
  components: {
  },
  props: {
    collapse: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  box: vertical center;
  position: relative;
  align-self: center;
  &--isCollapsed {
    box: horizontal middle;
  }

  &__logoHolder {
    box: center middle;
    &--isCollapsed {
    }
  }

  &__logoIcon {
    transform: rotateZ(15deg);
    size: 90px;
    color: $color-primary-500;
    &--isCollapsed {
      box: horizontal middle;
      size: 50px;
    }
  }

  &__textsHolder {
      box: vertical center;
      &--isCollapsed {
        align-items: flex-start;
        margin-left: $grid;
      }
  }

  &__title {
    font-size: ms(2);
    color: $color-primary-900;
    font-family: "Londrina Solid";
    color: $color-primary-500;
    margin-top: 0.5rem;
    &--isCollapsed {
      margin-top: 0;
      font-size: ms(1);
      line-height: 1;
    }
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
    &--isCollapsed {
      margin-top: 0;
      font-size: ms(-1);
      &:before, &:after {
        display: none;
      }
    }
  }
}


</style>
