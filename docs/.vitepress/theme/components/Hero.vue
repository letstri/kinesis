<template>
  <KinesisContainer class="hero">
    <KinesisElement type="rotate" class="element-1 square" />
    <KinesisElement type="scaleY" class="element-2 circle" />
    <KinesisElement type="rotate" class="element-3 square square--small" />
    <KinesisElement type="translate-inv" class="element-4 circle circle--small" />
    <KinesisElement type="rotate" class="element-5 square" />
    <KinesisElement class="element-6 circle" />
    <KinesisElement type="scaleX" class="element-7 square square--small" />
    <KinesisElement type="scale" class="element-8 circle circle--small" />
    <KinesisElement type="depth" class="title">Vue Kinesis</KinesisElement>
    <KinesisElement type="depth-inv" class="subtitle">
      Easy creation of complex interactive animations
    </KinesisElement>
    <KinesisElement type="translate-inv" axis="x" class="note">
      Based on the original
      <a href="https://github.com/Aminerman/vue-kinesis">Vue Kinesis</a>.
    </KinesisElement>
    <div class="buttons">
      <VPButton href="/installation" text="Get Started" />
    </div>
  </KinesisContainer>
</template>

<script setup lang="ts">
import { VPButton } from 'vitepress/theme';
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  padding: 25vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.title {
  font-size: clamp(3rem, 5vw, 10rem);
  line-height: 1;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.subtitle {
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 400;
  color: var(--vp-home-hero-subtitle-color);
  text-align: center;
}

.note {
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
  color: var(--vp-c-text-3);
  margin-bottom: 2rem;
}

.trick {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

[class*='element-'] {
  position: absolute;
}

.element-1 {
  top: 10vh;
  left: 10vw;
}

.element-2 {
  top: 50vh;
  left: 15vw;

  @media (max-width: 550px) {
    display: none;
  }
}

.element-3 {
  top: 60vh;
  left: 35vw;

  @media (max-width: 768px) {
    display: none;
  }
}

.element-4 {
  top: 10vh;
  left: 40vw;

  @media (max-width: 550px) {
    display: none;
  }
}

.element-5 {
  top: 50vh;
  right: 20vw;

  @media (max-width: 768px) {
    display: none;
  }
}

.element-6 {
  top: 15vh;
  right: 10vw;

  @media (max-width: 550px) {
    display: none;
  }
}

.element-7 {
  top: 5vh;
  right: 35vw;

  @media (max-width: 768px) {
    display: none;
  }
}

.element-8 {
  bottom: 5vh;
  right: 40vw;
}

.square {
  width: 100px;
  height: 100px;
  border: 2px solid var(--vp-c-brand-3);
  opacity: 0.2;

  &--small {
    width: 50px;
    height: 50px;
  }
}

.circle {
  width: 100px;
  height: 100px;
  border: 2px solid var(--vp-c-brand-3);
  opacity: 0.2;
  border-radius: 100%;

  &--small {
    width: 50px;
    height: 50px;
  }
}
</style>
