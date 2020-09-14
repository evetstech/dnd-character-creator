export const getMinIndex = (array) => {
  if (array.length === 0) {
    return -1;
  }

  let min = array[0];
  let minIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      minIndex = i;
      min = array[i];
    }
  }

  return minIndex;
}