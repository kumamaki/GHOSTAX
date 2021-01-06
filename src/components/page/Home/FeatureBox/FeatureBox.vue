<template>
    <div class="bg-grayscale-500 text-grayscale-100 shadow-featureBox rounded-xl flex flex-col items-center justify-center p-4">
        <div class="text-primary-light w-12 h-12">
            <slot name="icon" />
        </div>
        <div class="font-title mt-2 text-2xl font-light text-center">
            <slot name="label" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureBox',
    props: {
    },
    setup(props, context) {
        return {
        };
    }
};
</script>