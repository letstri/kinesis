import { ElementRect } from '../models';

export const inViewport = (element: ElementRect) => {
  const isInViewport =
    element.bottom >= 0 &&
    element.right >= 0 &&
    element.top <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    element.left <= (window.innerWidth || document.documentElement.clientWidth);

  return isInViewport;
};
