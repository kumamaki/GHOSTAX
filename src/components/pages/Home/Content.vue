<template>
  <section class="content">
    <header class="content__header">
      <app-logo
        :omit-logo="true"
        :mask="true"
        class="content__logo"
        size="big"
      />
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
import AppLogo from '~units/Logo';

export default {
    name: 'HomeContent',
    components: {
        AppLogo
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
    size: 100%;
  }

  &__logo {
    size: 100%;
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
    font-family: $mono-typeface;
    font-size: ms(1);
    font-style: italic;
    color: $color-primary-500;
    font-weight: 600;
  }

  &__sheet {
    padding: $grid--medium 0;
    margin-top: $grid--medium;
    line-height: 1.618;

    ::v-deep {

      a {
        text-decoration: underline;
        color: $color-primary-700;

        &.vue {
          padding: .15rem .5rem;
          font-size: .9em;
          background-color: $blue-white;
          border-radius: 3px;
          margin: 0 .5rem;
          text-decoration: none;
          color: currentColor;

          path:nth-child(1) {
            fill: #41B883;
          }

          path:nth-child(2) {
            fill: #35495E;
          }
        }
      }
    }
  }

  &__cta {
    justify-self: start;
  }
}
</style>
