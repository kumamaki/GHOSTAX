<template>
    <div>
        <sheet
            :title="$route.meta.title"
        >
            <package-stats
                v-if="$route.meta.showStats !== false"
                :name="$route.name.replace(/docs-\w+-/, '')"
            />
            <component
                :is="documentationFile"
                v-if="documentationFile"
            />
        </sheet>
    </div>
</template>

<script>
import Sheet from '~units/Sheet';
import PackageStats from '~units/PackageStats/index.vue';

export default {
    name: 'DocsOrchester',
    components: {
        Sheet,
        PackageStats
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        documentationFile() {
            const { docName } = this.$route.meta;
            return () => {
                return import(/* webpackPreload: true; webpackMode: "eager"; webpackChunkname: docs */`./${docName}/index.vue`);
            };
        }
    }
};
</script>
