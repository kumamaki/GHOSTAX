<template>
    <div class="icon">
        <svg-icon
            class="icon__itself"
            :name="name"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseIcon',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    created() {
        return import(/* webpackChunckName: "svgIcon" */`~icons/${this.name}`);
    }
};
</script>

<style scoped lang="scss">
.icon {

    &__itself {
        size: 100%;
    }
}
</style>
