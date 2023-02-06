const hamburguer = document.querySelector('.fa-bars');

hamburguer.addEventListener("click", () => {
    const menu = document.querySelector(".nav__lista").classList;

    if (menu.contains("menu--ativo")) {
        menu.remove("menu--ativo");
    } else {
        menu.add("menu--ativo");
    };
});