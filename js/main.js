const navToggle = document.querySelector(".boton-navegador")
const navMenu = document.querySelector(".menu-lista")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("menu-lista-visible")
})