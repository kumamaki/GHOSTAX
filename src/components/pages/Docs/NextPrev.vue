<template>
  <nav class="nextPrev">
    <router-link
      v-if="prevRoute"
      class="nextPrev__link"
      :to="{name: prevRoute.name}"
    >
      <svg-icon
        name="arrow-left-circle-line"
        class="nextPrev__icon"
        :original="true"
      />
      <span class="nextPrev__text">
        {{ prevRoute.meta.title }}
      </span>
    </router-link>

    <router-link
      v-if="nextRoute"
      class="nextPrev__link"
      :to="{name: nextRoute.name}"
    >
      <span class="nextPrev__text">
        {{ nextRoute.meta.title }}
      </span>
      <svg-icon
        name="arrow-right-circle-line"
        class="nextPrev__icon"
        :original="true"
      />
    </router-link>
  </nav>
</template>

<script>
import '~icons/arrow-right-circle-line';
import '~icons/arrow-left-circle-line';
import { findNextAbsoluteRoute, findPrevAbsoluteRoute } from '~packages/vue-router-helpers/src/vue-router';

export default {
    name: 'DocNextPrev',
    props: {},
    data() {
        return {};
    },
    computed: {
        nextRoute() {
            return findNextAbsoluteRoute(this.$router, this.$route);
        },
        prevRoute() {
            return findPrevAbsoluteRoute(this.$router, this.$route);
        }
    }
};
</script>

<style scoped lang="scss">
.nextPrev {
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto;

    &__link {
        box: row center;
        color: gray(70);

        &:hover {
            color: $color-primary-darken;
        }
    }

    &__text {
        font-size: ms(1);
        margin: 0 $grid;
        transition: color .15s;
    }

    &__icon {
        size: ms(2);
    }
}
</style>
