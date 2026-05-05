import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: defineAsyncComponent(() => { return import('/@page/Home/Home.vue'); })
    },
    {
        path: '/documentations',
        redirect: {
            name: 'Documentations',
            params: {
                name: 'introduction'
            }
        }
    },
    {
        path: '/documentations/:name',
        name: 'Documentations',
        component: defineAsyncComponent(() => { return import('/@page/Documentations/Documentations.vue'); })
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: defineAsyncComponent(() => { return import('/@page/PageNotFound/PageNotFound.vue'); })
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path.endsWith('/')) next();
    else next({ path: `${to.path}/`, query: to.query, hash: to.hash });
});

export default router;
