import { type ElementRect } from '../models';
import { getCenter } from './getCenter';

export const mouseMovement = ({ target, event }: { target: ElementRect; event: MouseEvent }) => {
  const x = event.clientX;
  const y = event.clientY;

  const relativeX = x - target.left;
  const relativeY = y - target.top;

  const center = getCenter(target);

  const mouseMovementX = relativeX / center.x;
  const mouseMovementY = relativeY / center.y;

  return {
    x: mouseMovementX,
    y: mouseMovementY,
    target,
  };
};
