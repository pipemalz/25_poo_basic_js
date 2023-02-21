export class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'student'
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(`${this.studentName}  (${this.studentRole})
        ${this.likes} likes
        ${this.content}`);
    }
}