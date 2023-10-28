declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    event: {
        type: StringConstructor;
        default: string;
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
    shape: any;
    isMoving: boolean;
    leftOnce: boolean;
    movement: {
        x: number;
        y: number;
    };
    eventMap: {
        orientation: string;
        scroll: string;
        move: string | null;
    };
}, {
    eventActions(): {
        move: {
            action: typeof mouseMovement;
            condition: boolean;
            type: string | null;
        };
        scroll: {
            action: typeof scrollMovement;
            condition: boolean;
            type: string;
        };
        orientation: {
            action: typeof orientationElement;
            condition: boolean;
            type: string;
        };
    };
    style(): {
        perspective: string;
    };
}, {
    handleMovementStart(): void;
    handleMovementStop(): void;
    handleMovement: (...args: any[]) => void;
    addEvents(): void;
    removeEvents(): void;
}, {
    props: {
        audio: {
            type: StringConstructor;
            required: boolean;
        };
        playAudio: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    data(): {
        analyser: null;
        audioArray: null;
        audioData: null;
        audioRef: null;
        wasPlayed: boolean;
        isPlaying: boolean;
    };
    watch: {
        audio(): void;
        playAudio(play: any): void;
    };
    methods: {
        play(): void;
        stop(): void;
        handleAudio(): void;
        getSongData(): void;
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    event: {
        type: StringConstructor;
        default: string;
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
    event: string;
    active: boolean;
    tag: string;
    duration: number;
    easing: string;
    perspective: number;
}, {}>;
export default _default;
import mouseMovement from '../utils/mouseMovement';
import scrollMovement from '../utils/scrollMovement';
import orientationElement from '../utils/orientationElement';
