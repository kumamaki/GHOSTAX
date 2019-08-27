/* eslint-disable */
<template>
  <div class="dropdown">
    <h1>
      Dropdown
    </h1>
    <h2>
      Installation
    </h2>
    <prism language="bash">
      npm i @ghostax/dropdown
      // or
      yarn add @ghostax/dropdown
    </prism>
    <br />
    <h2>
      Demo
    </h2>
    <div class="demo">
      <dropdown-demo />
    </div>
    <br />
    <h2>
      Usage
    </h2>
    <pre><prism language="javascript">
      import { Dropdownue, DropdownueItem } from "@ghostax/dropdown";

      export default {
        ...
        components: {
          Dropdownue,
          DropdownueItem
        }
        ...
      };
    </prism></pre>
  </div>
</template>

<script>
import Prism from 'vue-prism-component';
import 'prismjs/components/prism-bash';
import DropdownDemo from './DropdownDemo';

export default {
  name: 'Dropdown',
  components: {
    Prism,
    DropdownDemo
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.dropdown {

}
</style>
