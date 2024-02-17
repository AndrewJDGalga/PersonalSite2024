const portfolio_web_btn = document.getElementById("home_grid--web--reveal");
const portfolio_web_sect = document.getElementById("home_grid--web--work");

const portfolio_game_btn = document.getElementById("home_grid--game--reveal");
const portfolio_game_sect = document.getElementById("home_grid--game--work");

const data_source = "data/content.json";

/*
<div class="scroll_item">
    <img class="scroll_item--photo" src="data/photos/gameTestImage.jpg" alt="test">
    <h3><a href="#">Lorem Ipsum Dolor</a></h3>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <a class="link-button">GitHub</a>
</div>
*/

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

const createItemTitleLink = (linkText, linkDestination) => {
    const itemHeaderLink = document.createElement('a');
    itemHeaderLink.innerText = linkText;
    itemHeaderLink.href = linkDestination;
    return itemHeaderLink;
}

const createItemTitle = (linkText, linkDestination) => {
    const itemHeader = document.createElement('h3');
    itemHeader.appendChild(createItemTitleLink(linkText, linkDestination));
    return itemHeader;
}

const createItemBlurb = (blurb) =>{
    const itemBlurb = document.createElement('p');
    itemBlurb.innerText = blurb;
    return itemBlurb;
}

const createWebSection = (jsonObj) => {
    console.log(jsonObj.web);
    for(let i = 0; i < Object.keys(jsonObj.web).length;i++) {
        const itemContainer = createItemContainer('div', 'scroll_item');
        itemContainer.appendChild(createItemImage('data/photos/gameTestImage.jpg', 'test', 'scroll_item--photo'));

        /*
        const itemHeader = document.createElement('h3');
        itemHeader.appendChild(createItemHeaderLink('Lorem Ipsum Dolor', '#'));
        itemContainer.appendChild(itemHeader);
        */
        itemContainer.appendChild(createItemTitle('Lorem Ipsum Dolor', '#'));

        itemContainer.appendChild(createItemBlurb('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

        const itemButton = document.createElement('a');
        itemButton.classList.add('link-button');
        itemButton.innerText = 'GitHub';
        itemContainer.appendChild(itemButton);

        portfolio_web_sect.appendChild(itemContainer);
    }
    //console.log(Object.keys(jsonObj.web).length);
}

const data_content = async () => {
    await fetch(data_source)
        .then((response)=> response.json())
        .then((json)=>{
            createWebSection(json);
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