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
  return { dropDivList, buttonList, optionList };
}

export default findMenu;
