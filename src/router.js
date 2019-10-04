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
              path: 'introduction',
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
            },
            {
              path: 'components',
              name: 'docs-components',
              component: DocsContent,
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
                    docName: 'dropdown',
                    title: 'Dropdown'
                  }
                },
                {
                  path: 'promise-observer',
                  name: 'docs-components-promise-observer',
                  meta: {
                    docName: 'promise-observer',
                    title: 'Promise Observer'
                  }
                }
              ]
            },
            {
              path: 'helpers',
              name: 'docs-helpers',
              component: DocsContent,
              meta: {
                title: 'Helpers'
              },
              redirect: {
                name: 'docs-helpers-vueRouter'
              },
              children: [
                {
                  path: 'vue-router',
                  name: 'docs-helpers-vueRouter',
                  meta: {
                    docName: 'vue-router',
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
