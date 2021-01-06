<template>
    <section class="demo">
        <slot />
    </section>
</template>

<script>
export default {
    name: 'Demo',
    props: {},
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.demo {
    box: middle center;
    margin: $grid--medium 0;
    padding: $grid--large;
    border-radius: 20px;
    z-index: g-index('mountain');
}
</style>
