import { Comment } from "./comment.mjs";

export class Student{
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
    comment(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.publicar();
    }
}