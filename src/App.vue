<template>
    <div class="h-full">
        <router-view />
        <footer class="bg-grayscale-600 text-grayscale-400 p-3 mt-16">
            <div class=" align-items-center flex justify-center">
                <a
                    class="text-primary-100" href="https://github.com/kumamaki"
                    target="_blank"
                >
                    <HomeIconGhLine class="w-3 h-3 mr-1" />
                </a>
                <a
                    class="text-primary-100" href="https://twitter.com/Em_Eh_"
                    target="_blank"
                >
                    <HomeIconTwitter class="w-3 h-3 ml-1" />
                </a>
            </div>
            <p class="mt-2 text-center">
                Licensed under <a href="http://www.wtfpl.net/" target="_blank">WTFPL</a>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'App',
    props: {
    },
    setup(props, context) {
        return {
        };
    }
};
</script>
