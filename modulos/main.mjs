import { PlatziClass } from "./platziClass.mjs";
import { Course } from "./course.mjs";
import { LearningPath } from "./learningPath.mjs";
import { FreeStudent } from "./freeStudent.mjs";
import { BasicStudent } from "./basicStudent.mjs";
import { ExpertStudent } from "./expertStudent.mjs";
import { TeacherStudent } from "./teacherStudent.mjs";

const clase001 = new PlatziClass({
    name : "Módulos de ECMAscript 6",
    videoID : "9f8dgki342dfsg987"
})

// // videoPlay(clase001.videoID); No puedo utilizar esta funcion porque no la exporte desde el modulo, por lo tanto esta protegida.
// clase001.reproducir();
// clase001.pausar();

const cursoBasicoPooJS = new Course({name: "Curso Básico de Programación Orientada a Objetos con JavaScript", teacher : "JuanDC"});
cursoBasicoPooJS.addLesson(clase001);
const cursoIntermedioPooJS = new Course({name: "Curso Intermedio de Programación Orientada a Objetos con JavaScript", teacher: "JuanDC"});
const cursoFrontendDev = new Course({name: "Curso de Frontend Developer", teacher: "Estefany Aguilar", lang: "english"});
const cursoPracticoFrontendDev = new Course({name: "Curso Practico de Frontend Developer", teacher : "Estefany Aguilar"})
const cursoProgramacionBasica = new Course({name: "Curso de Programación básica", teacher: "Freddy Vega", isFree : true})

const javascriptAProfundidad = new LearningPath({
    name: "JavaScript a profundidad", 
    courses : [cursoProgramacionBasica, cursoBasicoPooJS, cursoIntermedioPooJS]
})

const htmlyCssAProfundidad = new LearningPath({
    name : "HTML y CSS a profundidad",
    courses : [cursoProgramacionBasica, cursoFrontendDev, cursoPracticoFrontendDev]
})

// export const felipe = new FreeStudent({
//     name : "Felipe Moreno", 
//     username : "pipemalz",
//     points: 12195,
//     learningPaths : [
//         htmlyCssAProfundidad
//     ]
// })

// felipe.approvateCourse(cursoBasicoPooJS)
// felipe.approvateCourse(cursoProgramacionBasica)

// console.log(felipe)

// const miguel = new BasicStudent({
//     name : "Miguel Flores", 
//     username : "miguelucho",
//     points: 23,
//     learningPaths : [
//         javascriptAProfundidad,
//         htmlyCssAProfundidad
//     ]
// })

// miguel.approvateCourse(cursoFrontendDev);
// miguel.approvateCourse(cursoPracticoFrontendDev)

const ana = new ExpertStudent({
    name : "Ana Tamacho", 
    username : "anatam92",
    points: 20002,
    learningPaths : [
        javascriptAProfundidad,
        htmlyCssAProfundidad
    ]
})

// ana.approvateCourse(cursoBasicoPooJS);
// ana.approvateCourse(cursoFrontendDev);

// console.log(`Ana: ${ana}`)

const freddy = new TeacherStudent({
    name : "Freddy Vega", 
    username : "freddier",
    points: 1000000,
    socialMedia : {
        twitter: 'twitter.com/freddier',
        instagram: 'instagram.com/freddier',
    },
    learningPaths : [
        javascriptAProfundidad,
        htmlyCssAProfundidad
    ]
})

freddy.comment(`Madre mia chavá.`);

ana.comment(`Hi, boy`)

console.log(freddy)