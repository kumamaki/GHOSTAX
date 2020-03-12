import Vue from 'vue';
import Router from 'vue-router';
import Root from '~pages/Root';
import Home from '~pages/Home';

const Docs = () => { return import('~pages/Docs'); };
const DocsOrchester = () => { return import('~pages/Docs/Orchester'); };

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'isActive',
    routes: [
        {
            path: '/',
            component: Root,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/docs',
                    name: 'docs',
                    component: Docs,
                    redirect: {
                        name: 'docs-introduction'
                    },
                    meta: {
                        isRootNavigation: true
                    },
                    children: [
                        {
                            path: 'introduction',
                            name: 'docs-introduction',
                            component: DocsOrchester,
                            meta: {
                                title: 'Introduction'
                            },
                            redirect: {
                                name: 'docs-introduction-why'
                            },
                            children: [
                                {
                                    path: 'why',
                                    name: 'docs-introduction-why',
                                    meta: {
                                        docName: 'Why',
                                        title: 'Why?',
                                        showStats: false
                                    }
                                }
                            ]
                        },
                        {
                            path: 'components',
                            name: 'docs-components',
                            component: DocsOrchester,
                            meta: {
                                title: 'Components'
                            },
                            redirect: {
                                name: 'docs-components-dropdown'
                            },
                            children: [
                                {
                                    path: 'dropdown',
                                    name: 'docs-components-dropdown',
                                    meta: {
                                        docName: 'Dropdown',
                                        title: 'Dropdown'
                                    }
                                },
                                {
                                    path: 'promise-observer',
                                    name: 'docs-components-promise-observer',
                                    meta: {
                                        docName: 'PromiseObserver',
                                        title: 'Promise Observer'
                                    }
                                },
                                {
                                    path: 'pagination',
                                    name: 'docs-components-pagination',
                                    meta: {
                                        docName: 'Pagination',
                                        title: 'Pagination'
                                    }
                                },
                                {
                                    path: 'segmented-input',
                                    name: 'docs-components-segmented-input',
                                    meta: {
                                        docName: 'SegmentedInput',
                                        title: 'Segmented Input'
                                    }
                                }
                            ]
                        },
                        {
                            path: 'helpers',
                            name: 'docs-helpers',
                            component: DocsOrchester,
                            meta: {
                                title: 'Helpers'
                            },
                            redirect: {
                                name: 'docs-helpers-vue-router'
                            },
                            children: [
                                {
                                    path: 'vue-router',
                                    name: 'docs-helpers-vue-router',
                                    meta: {
                                        docName: 'VueRouter',
                                        title: 'Vue Router'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
