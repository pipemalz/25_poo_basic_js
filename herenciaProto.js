function Student({
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

const FreeStudent = Student;
FreeStudent.prototype = {
    constructor: Student,
    approvateCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn(`Lo siento, ${this.name}, solo puedes tomar cursos gratuitos`);
        }
    }
}

const felipe = new FreeStudent({
    name : "Felipe Moreno", 
    username : "pipemalz",
    points: 12195,
    learningPaths : [
        htmlyCssAProfundidad
    ]
})

felipe.approvateCourse(cursoBasicoPooJS)
felipe.approvateCourse(cursoProgramacionBasica)