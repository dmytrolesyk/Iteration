'use strict';

const max = matrix => {
  let maxMatrixValue = matrix[0][0];
  for (const subArray of matrix) {
    for (const item of subArray) {
      if (item > maxMatrixValue) {
        maxMatrixValue = item;
      }
    }
  }
  return maxMatrixValue;
};

module.exports = { max };
