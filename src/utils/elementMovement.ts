import { type ActionEvent, type ElementRect } from '../models';
import { clamp } from './clamp';

export const elementMovement = ({
  y,
  x,
  originX = 50,
  originY = 50,
  strength = 10,
  event = null,
  minX,
  minY,
  maxX,
  maxY,
}: {
  y: number;
  x: number;
  target?: ElementRect;
  originX?: number;
  originY?: number;
  strength?: number;
  event: ActionEvent | null;
  minX: number | null;
  minY: number | null;
  maxX: number | null;
  maxY: number | null;
}) => {
  const movementX = clamp((x - originX / 50) * strength, minX, maxX);
  const movementY = clamp(
    (y - (event === 'scroll' ? -originY / 2 : originY) / 50) * strength,
    minY,
    maxY,
  );

  return {
    x: movementX,
    y: movementY,
  };
};
