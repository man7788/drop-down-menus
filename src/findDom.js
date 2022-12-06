function findMenu() {
  const dropDivList = [];
  const buttonList = [];
  const optionList = [];
  const menuDiv = document.querySelectorAll('.drop-menu');
  menuDiv.forEach((element) => {
    const div = element.parentElement;
    const button = element.childNodes[1];
    const option = element.childNodes[3];
    dropDivList.push(div);
    buttonList.push(button);
    optionList.push(option);
  });
  // console.log(optionList);
  return { dropDivList, buttonList, optionList };
}

function findLinks() {
  const aList = [];
  const menuDiv = document.querySelectorAll('a.drop-item');
  menuDiv.forEach((element) => {
    aList.push(element);
  });
  // console.log(aList);
  return { aList };
}

export { findMenu, findLinks };
