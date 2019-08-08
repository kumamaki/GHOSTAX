<template>
  <div class="projectDescription">
    <p>
      <span>
        <span class="brand">
          Ghostr
        </span>
        is a <i>renderless</i>
        <a
          href="https://vuejs.org/"
          class="vue"
        >
          <svg-icon name="vue" />
          vue
        </a>
        framework.
      </span>
      <br />
      <a
        href="https://adamwathan.me/renderless-components-in-vuejs/"
        target="_blank"
      >
        What is vue renderless?
      </a>
      <br />
      Well, vue has a concept called "scoped slots".
      It actually gives you the ablity to abstract the logic to another file,
      <br />
      and use the provided variables and functions inside your component.
      This seems to be one of the best and most powerfull features of vue.
    </p>

    <p>
      There are already many many UI frameworks for vue. and the problem with them is - you gussed it - they add their own highly opinionated interface.
      and then, any sort of effort for changin the styles to match the look you need to be, leads to an awful and ugly CSS.
      of course they are handy when you want prototype, or you don't even care about the interface. but what if you want your custom style?
      which you should want! what if you work in a team that has a UI/UX department?
      <br />
      The point is <b>You can use <i>renderless</i> components to forget about the complexity, and write your very own DOM and CSS.</b>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProjectDescriptionOrganism',
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.projectDescription {
  padding: ms(2);
  color: $color-gray-700;
  width: 500px;

  .brand {
    font-family: 'Londrina Solid';
    font-size: 1.1em;
  }

  a {
    text-decoration: underline;
    color: $color-primary-700;
    &.vue {
      padding: .15rem .5rem;
      font-size: 0.9em;
      background-color: $blue-white;
      border-radius: 3px;
      margin: 0 0.5rem;
      font-weight: bold;
      text-decoration: none;
      color: currentColor;
      ::v-deep path:nth-child(1) {
        fill: #41b883;
      }
      ::v-deep path:nth-child(2) {
        fill: #35495e;
      }
    }
  }

  b {
    font-weight: 600;
    color: $color-primary-900;
  }

  p {
    margin-top:  1rem;
  }
}
</style>
