<template>
  <section class="content">
    <header class="content__header">
      <ghostax-logo class="content__logo" />
      <div class="content__texts">
        <h1 class="content__title">
          GHOSTAX
        </h1>
        <h2 class="content__description">
          abstracts the logic!
        </h2>
      </div>
    </header>
    <article class="content__sheet">
      <p>
        GHOSTAX is a renderless
        <a
          href="https://vuejs.org/"
          class="vue"
          target="_blank"
        >
          <svg-icon name="vue" />
          vue
        </a>
        framework that doesn’t render any DOM from itself.
        <i>
          like a free ghost.
        </i>
      </p>
      <p>
        You can use renderless components to forget about the logic complexity, and write your very own DOM and CSS.
      </p>
    </article>
    <base-button
      :to="{
        name: 'docs'
      }"
      class="content__cta"
      icon="glasses"
    >
      Check out docs!
    </base-button>
  </section>
</template>

<script>
import GhostaxLogo from '~atoms/Ghostax';

export default {
  name: 'HomeContent',
  components: {
    GhostaxLogo
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.content {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  align-items: center;
  width: 450px;
  align-self: center;
  justify-self: center;

  &__header {
    display: grid;
    grid-template-columns: [logo-start] 100px [logo-end text-start] auto [text-end];
    grid-column-gap: $grid--normal;
    align-items: center;
  }

  &__logo {
    size: 100px;
  }

  &__texts {
    box: vertical;
  }

  &__title {
    font-size: ms(5);
    font-weight: 600;
    color: #26215D;
    line-height: 1;
  }

  &__description {
    font-family: 'operator mono lig book';
    font-size: ms(1);
    font-style: italic;
    color: $color-primary-500;
    font-weight: 600;
  }

  &__sheet {
    padding: $grid--medium;
    margin-top: $grid--medium;
    ::v-deep {
      a {
        text-decoration: underline;
        color: $color-primary-700;
        &.vue {
          padding: .15rem .5rem;
          font-size: 0.9em;
          background-color: $blue-white;
          border-radius: 3px;
          margin: 0 0.5rem;
          text-decoration: none;
          color: currentColor;
          path:nth-child(1) {
            fill: #41b883;
          }
          path:nth-child(2) {
            fill: #35495e;
          }
        }
      }
    }
  }

  &__cta {
    justify-self: start;
    margin-left: $grid--medium;
  }
}
</style>
