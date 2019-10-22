'use strict';

const ages = persons => {
  const ages = {};
  for (const key in persons) {
    const person = persons[key];
    Object.assign(ages, { [key]: person.died - person.born });
  }
  return ages;
};


module.exports = { ages };
