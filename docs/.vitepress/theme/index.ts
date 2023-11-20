import Theme from 'vitepress/theme';
import { inject } from '@vercel/analytics';
import Hero from './components/Hero.vue';
import { kinesisPlugin } from '../../../';
import './custom.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Hero', Hero);
    app.use(kinesisPlugin);
    inject();
  },
};
