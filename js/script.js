// бургер-меню

document.querySelector(".header__btn-open").addEventListener("click", function() {
 document.querySelector(".header-nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
 document.querySelector(".header-nav").classList.remove("active");
});
