const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .menu ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});