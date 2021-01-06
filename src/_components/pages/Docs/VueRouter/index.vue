<template>
    <article>
        <MdIntro />
        <MdInstallation />
        <MdMethods />
    </article>
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
