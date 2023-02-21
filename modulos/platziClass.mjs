function videoPlay(id){
    const urlSecreta = `https://platzisecreto.com/${id}`;
    console.log(`Se esta produciendo desde la URL: ${urlSecreta}`)
}

function videoStop(id){
    const urlSecreta = `https://platzisecreto.com/${id}`;
    console.log(`Pausamos la URL: ${urlSecreta}`)
}

export class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID)
    }
}