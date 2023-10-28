export const clamp = (
  value: number,
  min: number | null,
  max: number | null
) => {
  return max && value > max ? max : min && value < min ? min : value;
};
