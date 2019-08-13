<template>
  <section
    class="contentHolder"
  >
    <div
      v-bar="{
        preventParentScroll: true,
        scrollThrottle: 30,
      }"
      class="contentHolder__inner"
    >
      <div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContentHolder',
  props: {
    docName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      markdown: ''
    };
  }

};
</script>

<style scoped lang="scss">
.contentHolder {
  --inner-gap: #{$grid--large};

  display: grid;
  grid-template-columns: auto 100px;
  border-radius: 5px;
  padding: var(--inner-gap);
  background-color: #FFFFFF;
  box-shadow: 0 0 100px rgba(0, 0, 0, .05);
  color: $color-gray-800;
  line-height: 1.618;

  ::v-deep {

    h1 {
      font-size: ms(3);
      color: $color-primary-500;
      font-weight: 900;
      margin-bottom: var(--inner-gap);
    }

    h2 {
      font-size: ms(2);
      margin-bottom: $grid--normal;
    }

    h3 {
      font-size: ms(1);
      margin-bottom: $grid--normal;
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
