## Demo

This is what you can get from `GhSegmentedInput` with minimum of logic, and your own template and styles. Very easy!

::: SFC
<template>
    <demo>
        <gh-segmented-input
            #default="{codes, events}"
            class="segmentedInput"
            :fields-count="5"
        >
            <input
                v-for="(field, index) in 5"
                :key="index"
                class="segmentedInput__field"
                :value="codes[index].value"
                @keydown="events.keydown($event, index)"
            />
        </gh-segmented-input>
    </demo>
</template>

<script>
import Demo from '~pages/Docs/Demo';
import GhSegmentedInput from '~packages/segmented-input/src/segmented-input.js';
import '~icons/arrow-right-s-line';
import '~icons/arrow-left-s-line';
import '~icons/skip-back-mini-line';
import '~icons/skip-forward-mini-line';

export default {
    name: 'SegmentedInput',
    components: {
        Demo,
        GhSegmentedInput
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
.segmentedInput {
    direction: ltr;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    gap: 1rem;
    width: 20rem;

    &__field {
        width: auto;
        text-align: center;
        border-bottom: 2px solid $black;
        padding: ms(0);
        font-weight: 700;
        direction: ltr;
        color: transparent;
        text-shadow: 0 0 0 $color-primary-base;

        &:active {
            outline: none;
        }

        &:focus {
            outline: none;
            border-color: $color-primary-base;
        }
    }
}
</style>

:::