// function txt(name, age) {
//   if (name = '井上純'){
//     return `${name}所長、お疲れ様です。`;
//   } else if (name = '別府雅彦') {
//     return `${nname}課長、お疲れ様です。`;
//   } else {
//     return '誰？';
//   }
// }

// console.log(txt('井上純', 49));

// function add(number1, number2) {
//   const foo = number1 + number2;
//   return `得点は${foo}点です。`;
// }

// console.log(add(5, 33));

// function add(name) {
//   if (name = '井上純') {
//     return `${name}様、大好きです。`;
//   }
// }

// console.log(add('井上純'));

// const lists = ['井上', '純', '別府', '雅彦', '小沼', 'なんだっけ'];

// for (let i = 0; lists.length > i; i++){
//   console.log(lists[i]);
// }

// const test = ['国語', '数学', '英語'];
// test.push('理科', '社会');
// console.log(test);
// console.log(test.length);

// for (let i = 1; i <= 50; i++){
//   if (i % 3 == 0 && i % 5 == 0){
//     console.log('FizzBuzz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else if (i % 3 == 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

// let water = 1000;
// const drinkWater = 180;
// while (water > 0) {
//   console.log(water);
//   water = water - drinkWater;
// }
// console.log("水を飲み干した");

// const str ='いのうえじゅん';

// for (i = 0; str.length > i; i++){
//   console.log(str[i])
// }

// const str = '井上純/別府/小沼'.split('/').join('##');
// console.log(str);

// const strings = "HTML・CSS・JavaScript".split("・");
// console.log(strings);

// const len = 'haouotanclashdwahfjalcnsfdfjkjf';
// console.log(len.length);

// console.log('井上純' === '井上純');
// console.log('井上純' === 'inouejyunn');

// const txt = 'プログラミングプログラミング';
// console.log(txt.slice(2, 8));
// console.log(txt.slice(5));

// const result = prompt('入力したければすればいい');
// console.log(result);

// function say() {
//   alert('Hellow');
// }

// const timerId = setInterval(say, 1000);

// function stop(){
//   clearInterval(timerId);
// }
// setTimeout(stop, 5000)

// const user = {
//   name: '井上純',
//   age: 49,
//   say: function () {
//     console.log(this.name);
//   },
// };
// user.say();

// const aaa = { p: 50, q: true, r: 'オブジェクト', };
// console.log(aaa.p);


// const school = {
//   name: "COACHTECH",
//   month: 2,
//   skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
//   createSentense() {
//    console.log(this.name'は'this.month)
//   },
// };

// console.log(school.createSentense());

// const dt = new Date();
// const dateT = ['日', '月', '火', '水', '木', '金', '土'];
// const day = dateT[dt.getDay()];
// console.log(day);

const array = ['a', 'b', 'c', 'd', 'e', 'f'];
// const indexOfTxt = array.indexOf('d');
// if (indexOfTxt !== -1) {
//   console.log('配列に含まれています。')
// }

// if (array.includes('f')) {
//   console.log('挿入されておる');
// }

// array.forEach(function (item, index) {
//   if (item == 'e') {
//     console.log(`${index}回戦、${item}と遊んだ`);
//   }
// });

// array.forEach(function (item, index) {
//     console.log(`${index}回戦、${item}と遊んだ`);
// });

// const n = [1, 2, 3, 4, 5];
// const result = n.map(function (item) {
//   return item +1;
// })

// console.log(result);

// const result = n.filter(function (item) {
//   return item % 2 === 1;
// });
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = numbers.map(function (item) {
//   if (item % 2 === 0) {
//     return item * 2;
//   } else {
//     return item;
//   }
// });
// console.log(newNumbers);

// const text = (num1, num2) => {
//   const add = num1 + num2;
//   return add;
// }
// console.log(text(5, 6));

// function vegetable(name, price, func) {
//   const pit = func(price);
//   console.log(name + 'の税込み価格は' + pit + 'です');
// }

// const priceIncludingTax = function (price) {
//   const tax = 1.1;
//   return Math.floor(price* tax);
// }

// vegetable('イチゴ', 300, priceIncludingTax);

// const test = [{ name: 'A', score: 80, }, { name: 'B', score: 15, }, { name: 'C', score: 55, }];

// test.forEach(function (name, score) {
//   if (score>=0 && score < 30) {
//     console.log( `${name}君もう少し頑張りましょう`);
//   } else if (30 <=score && score < 70) {
//     console.log(`${name}君普通です`);
//   } else if (70 <=score && score <= 100) {
//     console.log(`${name}君良くできました`);
//   } else {
//     console.log('正しい数字を入力してください');
//   }
// });

// const items = [
//   {
//     name: "水",
//     price: 100,
//   },
//   {
//     name: "リンゴジュース",
//     price: 130,
//   },
//   {
//     name: "コーヒー",
//     price: 150,
//   },
//   {
//     name: "モンスター",
//     price: 200,
//   },
//   {
//     name: "レッドブル(大)",
//     price: 250,
//   },
// ];

// items.forEach( function(pay, itemName) {
//   const findItem = items.find((i) => i.name == itemName);
//   if (!findItem) return console.log("その商品は存在しません。");
//   if (pay < findItem.price) return console.log("お金が足りません。");
//   const change = pay - findItem.price;
//   console.log(findItem.name + "をお買い上げありがとうございます。");
//   if (change <= 0) {
//     return console.log("お釣りはありません。");
//   }
//   console.log("お釣りは" + change + "円になります。");
// })

// function say(phrase, who) {
//   alert(phrase + '.' + who);
// }
// setTimeout(say, 2000, 'HELLOW', 'COACHTECH');

// const user = {
//   name: '井上純',
//   age: 49,
//   say: function () { console.log(this.name + '所長') },
// };

// user.say();

// const school = {
//   name: "COACHTECH",
//   month: 2,
//   skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
//   createSentense() {
//     COACHTECHは+(this.month)+カ月で(this.skills[0]+と)
//   },
// };

// console.log(school.createSentense());

// const school = {
//   name: "COACHTECH",
//   month: 2,
//   skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
//   createSentense() {
//     let data;
//     this.skills.forEach((skill, index) => {
//       if (index == 0) {
//         data = skill;
//       } else {
//         data = `${data}と${skill}`;
//       }
//     });
//     return `${this.name}は${this.month}ヶ月で${data}を学ぶことができます`;
//   },
// };

// console.log(school.createSentense());

// const test = ['国語', '数学', '英語'];
// test.push('理科');
// console.log(test);
// test.push('社会');
// console.log(test);
// console.log(test.length);

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log('Fizz')
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else if (i % 3 == 0 && i % 5 == 0) {
//     console.log('FizzBuzz');
//   } else{
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

let water = 1000;
const drinkWater = 180;
while (water > 0) {
  console.log(water);
  water = water - drinkWater;
}
console.log('水を飲み干した');

// let water = 1000;
// const drinkWater = 180;
// while (water > 0) {
//   console.log(water);
//   water = water - drinkWater;
// }
// console.log("水を飲み干した");