const array = [2, 4, 7, 5, 4, 3, 8];

// console.log(array);

// const array = [8, 10, 5, 3, 2];

const result = array.filter(function (item) {
  return item == array;
});

console.log(result);