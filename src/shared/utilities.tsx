// for unique item id;
export const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};

// to keep the range 385 to 100 for inputs
export const converterFrom385to100 = (num: number) => {
  return +((num / 385) * 100).toFixed(2);
};

// to keep the range 385 to 100 for CSS transition
export const converterFrom100to385 = (num: number) => {
  return +((num / 100) * 385).toFixed(2);
};
