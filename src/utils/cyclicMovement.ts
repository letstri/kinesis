export const cyclicMovement = (cycleData: {
  referencePosition: { x: number; y: number };
  shape: { width: number; height: number; top: number; left: number };
  cycles: number;
  strength: number;
}) => {
  const { referencePosition, shape, cycles, strength } = cycleData;

  const radialPositionX = ((referencePosition.x - shape.left) * (Math.PI * 2)) / shape.width;
  const radialPositionY = ((referencePosition.y - shape.top) * (Math.PI * 2)) / shape.height;

  const cycleX = shape.width * Math.sin(radialPositionX * cycles);
  const cycleY = shape.height * Math.sin(radialPositionY * cycles);

  return {
    x: (cycleX * strength) / (shape.width / 2),
    y: (cycleY * strength) / (shape.height / 2),
  };
};
