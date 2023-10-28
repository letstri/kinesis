export default function (value, min, max) {
  return max && value > max ? max : min && value < min ? min : value;
}
