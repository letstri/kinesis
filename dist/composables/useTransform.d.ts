import { type Ref } from 'vue';
import { type Axis, type TransformType } from '../models';
export declare const useTransform: (axis: Ref<Axis | null>, strength: Ref<number>, type: Ref<TransformType>) => {
    transformSwitch: (type: TransformType, x: number, y: number, s: number) => string;
};
