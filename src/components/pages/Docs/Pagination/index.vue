<template>
    <div class="pagination">
        <MdIntro />
        <MdInstallation />
        <MdUsage />
        <MdDemo />
        <pagination-demo class="pagination__demo" />
        <MdAPI />
    </div>
</template>

<script>
import MdIntro from '~docs/Pagination/01-Introduction.md';
import MdInstallation from '~docs/Pagination/02-Installation.md';
import MdDemo from '~docs/Pagination/03-Demo.md';
import MdUsage from '~docs/Pagination/04-Usage.md';
import MdAPI from '~docs/Pagination/05-API.md';
import PaginationDemo from './Demo';

export default {
    name: 'VueRouter',
    components: {
        MdIntro,
        MdInstallation,
        MdUsage,
        MdDemo,
        PaginationDemo,
        MdAPI
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
    }
}
</style>
