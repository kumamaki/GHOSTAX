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
import 'highlightjs/styles/github.css';

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
    }

    ::v-deep {

        section {
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

        .vuebar-element {
            height: 250px;
            width: 100%;
            max-width: 500px;
            background: #DFE9FE;
        }

        .vb > .vb-dragger {
            z-index: 5;
            width: 12px;
            right: 0;
        }

        .vb > .vb-dragger > .vb-dragger-styler {
            backface-visibility: hidden;
            transform: rotate3d(0, 0, 0, 0);
            transition: background-color 100ms ease-out, margin 100ms ease-out, height 100ms ease-out;
            background-color: rgba(48, 121, 244, .1);
            margin: 5px 5px 5px 0;
            border-radius: 20px;
            height: calc(100% - 10px);
            display: block;
        }

        .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
            background-color: rgba(48, 121, 244, .3);
        }

        .vb > .vb-dragger:hover > .vb-dragger-styler {
            background-color: rgba(48, 121, 244, .5);
            margin: 0;
            height: 100%;
        }

        .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
            background-color: rgba(48, 121, 244, .5);
            margin: 0;
            height: 100%;
        }

        .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
            background-color: rgba(48, 121, 244, .5);
        }
    }
}
</style>

<style lang="scss">
code[class*='language-'],
pre[class*='language-'] {
    font-family: $mono-typeface;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
    background-color: #F6F8FF;
    padding: 0;
}
</style>
