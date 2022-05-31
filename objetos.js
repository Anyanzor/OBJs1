const obj1 = {
    nombre: "Deborah", apellido: "Anzor", edad: 20, altura: 1.73, eresDesarrollador: true
};

let miEdad = obj1.edad;
console.log(miEdad);

let lista = [
    obj1,
    {nombre: "Mariano", apellido: "Cabral", edad: 19, altura: 1.80, eresDesarrollador: false},
    {nombre: "Ezequiel", apellido: "Muriel", edad: 25, altura: 1.70, eresDesarrollador: false}
];

let listaOrdenada = lista.sort((a, b)=> (-a.edad + b.edad));
console.log(listaOrdenada);