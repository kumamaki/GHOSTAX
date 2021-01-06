<template>
    <button
        :class="[
            'rounded-full px-3 py-1-5 font-primary text-lg focus:outline-none focus:shadow-focus', {
                'bg-grayscale-100 text-grayscale-800': variant === 'primary',
                'border-solid border-2 border-grayscale-100 text-grayscale-100': variant === 'ghost',
            }
        ]"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        variant: {
            type: String,
            required: true,
            validator(value) {
                return ['primary', 'ghost'].includes(value);
            }
        }
    },
    setup(props, context) {
        return {
        };
    }
};
</script>