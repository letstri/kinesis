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
    cycle: {
        type: NumberConstructor;
        default: number;
    };
}, any, any, {
    transform(): any;
    transformParameters(): {
        transitionProperty: string;
        transitionDuration: any;
        transformOrigin: any;
        transitionTimingFunction: any;
    };
    transitionDuration(): string;
    transitionTimingFunction(): any;
}, {
    transformCalculation(): {
        transform?: undefined;
    } | {
        transform: any;
    };
    strengthManager(): any;
}, {
    methods: {
        transformSwitch(type: any, x: any, y: any, s: any): any;
        translateMovement(x: any, y: any): string;
        rotateMovement(x: any, y: any): string;
        depthMovement(x: any, y: any, s: any): string;
        scaleMovement(x: any, y: any): any;
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    cycle: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    tag: string;
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
    cycle: number;
}, {}>;
export default _default;
