//Clean code-tól nagyon messze áll, de egyelőre annak is örülök, ha egyáltalán csinál valamit.
const card = document.querySelectorAll(".card");
const cards = [...card];

const cardContent = document.querySelectorAll(".cardContent");
const cardContents = [...cardContent];

const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;


const setTime = () => {
  ++totalSeconds
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

const pad = (val) => {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

setInterval(setTime, 1000);

const addClickListener = () => {
        for(let i = 0; i < cards.length; i++){
        let card = cards[i]
        let cardContent = cardContents[i]
        card.addEventListener('click', function OpenCardsCount(){
        cardContent.classList.toggle("open");
        let openClassItems = (document.querySelectorAll(".open"))
        let openLength = (document.querySelectorAll(".open").length)
        if((openLength === 2)){
                checkOpenCards(openClassItems)
        }
        else if(openLength > 2){
                for(let i = 0; i < openClassItems.length; i++){
                openClassItems[i].classList.remove("open");
                }
        }
        })
        }

};

addClickListener();

const clearCards = () => {
        let openClassItems = (document.querySelectorAll(".matched"))
        let openLength = (document.querySelectorAll(".matched").length)
        if(openLength === 10){
        for(let i = 0; i < openClassItems.length; i++){
                setTimeout(function() {openClassItems[i].classList.remove("matched");}, 5000);
        }
        

}
};


const checkOpenCards = (openClassItems) => {
        if(openClassItems[0].className === openClassItems[1].className){
                openClassItems[0].classList.toggle("matched"), openClassItems[1].classList.toggle("matched"),
                openClassItems[0].classList.remove("open"), openClassItems[1].classList.remove("open");

        }
        else{
              setTimeout(function() {openClassItems[0].classList.remove("open"), openClassItems[1].classList.remove("open");}, 2000);
        }
        clearCards();
}



