"use strict";

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt('Сколько вам лет?', '');
//console.log(answer);
// вся информация от пользователя - це тип string
// з допомогою 5 + +"3" з строки можна зробити число

//const answers = [];

//answers[0] = prompt('Как ваше имя?');
//answers[1] = prompt('Как ваше фамилия?');
//answers[2] = prompt('Сколько вам лет?');

//alert(`Привет, ${answers[0]} ${answers[1]}. Тебе ${answers[2]} лет`);

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     alert('Вы класическй зритель');
// } else if (personalMovieDB.count >= 30){
//     alert('Вы кономан');
// } else {
//     alert('Произошла ошибка');
// }
// let i = 0;

// for(let j = 0; j < 2; j++){
//     let a = prompt('Один из последних просмотрених фильмов', '');
//     let b = prompt('Оценка фильма', '');
//     if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }  
// }
// do{
//     let a = prompt('Один из последних просмотрених фильмов', '');
//     let b = prompt('Оценка фильма', '');
//     i++;
//     if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }  
// }
// while(i < 2);


// while(i < 2){
//     let a = prompt('Один из последних просмотрених фильмов', '');
//     let b = prompt('Оценка фильма', '');
//     i++;
//     if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }  
// }

// console.log(personalMovieDB);

//                  FUNCTION

// getModule(10, 1);

// function getModule(x, y){
//     return console.log(x + y);
// }
// //function declaretion - можна обявлять перед созданием


// let fun = function(){
//     return 10 + 2;
// };
// //function expression - можна обявлять после созданием
// console.log(fun());

// const calc = a => a * a;
// console.log(calc(12));

// const calcul = (a, b) => {
//     console.log('1');
//     return console.log((a * (b + a)));
// };

// calcul(4, 6);


//                      METHODS AND PROPERTIES

let test = 'test';

console.log(test.toLocaleUpperCase());

const car = 'I live in Britan. And I have buetiful car Porshe';

console.log(car.indexOf('car'));

console.log(car.slice(38, 48));

console.log(car.substring(38, 48));

console.log(car.substr(38, 10));

const num = 12.5;
console.log(Math.round(num));

const text = '12.72px';
console.log(parseInt(text));
console.log(parseFloat(text));

//                              Callback Function

function first() {
    setTimeout(function() {
        console.log('1');
    }, 500);
}

function second() {
    console.log('2');
}

first();
second();

function learnJS(lang, callback){
    console.log(`Я учу язик ${lang}`);
    callback();
}

function done(){
    console.log('Done');
}

learnJS('JavaScript', done);

//                                  OBJECT, DESTRACTIONS OF OBJECTS

const options = {
    name: '',
    witdh: 1200,
    height: 900,
    speed: 10,
    mph: 6,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test completed');
    }
};

options.makeTest();

const {border, bg} = options.colors;

console.log(border);

console.log(Object.keys(options).length);

// console.log(options["colors"]["bg"]);

delete options.witdh;

for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство: ${i} имеет значение: ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство: ${key} имеет значение: ${options[key]}`);
    }
}

//                                  ARRAY AND PSARRAY

const arr = [1, 2, 15, 27, 8];

arr.sort(compare);
console.log(arr);

function compare(a, b){
    return a - b;
}

// console.log(arr.length);
// console.log(arr)

arr.forEach(function (item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop();
// arr.push(12);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

for (let key of arr){
    console.log(key);
}

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));

//                              COPYFOR URL OR VALUE

let a = 5,
    b = a;

b = 10;

// console.log(b);
// console.log(a);

function copy(mainObj) {
    let objCopy = {};
     
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 5,
    b: 3,
    c: {
        x: 2,
        y: 8
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    z: 5,
    q: 17
};

const clone = Object.assign({}, add);

clone.z = 10;

console.log(add);
console.log(clone);

const oldArray = ['a', 'v', 'f'];
const newArray = oldArray.slice();

newArray[1] = 'asdasdfa2w';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'tik-tok'],
      blogs = ['wordpress', 'time'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num1 = [1, 5, 8];
log(...num1);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
