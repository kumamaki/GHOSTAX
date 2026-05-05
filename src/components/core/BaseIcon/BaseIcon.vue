<template>
    <svg
        aria-hidden="true"
        width="24" height="24"
    >
        <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'BaseIcon',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const symbolId = computed(() => { return `#icon-${props.name}`; });
        return { symbolId };
    }
});
</script>
