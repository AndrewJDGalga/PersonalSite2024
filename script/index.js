/* --pending projects
const hook = document.getElementById("what-do__game-containers");
const ENGINES = Object.freeze({ UNITY: "./data/engine_icons/unity.svg", GODOT:"../data/engine_icons/godot.svg"});

class WorkBento {
    constructor({parentElement, imagePath="", engine="", blurb="", codeLink="", playLink=""}){
        Object.keys(ENGINES).forEach(element => {
            if(engine.toUpperCase() === element) this.engineImagePath=engine;
        });
        this.imagePath = imagePath;
        this.blurb = blurb;
        this.codeLink = codeLink;
        this.playLink = playLink;
        this.parentElement = parentElement;
    }
    getBox(){
        const bod = document.createElement("div");
        bod.appendChild(this.getImage());
        this.parentElement.appendChild(bod);
    }
    getImage(){
        const img = document.createElement("img");
        img.src = this.imagePath;
        return img;
    }
}

const testImagePath = "./data/photos/gameTestImage.jpg";
const testBox = new WorkBento({parentElement:hook, imagePath:testImagePath});
testBox.getBox();*/