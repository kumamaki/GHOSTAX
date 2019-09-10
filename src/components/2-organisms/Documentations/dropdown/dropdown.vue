/* eslint-disable */
<template>
  <div class="dropdown">
    <h1>
      Dropdown
    </h1>

    <MdIntro />

    <h2>
      Installation
    </h2>
    <MdInstallation />

    <h2>
      Demo
    </h2>
    <MdDemo />
    <dropdown-demo class="dropdown__demo" />

    <h2>
      Usage
    </h2>
    <MdUsage />

    <h2>
      API
    </h2>
    <MdAPI />

    <h2>
      Caveats
    </h2>
    <MdCaveats />
  </div>
</template>

<script>
import DropdownDemo from './DropdownDemo';
import MdIntro from './Intro.md';
import MdInstallation from './Installation.md';
import MdDemo from './Demo.md';
import MdUsage from './Usage.md';
import MdAPI from './API.md';
import MdCaveats from './Caveats.md';

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
    margin-top: $grid--medium;
  }
}
</style>
