import { ElementRect } from '../models';

export const scrollMovement = (target: ElementRect) => {
  const x =
    (target.left - window.innerWidth) / (target.width + window.innerWidth);
  const y =
    (target.top - window.innerHeight) / (target.height + window.innerHeight);

  return { x, y, target };
};
