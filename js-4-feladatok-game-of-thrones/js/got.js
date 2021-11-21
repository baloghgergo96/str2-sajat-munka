const bigDiv = document.createElement("div")
const element = document.querySelector(".main")
element.appendChild(bigDiv);

const getNames = (sortedData) => {
    const names = sortedData
        .map(item => item.name)
        .slice(0,48)
    return getImages(sortedData, names);
}


const getImages = (sortedData, names) => {
   const portrait = sortedData
        .map(item => `../${item.portrait}`)
        .slice(0,48)
    for(let i = 0; i < portrait.length; i++){
        const usersDiv = document.createElement("div")
        bigDiv.appendChild(usersDiv);
        const img = new Image(50,50)
        img.src = portrait[i]
        const picturesDiv = document.createElement("div")
        picturesDiv.appendChild(img);
        picturesDiv.classList.add("pictures")
        usersDiv.appendChild(picturesDiv)
        usersDiv.classList.add("userdivs")
        writeNames(usersDiv, names[i])
    }
    
};

const writeNames = (usersDiv, names) => {
    const nameDiv = document.createElement("div");
        usersDiv.appendChild(nameDiv);
        const text = document.createTextNode(names);
        nameDiv.classList.add("names")
        nameDiv.appendChild(text);
}

const startGenerate = (sortedData) => {
    getNames(sortedData);
    addEventlistener(sortedData);
}

const getUsers = async (url='') => {
    const response = await fetch(url);
    const data = await response.json();
    const sortedData = await data.sort((a,b) => a.name > b.name || -1);
    return startGenerate(sortedData);
}

getUsers("./got.json")


const addEventlistener = () => {
    const userdiv = document.querySelectorAll(".userdivs")
    const userdivs = [...userdiv]
    for(let i=0; i < userdivs.length; i++){
        let userdiv = userdivs[i];
        userdiv.addEventListener('click', showAside)
}};

const showAside = (userdiv) => {
        let content = document.createElement("div")
        let img = new Image;
        img.src = userdiv.path[0].currentSrc
        let contentDiv = document.createElement("div")
        content = document.createTextNode(userdiv.path[2].innerText)
        contentDiv.appendChild(content)
        const contentContainer = document.querySelector(".content")
        contentContainer.appendChild(img)
        contentContainer.appendChild(contentDiv)
}