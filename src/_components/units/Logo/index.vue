<template>
    <div
        v-cq
        :class="{
            'logo--noImage': omitLogo
        }"
        class="logo"
    >
        <ghostax
            v-if="!omitLogo"
            class="logo__image"
        />
        <div
            v-cq
            class="logo__texts"
        >
            <h1
                v-cq
                :class="[`logo__name--${size}`, {
                    'logo__name--mask': mask
                }]"
                class="logo__name"
            >
                GHOSTAX
            </h1>
            <h2
                :class="[`logo__slogan--${size}`]"
                class="logo__slogan"
            >
                abstracts the logic!
            </h2>
        </div>
    </div>
</template>

<script>
import Ghostax from '~core/Ghostax';

export default {
    name: 'Logo',
    cq: {
        medium: {
            maxWidth: 200
        },
        small: {
            maxWidth: 170
        }
    },
    components: {
        Ghostax
    },
    props: {
        size: {
            type: String,
            required: false,
            default: 'small',
            validator(value) {
                return ['big', 'medium', 'small'].includes(value);
            }
        },
        omitLogo: {
            type: Boolean,
            default: false
        },
        mask: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.logo {
    --logo-size: 70px;

    display: grid;
    grid-template-columns: [logo-start] var(--logo-size) [logo-end text-start] auto [text-end];
    grid-column-gap: $grid--normal;
    align-items: center;

    &--noImage {
        grid-template-columns: auto;
    }
    &--size\: {

        &small {
            --logo-size: 50px;

            grid-template-columns: var(--logo-size);
        }
    }

    &__image {
        size: var(--logo-size);
    }

    &__texts {
        box: vertical;

        &--size\: {

            &small {
                display: none;
            }
        }
    }

    &__name {
        font-size: ms(1);
        font-weight: 600;
        color: #26215D;
        line-height: 1;
        position: relative;

        &--mask {
            background-image: url('~@/assets/images/galaxy.png');
            background-size: 150%;
            background-repeat: no-repeat;
            background-clip: text;
            color: transparent;
            background-position: 55% 75%;
        }

        &--big {
            font-size: ms(4);
            font-weight: 900;
        }

        &--size\: {

            &medium {
                font-size: ms(0);
            }
        }
    }

    &__slogan {
        font-family: $mono-typeface;
        font-size: ms(-2);
        color: $color-primary-500;
        font-weight: 600;
        white-space: nowrap;
        font-style: italic;

        &--big {
            font-size: ms(1);
            font-weight: 400;
        }
    }
}
</style>
