const portfolio_web_btn = document.getElementById("home_grid--web--reveal");
const portfolio_web_sect = document.getElementById("home_grid--web--work");

const portfolio_game_btn = document.getElementById("home_grid--game--reveal");
const portfolio_game_sect = document.getElementById("home_grid--game--work");

const data_source = "data/content.json";


const createItemContainer = (elementType, cssClass) => {
    const itemContainer = document.createElement(elementType);
    itemContainer.classList.add(cssClass);
    return itemContainer;
}

const createItemImage = (fileLocation, altText, cssClass) => {
    const itemImage = document.createElement('img');
    itemImage.src = fileLocation;
    itemImage.alt = altText;
    itemImage.classList.add(cssClass);
    return itemImage;
}

const createItemLink = (linkText, linkDestination, cssClass=null) => {
    const itemLink = document.createElement('a');
    itemLink.innerText = linkText;
    itemLink.href = linkDestination;
    if(cssClass) {
        itemLink.classList.add(cssClass);
    }
    return itemLink;
}

const createItemTitle = (linkText, linkDestination) => {
    const itemHeader = document.createElement('h3');
    itemHeader.appendChild(createItemLink(linkText, linkDestination));
    return itemHeader;
}

const createItemBlurb = (blurb) =>{
    const itemBlurb = document.createElement('p');
    itemBlurb.innerText = blurb;
    return itemBlurb;
}

const createWebSection = (jsonObj) => {
    //console.log(jsonObj.web[1].photoLocation);
    for(let i = 0; i < Object.keys(jsonObj.web).length;i++) {
        const itemContainer = createItemContainer('div', 'scroll_item');
        itemContainer.appendChild(createItemImage(jsonObj.web[i].photoLocation, jsonObj.web[i].photoAlt, 'scroll_item--photo'));
        itemContainer.appendChild(createItemTitle(jsonObj.web[i].title, jsonObj.web[i].titleLink));
        itemContainer.appendChild(createItemBlurb(jsonObj.web[i].blurb));
        itemContainer.appendChild(createItemLink(jsonObj.web[i].buttonText, jsonObj.web[i].buttonLink,'link-button'));

        portfolio_web_sect.appendChild(itemContainer);
    }
}

const createGameSection = (jsonObj) => {
    //console.log(jsonObj.web[1].photoLocation);
    for(let i = 0; i < Object.keys(jsonObj.game).length;i++) {
        const itemContainer = createItemContainer('div', 'scroll_item');
        itemContainer.appendChild(createItemImage(jsonObj.game[i].photoLocation, jsonObj.game[i].photoAlt, 'scroll_item--photo'));
        itemContainer.appendChild(createItemTitle(jsonObj.game[i].title, jsonObj.game[i].titleLink));
        itemContainer.appendChild(createItemBlurb(jsonObj.game[i].blurb));
        itemContainer.appendChild(createItemLink(jsonObj.game[i].buttonText, jsonObj.game[i].buttonLink,'link-button'));

        portfolio_game_sect.appendChild(itemContainer);
    }
}

const data_content = async () => {
    await fetch(data_source)
        .then((response)=> response.json())
        .then((json)=>{
            createWebSection(json);

            createGameSection(json);
        });
}
data_content();

const applyClass = (obj, cssClass) => {
    (obj.classList.contains(cssClass)) ? obj.classList.remove(cssClass) : obj.classList.add(cssClass);
};

portfolio_web_btn.addEventListener('click', ()=>{
    applyClass(portfolio_web_sect, "hidden_scroll");
});

portfolio_game_btn.addEventListener('click', ()=>{
    applyClass(portfolio_game_sect, "hidden_scroll");
});

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