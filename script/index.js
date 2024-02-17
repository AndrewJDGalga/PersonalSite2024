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

const createSection = (parentObj, jsonObj, sectionName) => {
    for(let i = 0; i < Object.keys(jsonObj[sectionName]).length;i++) {
        const itemContainer = createItemContainer('div', 'scroll_item');
        itemContainer.appendChild(createItemImage(jsonObj[sectionName][i].photoLocation, jsonObj[sectionName][i].photoAlt, 'scroll_item--photo'));
        itemContainer.appendChild(createItemTitle(jsonObj[sectionName][i].title, jsonObj[sectionName][i].titleLink));
        itemContainer.appendChild(createItemBlurb(jsonObj[sectionName][i].blurb));
        itemContainer.appendChild(createItemLink(jsonObj[sectionName][i].buttonText, jsonObj[sectionName][i].buttonLink,'link-button'));

        parentObj.appendChild(itemContainer);
    }
}

const data_content = async () => {
    await fetch(data_source)
        .then((response)=> response.json())
        .then((json)=>{
            createSection(portfolio_web_sect, json, 'web');
            createSection(portfolio_game_sect, json, 'game');
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

