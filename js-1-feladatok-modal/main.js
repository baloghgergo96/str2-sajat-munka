const modal = document.getElementById("mod-con");
const openbutton = document.getElementById("myBtn");

openbutton.addEventlistener('click', openmodal);

function openmodal () {
    modal.style.display = 'block';
};