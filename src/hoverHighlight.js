import { findLinks } from './findDom';

function hoverToHighlight() {
  const options = findLinks().aList;
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('mouseover', hoverStyle);
    options[i].addEventListener('mouseout', noneHoverStyle);
  }
}

function hoverStyle() {
  this.style.background = 'whitesmoke';
  this.style.color = 'rgb(50, 50, 50)';
  // console.log(this);
}

function noneHoverStyle() {
  this.style.background = 'rgb(50, 50, 50)';
  this.style.color = 'whitesmoke';
}

export default hoverToHighlight;
