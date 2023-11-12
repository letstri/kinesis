import { type TransformType, type Axis } from '../models';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    tag?: string | undefined;
    type?: TransformType | undefined;
    transformOrigin?: import("csstype").Property.TransformOrigin<string | number> | undefined;
    originX?: number | undefined;
    originY?: number | undefined;
    strength?: number | undefined;
    axis?: Axis | null | undefined;
    maxX?: number | null | undefined;
    maxY?: number | null | undefined;
    minX?: number | null | undefined;
    minY?: number | null | undefined;
    cycles?: number | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    tag?: string | undefined;
    type?: TransformType | undefined;
    transformOrigin?: import("csstype").Property.TransformOrigin<string | number> | undefined;
    originX?: number | undefined;
    originY?: number | undefined;
    strength?: number | undefined;
    axis?: Axis | null | undefined;
    maxX?: number | null | undefined;
    maxY?: number | null | undefined;
    minX?: number | null | undefined;
    minY?: number | null | undefined;
    cycles?: number | undefined;
}>>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
