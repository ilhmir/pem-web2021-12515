const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .menu ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var full = document.getElementById('full');
var fullImg = document.getElementById('fullImg');

function openFullImg(pict){
    full.style.display = "flex";
    fullImg.src = pict;
}

function closeFullImg(){
    full.style.display = "none";
}