import { type ActionEvent, type ElementRect } from '../models';
export declare const elementMovement: ({ y, x, originX, originY, strength, event, minX, minY, maxX, maxY, }: {
    y: number;
    x: number;
    target?: ElementRect | undefined;
    originX?: number | undefined;
    originY?: number | undefined;
    strength?: number | undefined;
    event: ActionEvent | null;
    minX: number | null;
    minY: number | null;
    maxX: number | null;
    maxY: number | null;
}) => {
    x: number;
    y: number;
};
