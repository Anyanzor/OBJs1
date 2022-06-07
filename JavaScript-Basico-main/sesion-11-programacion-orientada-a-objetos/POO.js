class Estudiante {
    nombre = 'Anya';
    asignaturas = ['Javascript', 'HTML', 'CSS'];

    obtenDatos(){
        return{
            nombre: this.nombre,
            asignaturas: this.asignaturas
        };
    };
}

const student = new Estudiante;

console.log(student.obtenDatos());