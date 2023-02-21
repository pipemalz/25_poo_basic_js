import { Student } from "./student.mjs";

export class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approvateCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn(`Lo siento, ${this.name}, no puedes tomar cursos en ingles`);
        }
    }
}