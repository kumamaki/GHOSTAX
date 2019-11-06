<template>
  <nav class="navigation">
    <router-link :to="{name: 'home'}">
      <app-logo class="docsHeader__logo" />
    </router-link>
    <navigation-list
      class="navigation__list"
      :parent-name="parentName"
    />
  </nav>
</template>

<script>
import AppLogo from '~units/Logo';
import NavigationList from './List';

export default {
    name: 'NavigationMolecule',
    components: {
        AppLogo,
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
  display: grid;
  grid-template-rows: auto 1fr;
  gap: $grid--xlarge;

  &__logo {

  }

  &__list {
    display: grid;
    grid-template-rows: auto-fit;
    grid-row-gap: $grid--large;
  }
}
</style>
