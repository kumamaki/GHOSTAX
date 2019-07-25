import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import App from './App.vue';
import router from './router';

import '~styles/variables.scss';
import '~styles/base.scss';
import '~styles/global.scss';

Vue.config.productionTip = false;

Vue.use(SvgIcon, {
  tagName: 'svg-icon'
});

new Vue({
  router,
  render: (h) => { return h(App); }
}).$mount('#app');
