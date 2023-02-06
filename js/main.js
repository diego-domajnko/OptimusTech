const hamburguer = document.querySelector('.fa-bars');

hamburguer.addEventListener("click", () => {
    const menu = document.querySelector(".nav__lista").classList;
    const section = document.querySelector(".corpo__sobre-nos");

    if (menu.contains("menu--ativo")) {
        menu.remove("menu--ativo");
        section.style.marginTop = "";
    } else {
        menu.add("menu--ativo");
        section.style.marginTop = "80px";
    }
});