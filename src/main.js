import { createApp } from 'vue';
import router from '/@router/';

import '/@styles/base.css';
import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#app');
