'use strict';

const sum = (...args) => {
  let summed = 0;
  while (args.length > 0) {
    summed += args.pop();
  }
  return summed;
};

module.exports = { sum };
