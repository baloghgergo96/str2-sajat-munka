const modal = document.querySelector('#mod-con');
const openbutton = document.querySelector('#openBtn');

openbutton.addEventListener('click', openmodal);

function openmodal () {
    modal.style= 'display : block'
};

const exitbutton = document.querySelector('#exitBtn')

exitbutton.addEventListener('click', exitmodal);

function exitmodal () {
    modal.style = 'display : none';
};

const okaybutton = document.querySelector('.okay-button')

okaybutton.addEventListener('click', okaymodal);

function okaymodal () {
    modal.style = 'display : none';
};

const closebutton = document.querySelector('.close-button')

closebutton.addEventListener('click', closemodal);

function closemodal () {
    modal.style = 'display : none';
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};