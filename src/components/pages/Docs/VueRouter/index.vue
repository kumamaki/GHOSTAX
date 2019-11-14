<template>
    <div class="vueRouter">
        <MdIntro />
        <MdInstallation />
        <MdMethods />
    </div>
</template>

<script>
import MdIntro from '~docs/VueRouter/01-Introduction.md';
import MdInstallation from '~docs/VueRouter/02-Installation.md';
import MdMethods from '~docs/VueRouter/03-Methods.md';

export default {
    name: 'VueRouter',
    components: {
        MdIntro,
        MdInstallation,
        MdMethods
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
