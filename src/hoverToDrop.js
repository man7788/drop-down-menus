import { findMenu, findLinks } from './findDom';
import hoverToHighlight from './hoverHighlight';

function hoverToShowMenu() {
  const divs = findMenu().dropDivList;
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', blockStyle);
    divs[i].addEventListener('mouseout', noneStyle);
  }
}

function clickToHide() {
  const a = findLinks().aList;
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', noneStyle2);
  }
}

function blockStyle() {
  const option = this.childNodes[1].childNodes[3];
  option.style.display = 'block';
  hoverToHighlight();
  clickToHide();
}

function noneStyle() {
  const option = this.childNodes[1].childNodes[3];
  option.style.display = 'none';
}

function noneStyle2() {
  const option = this.parentNode;
  option.style.display = 'none';
}

export default hoverToShowMenu;
