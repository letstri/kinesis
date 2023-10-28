# vue-kinesis

[![npm](https://img.shields.io/npm/v/@letstri/vue-kinesis.svg)](https://img.shields.io/npm/v/vue-kinesis.svg)

[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)

Easy to use Vue 3 components for creating interactive animations

## Demo

[Kinesis Demo](https://aminerman.com/kinesis/)

## Installation

```
npm install --save @letstri/vue-kinesis
```

Install all the plugin:

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { kinesisPlugin } from '@letstri/vue-kinesis';

const app = createApp(App);

app.use(kinesisPlugin);

app.mount('#app');
```

## Usage

```html
<KinesisContainer>
  <KinesisElement />
</KinesisContainer>
```

## Props

### KinesisContainer

| Prop        |  Type   | Default Value                    | Description                                                                      |
| ----------- | :-----: | -------------------------------- | -------------------------------------------------------------------------------- |
| disabled    | Boolean | false                            | To enable or disable the interactions                                            |
| duration    | Number  | 1000                             | Speed of the parallax animation in ms                                            |
| easing      | String  | "cubic-bezier(0.23, 1, 0.32, 1)" | Easing of the parallax animation                                                 |
| tag         | String  | div                              | Takes any valid html tag                                                         |
| event       | String  | "move"                           | Event to which the container will react. Possible values are "move" and "scroll" |
| perspective | Number  | 1000                             | Effective for the 'depth' parallax type                                          |

### KinesisElement

| Prop            |  Type  | Default Value | Description                                                                                                                              |
| --------------- | :----: | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| strength        | Number | 10            | Strength of the motion effect                                                                                                            |
| type            | String | "translate"   | translate - rotate - scale - scaleX - scaleY - depth - depth_inv                                                                         |
| tag             | String | "div"         | Takes any valid html tag                                                                                                                 |
| transformOrigin | String | "center"      | Similar to the CSS transform-origin property                                                                                             |
| originX         | Number | 50            | The motion's origin relative to the container, on the X axis. 50 being the center of the container, 0 the left side, 100 the right side. |
| originY         | Number | 50            | The motion's origin relative to the container, on the Y axis. 50 being the center of the container, 0 the top side, 100 the bottom side. |
| axis            | String | null          | Constrain the movement to one axis. Possible values: "x" - "y"                                                                           |
| maxX            | Number | null          | Limit the maximum range of the movement on the X axis                                                                                    |
| maxY            | Number | null          | Limit the maximum range of the movement on the Y axis                                                                                    |
| minX            | Number | null          | Limit the minimum range of the movement on the X axis                                                                                    |
| minY            | Number | null          | Limit the minimum range of the movement on the Y axis                                                                                    |
| cycle           | Number | 0             | How many times the movement will repeat                                                                                                  |

## License

[MIT](http://opensource.org/licenses/MIT)
