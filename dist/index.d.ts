import { type App } from 'vue';
import KinesisContainer from './components/KinesisContainer.vue';
import KinesisElement from './components/KinesisElement.vue';
declare module 'vue' {
    interface GlobalComponents {
        KinesisContainer: typeof KinesisContainer;
        KinesisElement: typeof KinesisElement;
    }
}
declare const kinesisPlugin: (vue: App) => void;
export { kinesisPlugin };
