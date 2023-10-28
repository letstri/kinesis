import { createApp } from 'vue';
import App from './App.vue';
import { kinesisPlugin } from '../';

createApp(App).use(kinesisPlugin).mount('#app');
