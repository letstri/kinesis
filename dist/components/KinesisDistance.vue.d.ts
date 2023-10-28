declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    transformOrigin: {
        type: StringConstructor;
        default: string;
    };
    originX: {
        type: NumberConstructor;
        default: number;
    };
    originY: {
        type: NumberConstructor;
        default: number;
    };
    strength: {
        type: NumberConstructor;
        default: number;
    };
    axis: {
        type: StringConstructor;
        default: null;
    };
    maxX: {
        type: NumberConstructor;
        default: null;
    };
    maxY: {
        type: NumberConstructor;
        default: null;
    };
    minX: {
        type: NumberConstructor;
        default: null;
    };
    minY: {
        type: NumberConstructor;
        default: null;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    cycle: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    easing: {
        type: StringConstructor;
        default: string;
    };
    perspective: {
        type: NumberConstructor;
        default: number;
    };
}, any, {
    pointer: {
        x: number;
        y: number;
    };
    transform: {};
    component: string;
    throttle: number;
}, {
    style(): {
        perspective: string;
    };
    transformParameters(): {
        position: string;
        transitionProperty: string;
        transitionDuration: string;
        transformOrigin: string;
        transitionTimingFunction: string;
    };
    transitionDuration(): string;
}, {
    getCoordinates(x: any, y: any): {
        x: any;
        y: any;
    };
    getDistance(x1: any, x2: any, y1: any, y2: any): number;
    handleMovement: (...args: any[]) => void;
    transformBehavior(): void;
    scaleMovement(x: any, y: any): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    transformOrigin: {
        type: StringConstructor;
        default: string;
    };
    originX: {
        type: NumberConstructor;
        default: number;
    };
    originY: {
        type: NumberConstructor;
        default: number;
    };
    strength: {
        type: NumberConstructor;
        default: number;
    };
    axis: {
        type: StringConstructor;
        default: null;
    };
    maxX: {
        type: NumberConstructor;
        default: null;
    };
    maxY: {
        type: NumberConstructor;
        default: null;
    };
    minX: {
        type: NumberConstructor;
        default: null;
    };
    minY: {
        type: NumberConstructor;
        default: null;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    cycle: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    easing: {
        type: StringConstructor;
        default: string;
    };
    perspective: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    active: boolean;
    tag: string;
    duration: number;
    easing: string;
    perspective: number;
    type: string;
    transformOrigin: string;
    originX: number;
    originY: number;
    strength: number;
    axis: string;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
    distance: number;
    cycle: number;
}, {}>;
export default _default;
