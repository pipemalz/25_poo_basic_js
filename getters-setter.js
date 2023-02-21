class Course{
    constructor({name, classes = []}){
        this._name = name;
        this._classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if(newName.match(/^[a-z][a-z ]+[a-z]$/im)){
            this._name = newName;
        }else console.error('Nombre incorrecto');
    }

    get classes(){
        return this.classes;
    }

    set classes(classesArr){
        if(typeof(classesArr) === 'object'){
            this._classes = classesArr;
        }
    }
}

const cursoProgramacionBasica = new Course({
    name : "Curso de programacion basica"
})

console.log(cursoProgramacionBasica.name)

cursoProgramacionBasica.name = 'Curso de manipulacion de Arrays';

console.log(cursoProgramacionBasica.name)

function Student({name, points = 0}){
    this._name = name;
    this._points = points;
}

Student.prototype = {
    constructor : Student,
    get name(){
        return this._name;
    },
    set name(newName){
        this._name = newName;
    }
}

const angel = new Student({name: 'Angel Revilla', points: 2000})

console.log(angel.name)

angel.name = 'Angel David Revilla';

console.log(angel.name)
