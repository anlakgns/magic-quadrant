
// for unique item id;
export const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};

// to keep the range 0 100 instead of 400 in inputs
export const converterTo400 = (num: number) => {
  return num * 4 - 10;
};

export const converterTo100 = (num: number) => {
  return +((num + 10) / 4).toFixed(2);
};
