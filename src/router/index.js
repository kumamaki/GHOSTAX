import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '/@page/Home/Home.vue';
import PageNotFound from '/@page/PageNotFound/PageNotFound.vue';

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:catchAll(.*)',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path.endsWith('/')) next();
    else next({ path: `${to.path}/`, query: to.query, hash: to.hash });
});

export default router;
