import { Student } from "./student.mjs";

export class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }
    approvateCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}