//Crear un prototipo con funcion constructora
function Person(name, edad, cursosAprobados) {
    this.name = name;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
    //forma 1 de crear un metodo al prototipo (Al definir un metodo dentro de la funcion constructora, este no quedara dentro de __proto__)
    // this.aprobarCurso = function(curso){
    //     this.cursosAprobados.push(curso)
    // }
    console.log(`Creaste un instancia de Person!
    Nombre: ${this.name}
    Edad: ${this.edad}
    cursosAprobados: ${this.cursosAprobados.map(curso=> curso)}
    `)
  }
  //forma 2 de crear un metodo al prototipo
  Person.prototype.aprobarCurso = function (curso) {
    this.cursosAprobados.push(curso);
  };
  
  const juanita = new Person("Juanita Campo", 20, [
    "Curso de manipulacion de arrays js",
    "Curso de introduccion a la produccion de videojuegos"
  ]);
  
  
  
  //Otro ejemplo de prototipo
  function Vehiculo(tipo, placa, conductor){
      this.tipo = tipo;
      this.placa = placa;
      this.conductor = conductor;
  }
  Vehiculo.prototype.pintarCarro = function (color){
      this.color = color;
  }
  
  const toyota = new Vehiculo('Camioneta','ABF671','Daniel Morales');
  toyota.pintarCarro('azul');
  
  console.log(toyota)