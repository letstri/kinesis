export declare const cyclicMovement: (cycleData: {
    referencePosition: {
        x: number;
        y: number;
    };
    shape: {
        width: number;
        height: number;
        top: number;
        left: number;
    };
    event: string;
    cycles: number;
    strength: number;
}) => {
    x: number;
    y: number;
};
