import { createApp } from 'vue';
import router from '/@router/';

import '/@styles/base.css';
import App from './App.vue';
import 'vite-plugin-svg-icons/register';

import DocApi from '/@page/Documentations/DocApi/DocApi.vue';

const app = createApp(App);

app.use(router);

app.component('DocApi', DocApi);

app.mount('#app');
