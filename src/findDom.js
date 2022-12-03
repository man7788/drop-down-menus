function findMenu() {
  const buttonList = [];
  const optionList = [];
  const menuDiv = document.querySelectorAll('.drop-menu');
  menuDiv.forEach((element) => {
    const button = element.childNodes[1];
    const option = element.childNodes[3];
    buttonList.push(button);
    optionList.push(option);
  });
  return { buttonList, optionList };
}

export default findMenu;
