<script setup lang="ts">
import { ref, provide, reactive, onMounted, onBeforeUnmount, readonly, computed } from 'vue';
import throttle from 'lodash.throttle';
import { type Context, type ElementRect } from '../models';
import { mouseMovement, inViewport, isTouch } from '../utils';

const {
  disabled = false,
  duration = 1000,
  easing = 'cubic-bezier(0.23, 1, 0.32, 1)',
  perspective = 0,
} = defineProps<{
  disabled?: boolean;
  duration?: number;
  easing?: string;
  perspective?: number;
}>();

const container = ref<HTMLElement>();
const shape = ref<ElementRect>({
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});
const isMoving = ref(false);
const leftOnce = ref(false);
const movement = ref({
  x: 1,
  y: 1,
});
const eventData = ref();
const _isTouch = isTouch();
const eventActions = computed(() => ({
  move: {
    action: (target: ElementRect, event: MouseEvent) => mouseMovement({ target, event }),
    condition: isMoving.value && !_isTouch,
    type: _isTouch ? ('deviceorientation' as const) : null,
  },
}));

const handleMovementStart = () => {
  if (disabled) {
    return;
  }

  isMoving.value = true;
};
const handleMovementStop = () => {
  if (disabled) {
    return;
  }

  // fixes the specific case when mouseenter didn't trigger on page refresh
  leftOnce.value = true;
  isMoving.value = false;
};

const handleMovement = throttle((e: Event) => {
  if (disabled || !container.value) {
    return;
  }

  const mouseEvent = e as MouseEvent;

  if (!isMoving.value && !leftOnce.value) {
    // fixes the specific case when mouseenter didn't trigger on page refresh
    handleMovementStart();
  }

  shape.value = container.value.getBoundingClientRect();

  const isInViewport = inViewport(shape.value);
  const eventCondition = eventActions.value.move.condition;
  const eventAction = eventActions.value.move.action;

  if (isInViewport && eventCondition) {
    movement.value = eventAction(shape.value, mouseEvent);

    eventData.value = {
      x: mouseEvent.clientX,
      y: mouseEvent.clientY,
    };
  }
}, 100);

const addEvents = () => {
  if (_isTouch) {
    window.addEventListener('deviceorientation', handleMovement, true);
  }
};
const removeEvents = () => {
  if (_isTouch) {
    window.removeEventListener('deviceorientation', handleMovement, true);
  }
};

onMounted(addEvents);
onBeforeUnmount(removeEvents);

provide<Context>(
  'context',
  readonly(
    reactive({
      duration,
      easing,
      eventData,
      isMoving,
      movement,
      shape,
    }),
  ),
);
</script>

<template>
  <div
    ref="container"
    :style="perspective ? { perspective: `${perspective}px` } : undefined"
    @mousemove="handleMovement"
    @mouseenter="handleMovementStart"
    @mouseleave="handleMovementStop"
  >
    <slot />
  </div>
</template>
