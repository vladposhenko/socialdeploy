// debugger;

// console.log(repeatStr("5, M")); 

// function repeatStr (n, s) {
//     var result = ''
//     for(i = 0; i < n; i++){
//       result += s[i]
//     }
//     return result
// }

// arr = [1, -2, 5, -2, 2]
// sum = 0;
// debugger;
//   for(i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//       sum += arr[i];
//     }else {
//       sum = sum;
//     }
//   }

//   console.log(sum);

// function getMiddle(s)
// {
//   debugger;
//   var arr = s.split("");
//   while (arr.length > 2) {
//     arr.pop();
//     arr.shift();
//   }
//   return arr.join("");
// }


// function mergeArrays(arr1, arr2) {
//    var result =  arr1.concat(arr2);
//    result = result.sort((a, b) => a - b);
//    var sortResult = Array.from(new Set(result)) 
//    return sortResult;
// }

// console.log(mergeArrays([1,3,5,7,9,11,12],[1,2,3,4,5,10,12]));


// function mergeStrings(first, second){
//    debugger;
//    var resultString = first + second;
//    resultString = resultString.split("");
//    var arr = [];
//    for(i = 0;i < resultString.length; i++){
//      if(first[i] === second[i]){
//        arr.push(resultString[i]);
//      }
//    }
//    arr = arr.join("");
//    return arr;
//  }


// console.log(mergeStrings("abcde","cdefgh"));



// function squareSum(numbers){
//    var result = 0;
//    for(i = 0; i < numbers.length; i++){
//      result +=  Math.pow(numbers[i],2);
//  }
//    return result;
// }


// console.log(squareSum([1,2,2]));


// function isDigit(s) {
//    debugger;
//    s = parseInt(s);
//    if(s.length > 1 || !isNaN(s)){
//      return "false"
//    } else {
//      return "true"
//    }
   
//  }

// console.log(isDigit("-10 5"));


// animals = [
//   ["cat" , 2],
//   ["dog" , 2],
//   ["mamont" , 2],
// ]

// humanKoef = 4;



// function createArray(list) {
//     debugger;
//   arr1 = [];
//   arr2 = []
//   for(let i = 0; i < list.length; i++){
//       for(let j = 0; j < list[i].length; j++){
//         arr1.push(list[i][j])
//       }
//       arr2.push(arr1);
//   }

// }

// function getRealAnimalAge(list,value) {
//     for(i = 0; i < list.length; i++){
//       list[i][1] *= value;
//     }
// }

// function renderList(list) {

//     listArray = [];
//     for(i = 0; i < list.length; i++){
//       listArray.push(`<li>${list[i].join(": ")}</li>`);
//     }
//     document.write(`<ul>${listArray.join("")}</ul>`);
// }

// newAnimals = createArray(animals);
// getRealAnimalAge(newAnimals, humanKoef);
// renderList(animals);
// console.log(animals);
// console.log(newAnimals);



// function f1() {
//   var count = 0;
//   return function f2() {
//       return count++;
//   }
// }


// let a = f1();


// Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, а третьим параметром функцию, которая возводит в куб. Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа


// function ggg(num,a,b) { return a(num) + b(num) };
// let square = function f1(c) {
//     return Math.pow(c,2);
// }
// let cub = function f2(c) {
//     return Math.pow(c,3);
// }

// console.log(ggg(3,square,cub));


// FUNCTION DECLARATION

// console.log(sum(10));

// function sum(num) { return num ** 2; }

// FUNCTION EXPRESSION


// const sum = function (num) { return num ** 2; }


// console.log(sum(10));


// const fib = [1, 2, 3, 5, 8, 13]

// for(let i = 0; i < fib.length; i++) {
//   setTimeout(() => {
//       console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);
// }

// В функцию передается массив, функция  должна вернуть сумму всех нечетных чисел больше 0


// function getSumOdd(arr1) {
//   let sum = 0;
//   for(i = 0; i < arr1.length; i++){
//     if (arr1[i] % 2 !== 0 && arr1[i] > 0)  sum += arr1[i];
//   }
//   return sum;
// }

// console.log(getSumOdd([5, 0, -5, 20, 88, 17, -32]));


// function check(arr, num) {
//   debugger;
//     let sum = 0;
//     for(i = 0; i < arr.length; i++){
//       sum = 0;
//       sum += arr[i] + arr[i+1]
//       if(arr[arr.length]) break;
//       if (sum === num) {
//           return true;
//       } else {
//         return false;
//       }
//     }
// }


// console.log(check([10, 15, 3, 7] , 17));
// console.log(check([10, 15, 3, 7] , 20));


// function fibonachi (num) {
//   let arr1 = [];
//   for(let i = 0; i < num; i++) {
//     if(i === 0) arr1[i] = 1;
//     else if (i === 1) arr1[i] = 2;
//     else arr1[i] = arr1[i - 2] + arr1[i - 1];
//   }
//   return arr1;
// }

// console.log(fibonachi(10));


// function getFactorial(num) {
//   let multiply = 1;
//   for(let i = 0; i < num; i++){
//      multiply += multiply * i;
//   }
//   return multiply;
// }

