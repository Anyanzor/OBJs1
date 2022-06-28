let nombre = "Deborah";
let apellido = "Anzor";

let datos = {
    nombre,
    apellido
};

sessionStorage.setItem("datos", JSON.stringify(datos));
localStorage.setItem("datos", JSON.stringify(datos));

let time = new Date();
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(time.getTime() + 2 * 60000)}`;