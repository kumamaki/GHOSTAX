<template>
    <div class="segmented-input">
        <MdIntro />
        <MdInstallation />
        <MdUsage />
        <MdDemo />
        <segmented-input-demo class="segmented-input__demo" />
        <MdAPI />
    </div>
</template>

<script>
import MdIntro from '~docs/SegmentedInput/01-Introduction.md';
import MdInstallation from '~docs/SegmentedInput/02-Installation.md';
import MdDemo from '~docs/SegmentedInput/03-Demo.md';
import MdUsage from '~docs/SegmentedInput/04-Usage.md';
import MdAPI from '~docs/SegmentedInput/05-API.md';
import SegmentedInputDemo from './Demo';

export default {
    name: 'VueRouter',
    components: {
        MdIntro,
        MdInstallation,
        MdUsage,
        MdDemo,
        SegmentedInputDemo,
        MdAPI
    },
    props: {},
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.segmented-input {

    &__demo {
        width: 100%;
        margin: $grid--medium 0;
        padding: $grid--large;
        background-color: white;
        margin-top: calc(#{$grid--large} * -1);
        border-radius: 0 0 5px 5px;
    }
}
</style>
