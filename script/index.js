const hook = document.getElementById("what-do__game-containers");
const ENGINES = Object.freeze({ UNITY: "./data/engine_icons/unity.svg", GODOT:"../data/engine_icons/godot.svg"});

class WorkBento {
    constructor({imagePath="", engine="", blurb="", codeLink="", playLink=""}){
        Object.keys(ENGINES).forEach(element => {
            if(engine.toUpperCase() === element) this.engineImagePath=engine;
        });
        this.imagePath = imagePath;
        this.blurb = blurb;
        this.codeLink = codeLink;
        this.playLink = playLink;
    }
}

//const testBento = new WorkBento({engine:"GODOT"});
/*
const testImage = document.createElement('img');
testImage.src = ENGINES.UNITY;
hook.append(testImage);
*/