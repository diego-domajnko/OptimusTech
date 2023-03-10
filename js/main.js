const btnMenu = document.querySelector('#btn__menu');

btnMenu.addEventListener('click', () => {
  const menu = document.querySelector('#nav__menu');
  const botoesLogin = document.querySelector('#menu__btn');

  menu.classList.toggle('hidden');
  botoesLogin.classList.toggle('hidden');
});