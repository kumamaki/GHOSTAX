import Vue from 'vue';
import _upperFirst from 'lodash.upperfirst';
import _camelCase from 'lodash.camelcase';
import SvgIcon from 'vue-svgicon';
import vueContainerQuery from 'vue-container-query-2';
import PortalVue from 'portal-vue';
import App from './App.vue';
import router from './router';

import '~styles/variables.scss';
import '~styles/base.scss';
import '~styles/global.scss';

const requireComponent = require.context(
    './components/core',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = _upperFirst(
        _camelCase(
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    );
    Vue.component(
        componentName,
        componentConfig.default || componentConfig
    );
});

Vue.config.productionTip = false;

Vue.use(SvgIcon, {
    tagName: 'svg-icon'
});

Vue.use(vueContainerQuery, {
    classNames: {
        sizes: {
            xsmall: 'xsmall',
            small: 'small',
            medium: 'medium',
            large: 'large',
            xlarge: 'xlarge'
        },
        prepend: 'size:'
    },
    useBEM: true,
    ignoredClasses: ['|']
});

Vue.use(PortalVue);

new Vue({
    router,
    render: (h) => { return h(App); }
}).$mount('#app');
