'use strict';

const sum = (...args) => {
  let counter = 0, summed = 0;
  do {
    summed += args[counter] || 0;
    counter++;
  } while (counter < args.length);
  return summed;
};

module.exports = { sum };
