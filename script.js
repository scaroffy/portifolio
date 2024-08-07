let sections = document.querySelectorAll('section');
let home = document.querySelectorAll('home');
let projetos = document.querySelectorAll('projetos');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');
            });
        };

