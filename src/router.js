import Vue from 'vue';
import Router from 'vue-router';
import Root from '~pages/Root/Root';
import Home from '~pages/Home/Home';

const Docs = () => { return import('~pages/Docs/Docs'); };
const Introduction = () => { return import('~organisms/DocsContent/Introduction'); };

Vue.use(Router);

export default new Router({
  mode: 'history',
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
          children: [
            {
              path: 'introduction',
              name: 'docs-introduction',
              component: Introduction
            }
          ]
        }
      ]
    }
  ]
});
