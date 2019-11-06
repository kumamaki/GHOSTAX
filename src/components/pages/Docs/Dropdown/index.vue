/* eslint-disable */
<template>
  <div class="dropdown">
    <MdIntro />
    <MdInstallation />
    <MdDemo />
    <dropdown-demo class="dropdown__demo" />
    <MdUsage />
    <MdAPI />
    <MdCaveats />
  </div>
</template>

<script>
import DropdownDemo from './Demo';
import MdIntro from '~docs/Dropdown/Intro.md';
import MdInstallation from '~docs/Dropdown/Installation.md';
import MdDemo from '~docs/Dropdown/Demo.md';
import MdUsage from '~docs/Dropdown/Usage.md';
import MdAPI from '~docs/Dropdown/API.md';
import MdCaveats from '~docs/Dropdown/Caveats.md';

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
    margin-top: calc(#{$grid--medium} * -1);
  }
}
</style>
