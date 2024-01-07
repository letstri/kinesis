<script setup lang="ts">
import { type CSSProperties, computed, inject, toRef } from 'vue';
import { type TransformType, type Axis, type Context } from '../models';
import { elementMovement, cyclicMovement } from '../utils';
import { useTransform } from '../composables';

const {
  type = 'translate',
  transformOrigin = 'center',
  originX = 50,
  originY = 50,
  strength = 10,
  axis = null,
  maxX = null,
  maxY = null,
  minX = null,
  minY = null,
  cycles = 0,
} = defineProps<{
  type?: TransformType;
  transformOrigin?: CSSProperties['transformOrigin'];
  originX?: number;
  originY?: number;
  strength?: number;
  axis?: Axis | null;
  maxX?: number | null;
  maxY?: number | null;
  minX?: number | null;
  minY?: number | null;
  cycles?: number;
}>();

const axisProp = toRef(() => axis);
const strengthProp = toRef(() => strength);
const typeProp = toRef(() => type);

const { transformSwitch } = useTransform(axisProp, strengthProp, typeProp);
const context = inject<Context>('context');

const strengthManager = computed(() =>
  type === 'depth' || type === 'depth-inv' ? Math.abs(strength) : strength,
);

const transform = computed(() => {
  if (!context || !context.shape || (!context.isMoving && context.event === 'move')) {
    return {};
  }

  let movementX = 0;
  let movementY = 0;

  const { x, y } =
    cycles < 1
      ? elementMovement({
          ...context.movement,
          originX,
          originY,
          strength: strengthManager.value,
          event: context.event,
          minX,
          minY,
          maxX,
          maxY,
        })
      : cyclicMovement({
          referencePosition: context.event === 'scroll' ? { x: 0, y: 0 } : context.eventData,
          shape: context.shape,
          event: context.event,
          cycles,
          strength: strengthManager.value,
        });

  if (context.event !== 'scroll') {
    movementX = axis === 'y' ? 0 : x;
    movementY = axis === 'x' ? 0 : y;
  } else if (context.event === 'scroll') {
    movementX = axis === 'x' ? y : 0;
    movementY = axis === 'y' || !axis ? y : 0;
  } else if (cycles > 0) {
    movementX = axis === 'x' ? x : 0;
    movementY = axis === 'y' ? y : 0;
  }

  return {
    transform: transformSwitch(type, movementX, movementY, strength),
  };
});
const transformParameters = computed<CSSProperties>(() => ({
  transformOrigin,
  willChange: 'transform',
  transitionProperty: 'transform',
  transitionDuration: `${context?.duration ?? 0}ms`,
  transitionTimingFunction: context?.easing ?? 'linear',
}));
</script>

<template>
  <div
    :style="{
      ...transform,
      ...transformParameters,
    }"
  >
    <slot />
  </div>
</template>
