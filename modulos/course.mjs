export class Course{
    constructor({
        name, 
        teacher, 
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this.name = name;
        this.teacher = teacher;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    addLesson(newLesson){
        this.classes.push(newLesson)
    }
}
