import Theme from 'vitepress/theme';
import Hero from './components/Hero.vue';
import { kinesisPlugin } from '../../../';
import './custom.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Hero', Hero);
    app.use(kinesisPlugin);
  },
};
