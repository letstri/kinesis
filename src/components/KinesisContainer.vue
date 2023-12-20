<script setup lang="ts">
import { ref, provide, reactive, onMounted, onBeforeUnmount, readonly, computed, watch } from 'vue';
import throttle from 'lodash.throttle';
import { type Context, type ElementRect } from '../models';
import { mouseMovement, scrollMovement, orientationElement, inViewport, isTouch } from '../utils';

const {
  tag = 'div',
  event = 'move',
  disabled = false,
  duration = 1000,
  easing = 'cubic-bezier(0.23, 1, 0.32, 1)',
  perspective = 1000,
} = defineProps<{
  tag?: string;
  event?: 'move' | 'scroll' | 'orientation';
  disabled?: boolean;
  duration?: number;
  easing?: string;
  perspective?: number;
}>();

const localTag = ref('div');
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
const eventMap = {
  orientation: 'deviceorientation' as const,
  scroll: 'scroll' as const,
  move: isTouch() ? ('deviceorientation' as const) : null,
};
const eventData = ref();

watch(
  () => tag,
  () => {
    localTag.value = tag;
  },
);

const eventActions = computed(() => ({
  move: {
    action: (target: ElementRect, event: MouseEvent) => mouseMovement({ target, event }),
    condition: isMoving.value && !isTouch(),
    type: eventMap.move,
  },
  scroll: {
    action: (target: ElementRect) => scrollMovement(target),
    condition: !!shape.value?.height,
    type: eventMap.scroll,
  },
  orientation: {
    action: (target: ElementRect, event: MouseEvent) =>
      orientationElement({
        target,
        event: event as unknown as DeviceOrientationEvent,
      }),
    condition: event === 'move' && isTouch(),
    type: eventMap.orientation,
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
  const eventCondition = eventActions.value[event].condition;
  const eventAction = eventActions.value[event].action;

  if (isInViewport && eventCondition) {
    movement.value = eventAction(shape.value, mouseEvent);

    eventData.value = {
      x: mouseEvent.clientX,
      y: mouseEvent.clientY,
    };
  }
}, 100);

const addEvents = () => {
  const e = eventMap[event];

  if (e) {
    window.addEventListener(e, handleMovement, true);
  }
};
const removeEvents = () => {
  const e = eventMap[event];

  if (e) {
    window.removeEventListener(e, handleMovement, true);
  }
};

onMounted(() => {
  localTag.value = tag;
});
onMounted(addEvents);
onBeforeUnmount(removeEvents);

provide<Context>(
  'context',
  readonly(
    reactive({
      duration,
      easing,
      event,
      eventData,
      isMoving,
      movement,
      shape,
    }),
  ),
);
</script>

<template>
  <component
    ref="container"
    :is="localTag"
    :style="{ perspective: `${perspective}px` }"
    @mousemove="handleMovement"
    @mouseenter="handleMovementStart"
    @mouseleave="handleMovementStop"
  >
    <slot />
  </component>
</template>
