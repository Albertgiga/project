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

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert('Вы класическй зритель');
} else if (personalMovieDB.count >= 30){
    alert('Вы кономан');
} else {
    alert('Произошла ошибка');
}
let i = 0;

for(let j = 0; j < 2; j++){
    let a = prompt('Один из последних просмотрених фильмов', '');
    let b = prompt('Оценка фильма', '');
    if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}
do{
    let a = prompt('Один из последних просмотрених фильмов', '');
    let b = prompt('Оценка фильма', '');
    i++;
    if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}
while(i < 2);


while(i < 2){
    let a = prompt('Один из последних просмотрених фильмов', '');
    let b = prompt('Оценка фильма', '');
    i++;
    if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}

console.log(personalMovieDB);