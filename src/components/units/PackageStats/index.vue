<template>
    <div class="packageVersion">
        <a
            v-for="badge in badges"
            :key="badge.href"
            :href="badge.href"
            target="_blank"
            class="packageVersion__item"
        >
            <img
                :src="badge.image"
                alt="badge.name"
                height="18"
            >
        </a>
    </div>
</template>

<script>
export default {
    name: 'PacakgeVersion',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {};
    },
    computed: {
        badges() {
            return [
                {
                    name: 'npm package version',
                    href: `https://badge.fury.io/js/%40ghostax%2F${this.name}`,
                    image: `https://badge.fury.io/js/%40ghostax%2F${this.name}.svg`
                },
                {
                    name: 'license',
                    href: 'http://opensource.org/licenses/MIT',
                    image: 'http://img.shields.io/badge/license-MIT-brightgreen.svg'
                },
                {
                    name: 'package size',
                    href: `https://bundlephobia.com/result?p=@ghostax/${this.name}`,
                    image: `https://badgen.net/bundlephobia/minzip/@ghostax/${this.name}`
                },
                {
                    name: 'twitter handle',
                    href: 'https://twitter.com/Mehdi_HoseiniP',
                    image: 'https://badgen.net/twitter/follow/Mehdi_HoseiniP'
                }
            ];
        }
    }
};
</script>

<style scoped lang="scss">
.packageVersion {
    display: flex;
    flex-wrap: wrap;

    &__item {
        margin-right: $grid;
        margin-bottom: $grid;
    }
}
</style>
