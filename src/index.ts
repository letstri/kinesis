import { type Plugin } from 'vue';
import KinesisContainer from './components/KinesisContainer.vue';
import KinesisElement from './components/KinesisElement.vue';

declare module 'vue' {
  export interface GlobalComponents {
    KinesisContainer: typeof KinesisContainer;
    KinesisElement: typeof KinesisElement;
  }
}

const kinesisPlugin: Plugin = {
  install(app) {
    app.component('KinesisContainer', KinesisContainer);
    app.component('KinesisElement', KinesisElement);
  },
};

export { kinesisPlugin };
