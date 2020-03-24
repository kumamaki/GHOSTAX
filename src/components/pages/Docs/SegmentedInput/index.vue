<template>
    <article>
        <MdIntro />
        <MdInstallation />
        <MdUsage />
        <MdDemo />
        <MdAPI />
    </article>
</template>

<script>
import MdIntro from '~docs/SegmentedInput/01-Introduction.md';
import MdInstallation from '~docs/SegmentedInput/02-Installation.md';
import MdDemo from '~docs/SegmentedInput/03-Demo.md';
import MdUsage from '~docs/SegmentedInput/04-Usage.md';
import MdAPI from '~docs/SegmentedInput/05-API.md';

export default {
    name: 'VueRouter',
    components: {
        MdIntro,
        MdInstallation,
        MdUsage,
        MdDemo,
        MdAPI
    },
    props: {},
    data() {
        return {};
    }
};
</script>
