import { ElementRect } from '../models';
export declare const orientationElement: ({ event, target, }: {
    target: ElementRect;
    event: DeviceOrientationEvent;
}) => {
    x: number;
    y: number;
    target: ElementRect;
};
