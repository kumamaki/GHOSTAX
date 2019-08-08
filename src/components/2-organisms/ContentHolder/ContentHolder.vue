<template>
  <article class="contentHolder">
    <div class="contentHolder__content">
      <markdown-parser class="contentHolder__parser">
        <slot />
      </markdown-parser>
    </div>
    <section-manager class="docs__sectionManager" />
  </article>
</template>

<script>
import MarkdownParser from 'vue-markdown';
import SectionManager from '~molecules/SectionManager/SectionManager';

export default {
  name: 'ContentHolderOrganism',
  components: {
    MarkdownParser,
    SectionManager
  },
  props: {}
};
</script>

<style scoped lang="scss">
.contentHolder {
  display: grid;
  grid-template-columns: auto 100px;
  background-color: red;
  border-radius: 5px;
  padding: $grid--medium;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.05);

  &__content {

  }

  &__parser {
    ::v-deep {
      h1 {
        font-size: ms(3);
      }
      h2 {
        font-size: ms(2);
      }
      h3 {
        font-size: ms(1);
      }
    }
  }

  &__sectionManager {

  }
}
</style>
