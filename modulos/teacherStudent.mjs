import { Student } from "./student.mjs";
import { Comment } from "./comment.mjs";

export class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    approvateCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    comment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'teacher'
        })
        comment.publicar();
    }
}