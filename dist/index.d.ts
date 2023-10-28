import { type App } from 'vue';
import KinesisContainer from './components/KinesisContainer.vue';
import KinesisElement from './components/KinesisElement.vue';
import KinesisScroll from './components/KinesisScroll.vue';
import KinesisDistance from './components/KinesisDistance.vue';
declare const kinesisPlugin: (vue: App) => void;
export { kinesisPlugin, KinesisContainer, KinesisElement, KinesisScroll, KinesisDistance, };
