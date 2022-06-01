function verdadero(){
    return true
};

const v = verdadero();

console.log(v);
////
function promesa(){
    return setTimeout(() => {
        console.log("Hola soy una promesa");
    }, 5000);
};

promesa();
////
function* generaPar(){
    let i = 0;
    while(true){
        yield i += 2;
    }
};
const gen = generaPar();

console.log(gen.next())
console.log(gen.next())