/* eslint-disable */
<template>
    <div class="dropdown">
        <MdIntro />
        <MdInstallation />
        <MdDemo>
        </MdDemo>
        <dropdown-demo class="dropdown__demo" />
        <MdUsage />
        <MdAPI />
        <MdCaveats />
    </div>
</template>

<script>
import DropdownDemo from './Demo';
import MdIntro from '~docs/Dropdown/01-Introduction.md';
import MdInstallation from '~docs/Dropdown/02-Installation.md';
import MdDemo from '~docs/Dropdown/03-Demo.md';
import MdUsage from '~docs/Dropdown/04-Usage.md';
import MdAPI from '~docs/Dropdown/05-API.md';
import MdCaveats from '~docs/Dropdown/06-Caveats.md';

export default {
    name: 'Dropdown',
    components: {
        MdIntro,
        MdInstallation,
        MdDemo,
        DropdownDemo,
        MdUsage,
        MdAPI,
        MdCaveats
    },
    props: {},
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.dropdown {

    &__demo {
        margin: $grid--medium 0;
        padding: $grid--large;
        background-color: gray(30);
        margin-top: calc(#{$grid--large} * -1);
        border-radius: 0 0 5px 5px;
        border-top: 3px solid gray(20);
    }
}
</style>
