const array = [
  {
    day: 150000,
    time: 'déjeuner',
  },
  {
    day: 150430,
    time: 'petit-déjeuner',
  },
  {
    day: 150000,
    time: 'petit-déjeuner',
  },
  {
    day: 150430,
    time: 'diner',
  },
  {
    day: 150430,
    time: 'déjeuner',
  },
  {
    day: 150000,
    time: 'diner',
  },

];

const sortedArray = array.sort((a, b) => (b.time.length - a.time.length))
  .sort((a, b) => (a.day - b.day));

console.log(sortedArray);
