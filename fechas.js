let date = new Date ();
console.log(date);

let birthday = new Date(2001, 8, 7);
console.log(birthday);

let currentDay = date > birthday;
console.log(currentDay);

let birthDay = birthday.getDate();
console.log(birthDay);

let birthMonth = birthday.getMonth();
console.log(birthMonth + 1);

let birthYear = birthday.getFullYear();
console.log(birthYear); 