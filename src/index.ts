import { type App } from 'vue';
import KinesisContainer from './components/KinesisContainer.vue';
import KinesisElement from './components/KinesisElement.vue';
import KinesisScroll from './components/KinesisScroll.vue';
import KinesisDistance from './components/KinesisDistance.vue';

const kinesisPlugin = (vue: App) => {
  vue.component('KinesisContainer', KinesisContainer);
  vue.component('KinesisElement', KinesisElement);
  vue.component('KinesisScroll', KinesisScroll);
  vue.component('KinesisDistance', KinesisDistance);
};

export {
  kinesisPlugin,
  KinesisContainer,
  KinesisElement,
  KinesisScroll,
  KinesisDistance,
};
