<template>
    <section
        v-cq
        class="sheet"
    >
        <div
            v-cq
            class="sheet__inner"
        >
            <h1>
                {{ title }}
            </h1>
            <slot />
        </div>
    </section>
</template>

<script>
import Prism from 'prismjs';

export default {
    name: 'Sheet',
    cq: {
        large: {
            maxWidth: 680
        }
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {};
    },
    mounted() {
        this.$nextTick(() => {
            Prism.highlightAll();
        });
    },
    updated() {
        this.$nextTick(() => {
            Prism.highlightAll();
        });
    }
};
</script>

<style scoped lang="scss">
.sheet {
    --inner-gap: #{$grid--large};

    display: grid;
    grid-template-columns: minmax(0, 1fr);
    color: gray(40);
    line-height: 1.618;

    &--size\: {

        &large {

        }
    }

    &__inner {
        padding-right: $grid--large;
        &--size\: {

            &large {
                padding-right: 0;
            }
        }

        ::v-deep {

            > article > div {
                margin-bottom: $grid--xxxlarge;

                &:empty {
                    display: none;
                }

                &:first-child {
                    border-radius: 20px;
                    padding: var(--inner-gap);
                    background-color: $color-secondary-darker;
                    color: $color-secondary-bright;
                    box-shadow: 10px 10px 0 0 $color-secondary-bright;
                    font-weight: 600;
                }
            }

            p:not(:last-child) {
                margin-bottom: $grid--normal;
            }

            hr {
                display: block;
                margin: 2rem 0;
                color: gray(85);
            }

            h1 {
                font-size: ms(3);
                color: $color-primary-base;
                font-weight: 900;
                margin-bottom: var(--inner-gap);
            }

            h2 {
                margin-bottom: $grid--medium;
                font-size: ms(2);
                font-weight: 600;
                color: $color-secondary-darker;
            }

            h3 {
                font-size: ms(1);
                font-weight: 600;
                margin-bottom: $grid--normal;
            }

            h4 {
                font-size: ms(0);
                font-weight: 700;
                margin-bottom: 0;
            }

            h3,
            h4 {
                color: $color-secondary-darkest;
            }

            pre {
                margin: 0;
                margin: $grid--normal 0;
                font-size: .85em;
                border-radius: 15px;
                padding: $grid--normal;
                overflow-x: auto;
                white-space: nowrap;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            h2,
            h3 {
                position: relative;
                transition: transform .1s;
                cursor: pointer;

                &::before {
                    content: '#';
                    position: absolute 0 auto 0 0;
                    color: currentColor;
                    transition: transform .1s, opacity .1s;
                    transform-origin: left;
                    transform: scale(.9);
                    opacity: 0;
                    margin-right: .25em;
                    padding-right: 1rem;
                }

                &:hover {
                    transform: translateX(2rem);

                    &::before {
                        transform: translateX(-2rem);
                        opacity: 1;
                    }
                }
            }

            .packageVersion {
                margin-bottom: $grid--medium;
            }

            p code,
            h2 code,
            h3 code,
            h4 code {
                border-radius: 5px;
                padding: 0 .25em;
                background-color: gray(97);
                color: gray(30);
                font-size: .9em;
                font-weight: 400;
                white-space: pre-wrap;
            }

            table {
                margin: $grid--normal 0;
                font-size: .9em;
                width: 100%;
                overflow-x: auto;
                white-space: nowrap;
                display: block;

                &:last-child {
                    margin-bottom: 0;
                }

                thead {

                    th {
                        padding: .5em;
                        text-align: left;
                        color: gray(30);
                        font-weight: 600;
                    }
                }

                tbody {

                    tr:nth-child(odd) {
                        background-color: gray(98);
                    }

                    td {
                        padding: .5em;

                        &:first-child {
                            color: $color-primary-darken;
                        }
                    }
                }
            }
        }
    }
}

</style>