// let f1 = getFactorial(0);

// console.log(f1);


// function iWantToGet(amount) {
  
//   const notes = [100, 50, 20, 10];
//   let result = [];

//   for(i = 0; i < notes.length; i++) {
//       if(notes[i] / amount){

//       }
//   }

// }


// console.log(iWantToGet(160));


// const date = new Date().getFullYear();
// console.log(date);

// let obj1 = {
//     l:10,
//     m:20
// }

// Object.defineProperty(obj1, 'vlad', {
//     value:50,
//     writable:false,
//     enumerable:true,
//     configurable: true
// })

// delete obj1.l

// for(key in obj1) {
//     console.log(key);
// }

// obj1.l = 100;

// console.log(obj1);

// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
//   }
  
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();
//   c 

// Римские цифры обычно пишутся слева направо от большего к меньшему. Однако цифра четыре не IIII. Вместо этого цифра четыре пишется как IV. Так как единица предшествует пятерке, мы вычитаем ее и получаем четыре. Тот же принцип применим к числу девять, которое пишется как IX. Есть шесть случаев, когда используется вычитание:

// I можно поставить перед V (5) и X (10), чтобы получились 4 и 9.
// X можно поставить перед L (50) и C (100), чтобы получилось 40 и 90.
// C можно поставить перед D (500) и M (1000), чтобы получились 400 и 90.

// const romanNumbers = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 100,
// }

// // XX
// function romanToNum(romanNum) {
//     let result = 0;
//     let romanarr = romanNum.split('');
//     for(key in romanNumbers) {
//         romanarr.forEach(num => {
//             if(num === key) {
//               result += romanNumbers[key]
//             }
//         });
//     }
//     return result
// }

// console.log(romanToNum('MCMXCIV'));


// function maxTriSum(numbers){
//   return  numbers
//   .sort((a,b) => a - b )
//   .slice(-3)
//   .reduce((acum, current) => acum + current )
// }
// console.log(maxTriSum([3,2,6,8,2,3]));


// function tidyNumber(n){
//     let count = null;
//     let a = n.toString().split("")
//     if(a.length === 1) {
//       return true
//     }
//     for(i = 0; i < a.length; i++) {
//       let prevNum = +a[i - 1];
//       let currentNum = +a[i];
//       if(currentNum >= prevNum) {
//           count++
//       }
//     }
//     return count === a.length-1 ? true : false
    
// }

// console.log(tidyNumber(13579));


// function isNegativeZero(n) {
//   return Object.is(n, -0);
// }

// // console.log(isNegativeZero(0));

// const test = document.querySelector("#test")
// const block1 = document.querySelector("#block1")
// const block2 = document.querySelector("#block2")

// test.onclick = event => {
//     // event.stopPropagation()
//     console.log(event.target);
// }


// block1.onclick = event => {
//     // event.stopPropagation()
//     console.log(event.target);
// }

// block2.onclick = event => {
//     event.stopPropagation()
//     console.log(event.target);
// }

// function bump(x){
//     let arr = x.split("")
//     let result = arr.filter((item) =>  item === 'n')
//     console.log(result)
//     return result.length > 15 ? "Car Dead" : "Woohoo!"
// }

// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"))


// function orderedCount (text) {
//     letters = text.split("")
//     var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)
//     console.log(uniqs);
//     return uniqs.map((letter) => {
//         debugger;
//         return [letter, text.split(letter).length - 1]
//     })
// }    


// console.log(orderedCount('abracadabra'));
  


// text = 'abracadabra'

// console.log(text.split("a"));

// console.log(new Set);
// let hasUniqueChars = (str) => new Set(str).size === str.length;


// console.log(hasUniqueChars("  nAa"));
// console.log(hasUniqueChars("abcdef"));

// const entries = [
//     ['name', 'lalas'],
//     ['age', 5]
// ]

// const map = new Set(entries)
// console.log(map);


// function findShort(s){
//     let arr = s.split(" ")
//             .sort((a, b) => a.length - b.length)
//     return arr[0].length
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));



// function arrAdder(arr) {
//     return arr;
// }

// console.log(arrAdder([
//     ['J','L','L','M'],
//     ['u','i','i','a'],
//     ['s','v','f','n'],
//     ['t','e','e','']
//     ]));

// let parse = jsnObj => JSON.parse(jsnObj)

// function getResponse (action, func) {
//     let xml = new XMLHttpRequest();
//     xml.open("GET", action)
//     xml.send()
// }


// function modifyMultiply (str,loc,num) {
//     let arr = str.split(" ")
//     let repeatedWord = '';
//     let resultArr = []
//     console.log(arr)
//     arr.forEach((item, index) => { 
//         if(index === loc) {
//             repeatedWord = item;
//             for(let i = 0; i < num; i++){
//                 resultArr.push(repeatedWord);
//             }
//         } 
//      })
//      return resultArr.join("-");
// } 



function modifyMultiply (str,loc,num) {
    return new Array(num).fill(str.split(" ")[loc]).join("-");
} 

console.log(modifyMultiply("This is a string",3 ,5));
