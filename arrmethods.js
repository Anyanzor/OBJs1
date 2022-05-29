let compra = ["Leche","Huevos","Azúcar","Yogurt","Harina"];

compra.push("Aceite de Girasol");
console.log(compra);

compra.pop();
console.log(compra);

let favouriteMovies = [
    {title: "Inglourious Basterds", director: "Quentin Tarantino", date: new Date("may 20 2009")},
    {title: "The Imitation Game", director: "Morten Tyldum", date: new Date("august 29 2014")},
    {title: "A Clockwork Orange", director: "Stanley Kubrick", date: new Date("december 19 1971")},
];

var f1 = new Date("january 1 2010");
let pDate = favouriteMovies.filter(obj => obj.date > f1);
console.log(pDate);

let array = favouriteMovies.map(directors => directors.director);
console.log(array);

let array1 = favouriteMovies.map(titles => titles.title);
console.log(array1);

let array2 = array.concat(array1);
console.log(array2);

arr = [...array, ...array1];
console.log(arr);