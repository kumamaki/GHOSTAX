<template>
  <div class="orchester">
    <sheet
      class="docsContent"
      :title="$route.meta.title"
    >
      <component
        :is="documentationFile"
        v-if="documentationFile"
      />
    </sheet>
  </div>
</template>

<script>
import Sheet from '~units/Sheet';

export default {
  name: 'DocsOrchester',
  components: {
    Sheet
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    documentationFile() {
      const { docName } = this.$route.meta;
      return () => {
        return import(`./${docName}/index.vue`);
      };
    }
  }
};
</script>

<style scoped lang="scss">
.componentName {

}
</style>
