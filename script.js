let logo = document.querySelector(".logo");
let toggleBtn = document.querySelector(".fa-bars");
let navMenu = document.querySelector(".menu-list");

toggleBtn.addEventListener("click", function(){
    navMenu.classList.toggle("menu-list");
    navMenu.classList.toggle("responsive");
    logo.classList.toggle("logo-wd-f");
})