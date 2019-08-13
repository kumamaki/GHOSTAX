import Vue from 'vue';
import Router from 'vue-router';
import Root from '~pages/Root/Root';
import Home from '~pages/Home/Home';

const Docs = () => { return import('~pages/Docs/Docs'); };
const DocsContent = () => { return import('~organisms/DocsContent/DocsContent'); };

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
          children: [
            {
              path: 'introduction/',
              name: 'docs-introduction',
              component: DocsContent,
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
                    docName: 'why',
                    title: 'Why?'
                  }
                },
                {
                  path: 'installation',
                  name: 'docs-introduction-installation',
                  meta: {
                    docName: 'installation',
                    title: 'Installation'
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
