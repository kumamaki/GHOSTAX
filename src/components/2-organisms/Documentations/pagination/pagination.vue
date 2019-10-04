<template>
  <div class="pagination">
    <h1>
      Pagination
    </h1>

    <MdIntro />
    <MdInstallation />
    <MdUsage />
    <MdDemo />
    <pagination-demo class="pagination__demo" />
    <MdApi />
  </div>
</template>

<script>
import MdIntro from './Introduction.md';
import MdInstallation from './Installation.md';
import MdUsage from './Usage.md';
import MdDemo from './Demo.md';
import PaginationDemo from './Demo';
import MdApi from './Api.md';

export default {
  name: 'VueRouter',
  components: {
    MdIntro,
    MdInstallation,
    MdUsage,
    MdDemo,
    PaginationDemo,
    MdApi
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.pagination {

  &__demo {
    width: 100%;
    margin-top: ms(2);
    padding: ms(1);
    box: horizontal center middle;
    border-radius: 5px;
    background-color: $color-danger-100;
  }
}
</style>
