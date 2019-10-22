'use strict';

const sum = (...args) => {
  let summed = 0;
  for (const argument of args) summed += argument;
  return summed;
};

module.exports = { sum };
