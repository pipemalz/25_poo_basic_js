const felipe = {
  name: "Felipe",
  apellidos: "Moreno Alzate",
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso basico de JavaScript",
  ],
  //   aprobarCurso : function(curso){
  //     this.cursosAprobados.push(curso);
  //   }
  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  },
};

felipe.cursosAprobados.push("Curso basico de POO con JavaScript");
felipe.aprobarCurso("Curso de Azure");

console.log(felipe);