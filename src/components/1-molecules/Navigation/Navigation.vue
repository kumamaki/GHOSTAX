<template>
  <nav class="navigation">
    <navigation-list
      class="navigation__list"
      :parent-name="parentName"
    />
  </nav>
</template>

<script>
import NavigationList from './NavigationList';

export default {
  name: 'NavigationMolecule',
  components: {
    NavigationList
  },
  props: {
    parentName: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
  }

};
</script>

<style scoped lang="scss">
.navigation {

  &__list {
    display: grid;
    grid-template-rows: auto-fit;
    grid-row-gap: $grid--large;
  }

  &__item {
    text-transform: capitalize;
  }
}
</style>
