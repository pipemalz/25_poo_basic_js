// En este reto dada la siguiente clase:

// export class Course {
//   constructor({
//     name,
//     classes = [],
//   }) {
//     this.name = name;
//     this.classes = classes;
//   }

//   get name() {

//   }

//   set name(nuevoNombrecito) {

//   }
// }

// Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

// Que sea de tipo string.
// Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
// Si no es un string no se cambia el valor de la propiedad name.
// La solución debería tener un input y output como los siguientes:

// Input

// const courseName = "curso de programación básica"
// const nombreMaysuculas = new Course({
//     name: courseName,
// })
// nombreMayusculas.name

// Output

// 'Curso de Programación Básica'

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === "string") {
        const nuevoNombrecitoMayus = nuevoNombrecito.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ").trim();
      this._name = nuevoNombrecitoMayus;
    }else{
        console.log("Nombre invalido")
    }
  }
}

// class Course {
//     constructor({
//       name,
//       classes = [],
//     }) {
//       this.name = name;
//       this.classes = classes;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(nuevoNombrecito) {
//       if (typeof nuevoNombrecito === "string") {
//         nuevoNombrecito = nuevoNombrecito.trim()
//         if (nuevoNombrecito.length !== 0) {
//           let words = nuevoNombrecito.split(" ")
//           let nuevoNombrecitoMayusculas = words.map((word) => {
//             return word[0]?.toUpperCase() + word.substring(1);
//           }).join(" ")
//           this._name = nuevoNombrecitoMayusculas
//         }
//       }
//     }
//   }

const courseName = "curso de programación básica";
const nombreMayusculas = new Course({
  name: courseName,
});
console.log(nombreMayusculas.name)
