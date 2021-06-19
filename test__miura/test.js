const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (foo,sake,array) {
  return array.indexOf(foo) ===sake;
});

console.log(result);

/*------------------------------------*/

// function leapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0||year%400===0) {
//     return console.log(year)
//   } return console.log(`${year}はうるう年ではありません`)
// }

// leapYear(2020);
// leapYear(2021);

/*-----------------------------------------------*/

const leapYear = [2020, 2021];

leapYear.forEach(function (year) {
  if (year % 4 === 0 && year % 100 !== 0||year%400===0) {
    return console.log(year)
  } return console.log(`${year}はうるう年ではありません`)
})