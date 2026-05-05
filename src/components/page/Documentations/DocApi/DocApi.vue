<template>
    <article v-bind="$attrs" class="DocApi border-grayscale-600 rounded-xl shadow-normal border-2 border-solid">
        <div class="p-2">
            <header class="flex items-center">
                <h1 class="mr-1 text-base font-bold">
                    <code>{{ name }}</code>
                </h1>
                <span class="py-0-5 bg-primary-lighter text-grayscale-700 px-1 mr-1 text-xs rounded">
                    {{ type }}
                </span>
                <span class="py-0-5 bg-primary-lighter text-grayscale-700 px-1 mr-1 text-xs rounded">
                    {{ $slots.defaultValue ? 'Optional' : 'Required' }}
                </span>
            </header>
            <p v-if="$slots.description" class="leading-comfortable mt-2 mb-1 text-sm">
                <slot name="description" />
            </p>
        </div>
        <hr v-if="$slots.defaultValue" class="bg-grayscale-600 w-full">
        <div v-if="$slots.defaultValue" class="flex flex-col p-2">
            <span class="text-primary-lighter text-sm font-bold">Default value</span>
            <code class="DocCode mt-1">
                <slot name="defaultValue" />
            </code>
        </div>
        <hr v-if="examples.length" class="bg-grayscale-600 w-full">
        <div v-if="examples.length" class="p-2">
            <div
                v-for="(example, exampleIndex) in examples" :key="exampleIndex"
                class="flex flex-col mb-2"
            >
                <span class="text-grayscale-500 mb-1 text-sm font-bold">Example #{{ exampleIndex + 1 }}</span>
                <pre><code class="DocCode">{{ example }}</code></pre>
            </div>
        </div>
        <div v-if="$slots.default" class="p-2">
            <slot />
        </div>
    </article>
</template>

<script>
export default {
    name: 'DocApi',
    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        examples: {
            type: Array,
            default() { return [] }
        }
    },
    setup(props, context) {
        return {
        };
    }
};
</script>

<style scoped lang="postcss">
:slotted(pre) {
    background-color: transparent;
    @apply text-sm p-0 font-bold;
    overflow: auto;
}
</style>