<template>
    <div class="w-180 pb-15 flex flex-col items-center min-h-screen mx-auto">
        <header class="backdrop-blur-lg backdrop-filter w-180 h-13 bg-grayscale-900 border-grayscale-800 fixed top-0 z-10 flex flex-col bg-opacity-75 border-b-2">
            <div class="flex items-center flex-grow">
                <Logo class="w-10 mr-1 transform -translate-x-1" />
                <span class="font-brand text-primary-500 text-3xl font-black">
                    GHOSTAX
                </span>
            </div>
        </header>
        <div class="mt-18 flex items-start flex-grow w-full">
            <nav class="w-30 mr-7 top-18 sticky flex-shrink-0 font-bold">
                <ul class="gap-y-1 flex flex-col">
                    <li
                        v-for="(link, linkIndex) in links" :key="linkIndex"
                        class="flex-grow"
                    >
                        <router-link
                            :to="link.to"
                            class="flex items-end not-italic no-underline transition"
                            :class="{
                                'text-primary-400': link.isActive,
                                'text-grayscale-400 hover:text-grayscale-100': !link.isActive
                            }"
                        >
                            <div class="flex items-center">
                                <BaseIcon
                                    v-if="link.icon" :name="link.icon"
                                    class="mr-0-5"
                                />
                                <span>{{ link.label }}</span>
                            </div>
                            <div
                                class="mb-0-5 h-2px bg-primary-400 ml-0-5 w-3 transition origin-left transform scale-x-0 rounded"
                                :class="{ 'scale-x-100' : link.isActive }"
                            />
                        </router-link>
                    </li>
                </ul>
            </nav>
            <main class="flex items-start flex-grow">
                <article ref="docElm" class="content-formatter flex flex-col flex-grow w-0 prose">
                    <h1>
                        {{ activeLink.label }}
                    </h1>
                    <component :is="docComponent" />
                </article>
                <nav class="w-30 ml-7 top-18 sticky flex flex-col">
                    <span class="text-grayscale-500 mb-2 text-xs font-black">TABLE OF CONTENT</span>
                    <ul class="flex flex-col">
                        <li v-for="tocItem in toc" :key="tocItem.id">
                            <a
                                class="text-sm not-italic font-bold no-underline"
                                :class="{
                                    'ml-2': tocItem.depth == 3,
                                    'text-grayscale-500': !tocItem.isActive,
                                    'text-grayscale-100': tocItem.isActive
                                }"
                                :href="`#${tocItem.id}`" @click="handleTocClick"
                            >
                                {{ tocItem.title }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    </div>
</template>

<script>
import { computed, defineAsyncComponent, reactive, shallowRef, ref, watch, nextTick, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import '/@styles/code-highlight.css';

export default {
    name: 'Documentations',
    setup(props, context) {
        const route = useRoute();
        const links = reactive([
            {
                label: 'Introduction',
                docName: 'Introduction',
                to: '/documentations/introduction',
                isActive: computed(() => { return route.params.name === 'introduction'; })
            },
            {
                label: 'Getting Started',
                docName: 'GettingStarted',
                to: '/documentations/getting-started',
                isActive: computed(() => { return route.params.name === 'getting-started'; })
            },
            {
                label: 'Date Picker',
                docName: 'DatePicker',
                to: '/documentations/date-picker',
                isActive: computed(() => { return route.params.name === 'date-picker'; }),
                icon: 'calendar'
            },
            {
                label: 'Segmented Input',
                docName: 'SegmentedInput',
                to: '/documentations/segmented-input',
                isActive: computed(() => { return route.params.name === 'segmented-input'; })
            }
        ]);

        const activeLink = computed(() => { return links.find((link) => { return link.isActive; }); });

        const docComponent = shallowRef(null);
        const docElm = ref(null);
        watch(() => { return activeLink.value; }, () => {
            docComponent.value = defineAsyncComponent(() => { return import(`./${activeLink.value.docName}/${activeLink.value.docName}.md`); });
        }, { immediate: true });

        const toc = ref([]);
        onMounted(async () => {
            await nextTick();
            const bodyObserver = new MutationObserver(() => {
                const headings = [...docElm.value.querySelectorAll('.markdown-body h2, .markdown-body h3')];
                toc.value = headings.map(heading => {
                    return {
                        title: heading.innerText,
                        depth: heading.nodeName.replace(/\D/g, ''),
                        id: heading.getAttribute('id'),
                        isActive: false
                    };
                });

                const activeHeadingId = ref(null);
                const isInViewPort = (element) => {
                    const rect = element.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );
                };
                document.addEventListener('scroll', () => {
                    window.requestAnimationFrame(() => {
                        const activeHeading = headings.find((heading) => {
                            return heading.offsetTop + heading.offsetHeight - window.scrollY - 130 > 0;
                        });
                        if (activeHeading && isInViewPort(activeHeading)) {
                            activeHeadingId.value = activeHeading.id;
                        }
                    });
                });
                watch(activeHeadingId, () => {
                    toc.value.forEach((tocItem) => {
                        if (tocItem.id === activeHeadingId.value) {
                            tocItem.isActive = true;
                        } else {
                            tocItem.isActive = false;
                        }
                    });
                }, { immediate: true });
            });
            bodyObserver.observe(docElm.value, { childList: true });
        });

        function handleTocClick(event) {
            event.preventDefault();
            const id = event.target.hash;
            toc.value.forEach((tocItem) => {
                if (tocItem.id === id.replace('#', '')) {
                    tocItem.isActive = true;
                } else {
                    tocItem.isActive = false;
                }
            });
            window.scroll({
                behavior: 'smooth',
                top: document.querySelector(id).offsetTop - 140
            });
        }


        return {
            links,
            activeLink,
            docComponent,
            docElm,
            toc,
            handleTocClick
        };
    }
};
</script>
