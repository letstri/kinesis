# Getting Started

## Installation

So easy to install, just run the following command:

::: code-group

```sh [npm]
$ npm i @letstri/vue-kinesis
```

```sh [pnpm]
$ pnpm i @letstri/vue-kinesis
```

```sh [yarn]
$ yarn add @letstri/vue-kinesis
```

```sh [bun]
$ bun i @letstri/vue-kinesis
```

:::

## Setup

So easy to setup, just run the following command:

::: code-group

```js [Vue]
// src/main.js
import { kinesisPlugin } from '@letstri/vue-kinesis';

const app = createApp(App);

app.use(kinesisPlugin);
```

```js [Nuxt]
// plugins/vue-kinesis.js
import { kinesisPlugin } from '@letstri/vue-kinesis';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(kinesisPlugin);
});
```

:::

## Usage

::: tip
KinesisContainer is a wrapper for KinesisElement components. You should use it to wrap all KinesisElement components.
:::

And, finally, you can use it in your project:

```vue [Vue]
<template>
  <KinesisContainer>
    <KinesisElement>1</KinesisElement>
    <KinesisElement>2</KinesisElement>
    <KinesisElement>3</KinesisElement>
  </KinesisContainer>
</template>
```
