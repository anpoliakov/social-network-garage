const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");

menuBtn.addEventListener('click', function(){
    // Обращаемся к списку классов menu - если там есть класс active(то удалит), нету - добавит
    menu.classList.toggle("active");
})