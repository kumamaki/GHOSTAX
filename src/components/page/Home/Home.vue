<template>
    <main class="flex flex-col mx-auto">
        <div class="h-almost-screen relative flex flex-col items-center justify-center w-full mx-auto">
            <HomeSpaceBackground class="2xl:h-125 xl:h-90 absolute top-0 mx-auto pointer-events-none" />
            <div class="flex flex-col items-center">
                <Logo animate class="w-33 xl:-top-10 transform -translate-x-4" />
                <div class="flex flex-col items-center mt-2 text-center">
                    <h1 class="font-title text-primary-base text-5xl font-black">
                        GHOSTAX
                    </h1>
                    <p class="whitespace-nowrap text-grayscale-100 mt-2 text-2xl italic">
                        Fully unstyled, and completly renderless set of <br>
                        components and composable APIs, <br>
                        Made for
                        <HomeIconVueFull class="inline-flex w-3 h-3 ml-1" />
                        Vue 3
                    </p>
                    <div class="flex mt-4">
                        <router-link to="/documentations">
                            <BaseButton class="mr-1" variant="primary">
                                Getting Started
                            </BaseButton>
                        </router-link>
                        <a href="https://github.com/kumamaki/GHOSTAX">
                            <BaseButton class="ml-1" variant="ghost">
                                View on Github
                            </BaseButton>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section class="w-83 grid grid-cols-2 gap-8 mx-auto">
            <FeatureBox class="col-span-2">
                <template #icon>
                    <HomeIconWind class="w-full h-full" />
                </template>
                <template #label>
                    No global footprint. <br>
                    <b class="font-black">Like a free ghost!</b>
                </template>
            </FeatureBox>
            <FeatureBox>
                <template #icon>
                    <HomeIconLeaf class="w-full h-full" />
                </template>
                <template #label>
                    Fully <br>
                    <b class="font-black">Tree Shakable</b>
                </template>
            </FeatureBox>
            <FeatureBox>
                <template #icon>
                    <HomeIconGem class="w-full h-full" />
                </template>
                <template #label>
                    Modern <br> <b class="font-black">ESM</b> Builds
                </template>
            </FeatureBox>
            <FeatureBox>
                <template #icon>
                    <HomeIconVueMinimal class="h-9 w-full mt-2" />
                </template>
                <template #label>
                    <b class="font-black">Vue@3</b> <br> compatiblbe
                </template>
            </FeatureBox>
            <FeatureBox>
                <template #icon>
                    <HomeIconGhFilled class="w-full h-full" />
                </template>
                <template #label>
                    Free and <br> <b class="font-black">Open Source</b>
                </template>
            </FeatureBox>
        </section>
        <article class="w-83 bg-grayscale-800 rounded-2xl shadow-featureBox p-3 mx-auto mt-16">
            <h1 class="font-title text-grayscale-100 text-3xl">
                What Exactly?
            </h1>
            <p class="font-body text-grayscale-100 mt-2 text-lg">
                GHOSTAX is set of packages under @ghostax namespace on npm,
                in which there are renderless components and composion API like helpers.
                The main intention is to be something like UI frameworks like bootstrap,
                But in the opposite way. This means you can use, let’s say @ghostax/datepicker,
                and write your very own HTML and CSS.
            </p>
        </article>
    </main>
</template>

<script>
export default {
    name: 'Home',
    props: {
    },
    setup(props, context) {
        return {
        };
    }
};
</script>