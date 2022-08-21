/**
 * Utility method that's given a length and will return
 * an array of that length with the values of 0 to length
 * Example: createArrayWithValueOfLength(3) = [0,1,2]
 */
export const createArrayWithValueOfLength = (len: number): number[] => {
  return Array(len)
    .fill(null)
    .map((_el, index) => {
      return index;
    });
};
