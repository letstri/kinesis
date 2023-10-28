import getCoordinates from './getCoordinates';

export default function (shape) {
  const { target } = shape;
  const x =
    (target.left - window.innerWidth) / (target.width + window.innerWidth);
  const y =
    (target.top - window.innerHeight) / (target.height + window.innerHeight);
  return { ...getCoordinates(x, y), target };
}
