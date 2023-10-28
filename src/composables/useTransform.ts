import { type Ref } from 'vue';
import { type Axis, type TransformType } from '../models';

export const useTransform = (
  axis: Ref<Axis | null>,
  strength: Ref<number>,
  type: Ref<TransformType>
) => {
  const translateMovement = (x: number, y: number) =>
    `translate3d(${-x}px, ${-y}px, 0)`;
  const rotateMovement = (x: number, y: number) => {
    let movement = 0;
    if (!axis.value) {
      movement = x + y;
    } else if (axis.value === 'x') {
      movement = 2 * x;
    } else if (axis.value === 'y') {
      movement = 2 * y;
    }
    return `rotate3d(0,0,1,${movement}deg)`;
  };
  const depthMovement = (x: number, y: number, s: number) =>
    `rotateX(${-y}deg) rotateY(${x}deg) translate3d(0,0,${s * 2}px)`;
  const scaleMovement = (x: number, y: number) => {
    const movement =
      (Math.sign(strength.value) * (Math.abs(x) + Math.abs(y))) / 10 + 1;

    return `scale3d(${
      type.value === 'scaleX' || type.value === 'scale' ? movement : 1
    }, ${type.value === 'scaleY' || type.value === 'scale' ? movement : 1}, 1)`;
  };

  const transformSwitch = (
    type: TransformType,
    x: number,
    y: number,
    s: number
  ) => {
    switch (type === 'scaleX' || type === 'scaleY' ? 'scale' : type) {
      case 'translate':
        return translateMovement(x, y);
      case 'rotate':
        return rotateMovement(x, y);
      case 'depth':
        return depthMovement(x, y, s);
      case 'depth_inv':
        return depthMovement(-x, -y, s);
      case 'scale':
        return scaleMovement(x, y);
    }
  };

  return { transformSwitch };
};
