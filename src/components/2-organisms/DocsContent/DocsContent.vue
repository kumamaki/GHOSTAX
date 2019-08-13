<template>
  <content-holder
    class="docsContent"
    :doc-name="$route.meta.docName"
  >
    <component :is="documentationFile" />
  </content-holder>
</template>

<script>
import ContentHolder from '~organisms/ContentHolder/ContentHolder';

export default {
  name: 'DocsContent',
  components: {
    ContentHolder
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    documentationFile() {
      const { docName } = this.$route.meta;
      return () => { return import(`~organisms/Documentations/${docName}/${docName}`); };
    }
  }
};
</script>

<style scoped lang="scss">
.docsContent {

  ::v-deep {

    h1 {

    }
  }
}
</style>
