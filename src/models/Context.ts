import type { ElementRect } from './ElementRect';

export interface Context {
  duration: number;
  easing: string;
  eventData: any;
  isMoving: boolean;
  movement: {
    x: number;
    y: number;
  };
  shape: ElementRect;
}
