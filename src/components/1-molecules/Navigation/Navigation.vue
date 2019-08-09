<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="child in children"
        :key="child.name"
        class="navigation__item"
      >
        {{ normalizeName(child.name) }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMolecule',
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
    children() {
      return this.$route.matched.filter((route) => {
        if (route.name) {
          return route.name.includes(`${this.parentName}-`);
        }
        return false;
      });
    }
  },
  methods: {
    normalizeName(name) {
      return name.replace(`${this.parentName}-`, '');
    }
  }
};
</script>

<style scoped lang="scss">
.navigation {

  &__list {

  }

  &__item {
    text-transform: capitalize;
  }

}
</style>
