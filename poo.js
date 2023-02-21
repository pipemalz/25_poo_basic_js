class Lesson{

}

class Course{
    constructor({name, teacher, lessons = []}){
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }
    addLesson(lesson){
        this.lessons.push(lesson)
    }
}

class LearningPath{
    constructor({name,courses = []}){
        this.name = name;
        this.courses = courses;
    }
}

class Student{
    constructor({
        name,
        username,
        points,
        socialMedia = {},
        approvedCourses = [],
        learningPaths = []
    }){
        this.name = name;
        this.username = username;
        this.points = points;
        this.socialMedia = socialMedia;
        this.approvedCourses = approvedCourses ;
        this.learningPaths = learningPaths;
    }
}

const cursoBasicoPooJS = new Course({name: "Curso Básico de Programación Orientada a Objetos con JavaScript", teacher : "JuanDC"});
const cursoIntermedioPooJS = new Course({name: "Curso Intermedio de Programación Orientada a Objetos con JavaScript", teacher: "JuanDC"});
const cursoFrontendDev = new Course({name: "Curso de Frontend Developer", teacher: "Estefany Aguilar"});
const cursoPracticoFrontendDev = new Course({name: "Curso Practico de Frontend Developer", teacher : "Estefany Aguilar"})
const cursoProgramacionBasica = new Course({name: "Curso de Programación básica", teacher: "Freddy Vega"})

const javascriptAProfundidad = new LearningPath({
    name: "JavaScript a profundidad", 
    courses : [cursoProgramacionBasica, cursoBasicoPooJS, cursoIntermedioPooJS]
})

const htmlyCssAProfundidad = new LearningPath({
    name : "HTML y CSS a profundidad",
    courses : [cursoProgramacionBasica, cursoFrontendDev, cursoPracticoFrontendDev]
})

const felipe = new Student({
    name : "Felipe Moreno", 
    username : "pipemalz",
    points: 12195,
    approvedCourses : [
        cursoBasicoPooJS,
        cursoIntermedioPooJS,
        cursoFrontendDev,
        cursoProgramacionBasica
    ],
    learningPaths : [
        javascriptAProfundidad,
        htmlyCssAProfundidad
    ]
})


console.log(felipe)