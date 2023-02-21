//Prototipos con la sintaxis de clases, asi es, "class" es sintaxis que no crea clases sino prototipos, porque si, en javascript todo son prototipos. Lo que pasa es que en ES6 decidieron implementar esta sintaxis para que fuese mas familiar su uso y parecido a otros lenguajes, en el contexto de programacion orientada a objetos.

class Contrato {
  //funcion Constructora
  constructor(anio, tipo, consecutivo) {
    this.anio = anio;
    this.tipo = tipo;
    this.consecutivo = consecutivo;
    //forma 1 de crear un metodo al prototipo dentro de class (Al definir un metodo dentro de la funcion constructora, este no quedara dentro de __proto__)
    this.radicarContrato = function (fecha) {
      this.fecha = fecha;
    };
  }

  //forma 2 de crear un metodo al prototipo dentro de class
  iniciarContrato(fecha) {
    this.fechaInicio = fecha;
  }
}

const miCtr = new Contrato(2022, "CA", "0004");

miCtr.radicarContrato("01/01/2021");
miCtr.iniciarContrato("10/01/2021");

console.log(miCtr);

//Patron RORO “Receive an object, return an object” (Recibe un objeto, devuelve un objeto). Nos ayuda cuando tenemos muchos parámetros en nuestro constructor, ya que al instanciar la clase debemos acordarnos del orden de los parámetros y, además, no podemos tener parámetros por defecto.No obstante, si recibimos un objeto, sí podemos poner parámetros por defecto y no recibir un parámetros si fuere el caso, sin que pase nada. A la hora de enviar los argumentos al instanciar la clase, también debe enviarse un objeto, y otra ventaja es que esos argumentos no hace falta que estén en el mismo orden que están los parámetros del constructor. ¡Prácticamente son todo ventajas! 😃

// class Student {
//   constructor({
//     name,
//     age,
//     cursosAprobados = [],
//     email,
//     facebook = 'No especificado',
//     twitter = 'No especificado',
//     instagram = 'No especificado',
//   }) {
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
//     this.email = email;
//     this.facebook = facebook;
//     this.twitter = twitter;
//     this.instagram = instagram;

//     console.log(`Creaste un instancia de Student`)
//   }
// }

// const miguelito = new Student({
//   name: "Miguel",
//   twitter: "twitter.com/miguelito",
//   cursosAprobados: ["POO", "JavaScript"],
//   age: 28,
//   facebook: "facebook.com/miguelito",
//   email: "miguelito@gmail.com"
// });

// console.log(miguelito);
