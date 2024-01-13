const hook = document.getElementById("what-do__game-containers");
const ENGINES = Object.freeze({ UNITY: "./data/engine_icons/unity.svg", GODOT:"../data/engine_icons/godot.svg"});

class WorkBento {
    constructor({image, engine, blurb, codeLink, playLink}){
        
    }
}

const testImage = document.createElement('img');
testImage.src = ENGINES.UNITY;
hook.append(testImage);