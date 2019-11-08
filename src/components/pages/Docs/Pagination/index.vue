<template>
    <div class="pagination">
        <MdIntro />
        <MdTOC />
        <MdInstallation />
        <MdUsage />
        <MdDemo />
        <pagination-demo class="pagination__demo" />
        <MdAPI />
    </div>
</template>

<script>
import MdIntro from '~docs/Pagination/Introduction.md';
import MdInstallation from '~docs/Pagination/Installation.md';
import MdUsage from '~docs/Pagination/Usage.md';
import MdDemo from '~docs/Pagination/Demo.md';
import PaginationDemo from './Demo';
import MdAPI from '~docs/Pagination/API.md';
import MdTOC from '~docs/Pagination/TOC.md';

export default {
    name: 'VueRouter',
    components: {
        MdIntro,
        MdInstallation,
        MdUsage,
        MdDemo,
        PaginationDemo,
        MdAPI,
        MdTOC
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
        background-color: gray(96);
    }
}
</style>
