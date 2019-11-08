<template>
    <section
        class="sheet"
    >
        <div
            class="sheet__inner"
        >
            <h1>
                {{ title }}
            </h1>
            <slot />
        </div>
    </section>
</template>

<script>
import 'highlightjs/styles/atom-one-light.css';

export default {
    name: 'Sheet',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {};
    }

};
</script>

<style scoped lang="scss">
.sheet {
  --inner-gap: #{$grid--large};

  display: grid;
  grid-template-columns: auto;
  border-radius: 5px;
  padding: var(--inner-gap);
  background-color: #FFFFFF;
  box-shadow: 0 0 100px rgba(0, 0, 0, .05);
  color: gray(40);
  line-height: 1.618;

  &__inner {
    padding-right: $grid--large;
  }

  ::v-deep {

    section {
      margin: $grid--xxxlarge 0;
    }

    h2,
    h3,
    h4 {
      color: $color-secondary-darken;
      margin-bottom: $grid;
      margin-top: $grid--large;

      &::before {
        content: '#';
        color: currentColor;
        margin-right: .25em;
      }
    }

    h1 {
      font-size: ms(3);
      color: $color-primary-500;
      font-weight: 900;
      margin-bottom: var(--inner-gap);
    }

    h2 {
      font-size: ms(2);
      font-weight: 600;
      color: $color-primary-base;
    }

    h3 {
      font-size: ms(1);
      font-weight: 600;
    }

    h4 {
      font-size: ms(0);
      font-weight: 700;
    }

    pre {
      margin: 0;
      margin: $grid--normal 0;
      font-size: .85em;
      border-radius: 15px;
      padding: $grid--normal;
    }

    p code,
    h2 code,
    h3 code,
    h4 code {
      border-radius: 5px;
      padding: 0 .25em;
      background-color: $color-secondary-bright;
      font-size: .9em;
    }

    table {
      margin: $grid--normal 0;
      font-size: .9em;
      width: 100%;

      thead {

        th {
          padding: .5em;
          text-align: left;
          color: gray(30);
          font-weight: 600;
        }
      }

      tbody {

        tr {
          border-bottom: 1px solid gray(95);
        }

        td {
          padding: .5em;

          &:first-child {
            color: $color-primary-darken;
          }
        }
      }
    }

    .vuebar-element {
      height: 250px;
      width: 100%;
      max-width: 500px;
      background: #DFE9FE;
    }

    .vb > .vb-dragger {
      z-index: 5;
      width: 12px;
      right: 0;
    }

    .vb > .vb-dragger > .vb-dragger-styler {
      backface-visibility: hidden;
      transform: rotate3d(0, 0, 0, 0);
      transition: background-color 100ms ease-out, margin 100ms ease-out, height 100ms ease-out;
      background-color: rgba(48, 121, 244, .1);
      margin: 5px 5px 5px 0;
      border-radius: 20px;
      height: calc(100% - 10px);
      display: block;
    }

    .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
      background-color: rgba(48, 121, 244, .3);
    }

    .vb > .vb-dragger:hover > .vb-dragger-styler {
      background-color: rgba(48, 121, 244, .5);
      margin: 0;
      height: 100%;
    }

    .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
      background-color: rgba(48, 121, 244, .5);
      margin: 0;
      height: 100%;
    }

    .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
      background-color: rgba(48, 121, 244, .5);
    }
  }
}
</style>

<style lang="scss">
code[class*='language-'],
pre[class*='language-'] {
  font-family: $mono-typeface;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background-color: #F6F8FF;
  padding: 0;
}
</style>
