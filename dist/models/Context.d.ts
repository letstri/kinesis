import { type ActionEvent } from './ActionEvent';
import { type ElementRect } from './ElementRect';
export interface Context {
    duration: number;
    easing: string;
    event: ActionEvent;
    eventData: any;
    isMoving: boolean;
    movement: {
        x: number;
        y: number;
    };
    shape: ElementRect;
}
