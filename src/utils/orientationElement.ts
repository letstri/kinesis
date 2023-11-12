import { type ElementRect } from '../models';

export const orientationElement = ({
  event,
  target,
}: {
  target: ElementRect;
  event: DeviceOrientationEvent;
}) => {
  if (event.gamma === null || event.beta === null) {
    return { x: 0, y: 0, target };
  }

  const x = event.gamma / 45;
  const y = event.beta / 90;

  return {
    x,
    y,
    target,
  };
};
