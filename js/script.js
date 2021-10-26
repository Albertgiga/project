"use strict";

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt('Сколько вам лет?', '');
//console.log(answer);
// вся информация от пользователя - це тип string

const answers = [];

answers[0] = prompt('Как ваше имя?');
answers[1] = prompt('Как ваше фамилия?');
answers[2] = prompt('Сколько вам лет?');

alert(`Привет, ${answers[0]} ${answers[1]}. Тебе ${answers[2]} лет`);

