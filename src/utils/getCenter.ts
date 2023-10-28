export const getCenter = (element: { width: number; height: number }) => {
  return {
    x: element ? element.width / 2 : 0,
    y: element ? element.height / 2 : 0,
  };
};
