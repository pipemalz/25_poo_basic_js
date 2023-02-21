import { Student } from "./student.mjs";

export class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
    approvateCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn(`Lo siento, ${this.name}, solo puedes tomar cursos gratuitos`);
        }
    }
}