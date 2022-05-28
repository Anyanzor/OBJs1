let name = "Deborah";

let surname = "Anzor";

let estudiante = name.concat(" " + surname);;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let largo = estudiante;
console.log(largo.length);

let firtsLetter = name.startsWith("D");
console.log(firtsLetter);

let lastLetter = surname.endsWith("r");
console.log(lastLetter);

let cadena = estudiante.replace(" ", "");
console.log(cadena);

let boolean = estudiante.includes(name);
console.log(boolean);