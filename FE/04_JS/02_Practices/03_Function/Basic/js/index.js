function createObject() {
  const resultId = document.getElementById('result');

  let object = {
    tagName: '',
    colorName: '',
    fontSize: '',
    bg: '',
    content: '',
  }
  const inputId = document.getElementsByTagName('input');

  [...inputId].forEach((ele) => {
    object[`${ele.id}`] = ele.value;
  });
  createTagName(resultId, object);
}


function createTagName(outputId, object) {
  let newEle = document.createElement(object.tagName);
  newEle.style.color = object.colorName;
  newEle.style.fontSize = object.fontSize;
  newEle.style.background = object.bg;
  newEle.innerHTML = object.content;

  outputId.innerHTML = '';
  outputId.appendChild(newEle);
}