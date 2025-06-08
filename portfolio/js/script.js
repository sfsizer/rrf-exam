// Typing Script JS
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Youtuber", "Blogger", "Web Designer"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing2", {
    strings: ["Web Designer", "Youtuber", "Frelancer", "Web Developer"],
    typeSpeed: 30,
    backSpeed: 80,
});

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
})