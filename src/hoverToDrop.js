import findMenu from './findDom';

function hoverToShowMenu() {
  const divs = findMenu().dropDivList;
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseover', blockStyle);
    divs[i].addEventListener('mouseout', noneStyle);
  }
}

function blockStyle() {
  const option = this.childNodes[1].childNodes[3];
  option.style.display = 'block';
}

function noneStyle() {
  const option = this.childNodes[1].childNodes[3];
  option.style.display = 'none';
}

export default hoverToShowMenu;
