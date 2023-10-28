declare const _default: import("vue").DefineComponent<{}, {}, {
    transform: {};
}, {
    transformParameters(): {
        transitionProperty: string;
        transitionDuration: string;
        transformOrigin: never;
        transitionTimingFunction: never;
    };
    transitionDuration(): string;
}, {
    getCycleMovement(xPos: any, yPos: any, width: any, height: any, shape: any): void;
    handleScroll: (...args: any[]) => void;
    transformBehavior(shape: any): void;
}, {
    methods: {
        transformSwitch(type: any, x: any, y: any, s: any): any;
        translateMovement(x: any, y: any): string;
        rotateMovement(x: any, y: any): string;
        depthMovement(x: any, y: any, s: any): string;
        scaleMovement(x: any, y: any): any;
    };
} | {
    props: {
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
        tag: {
            type: StringConstructor;
            default: string;
        };
    };
} | {
    props: {
        perspective: {
            type: NumberConstructor;
            default: number;
        };
    };
    computed: {
        style(): any;
    };
} | {
    props: {
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
        audioIndex: {
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
    };
    methods: {
        strengthManager(): any;
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;
