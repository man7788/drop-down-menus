import findMenu from './findDom';

function showMenu() {
  const buttons = findMenu().buttonList;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', blockStyle);
  }
}

function clickHideMenu() {
  const buttons = findMenu().buttonList;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', blockStyle);
    buttons[i].addEventListener('click', noneStyle);
  }
  blurMenu();
}

function blurMenu() {
  const buttons = findMenu().buttonList;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('blur', noneStyle);
  }
}

function blockStyle() {
  const option = this.nextElementSibling;
  option.style.display = 'block';
  clickHideMenu();
}

function noneStyle() {
  const option = this.nextElementSibling;
  option.style.display = 'none';
  showMenu();
}

export default showMenu;
