import { type App } from 'vue';
import KinesisContainer from './components/KinesisContainer.vue';
import KinesisElement from './components/KinesisElement.vue';

declare module 'vue' {
  export interface GlobalComponents {
    KinesisContainer: typeof KinesisContainer;
    KinesisElement: typeof KinesisElement;
  }
}

const kinesisPlugin = (vue: App) => {
  vue.component('KinesisContainer', KinesisContainer);
  vue.component('KinesisElement', KinesisElement);
};

export { kinesisPlugin };
