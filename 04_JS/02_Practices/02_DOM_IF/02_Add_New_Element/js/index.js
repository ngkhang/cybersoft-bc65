function addNewElement() {
  let containerId = document.getElementById('baitap');
  let idChild = containerId.children.length;

  let newElement = document.createElement('div');
  newElement.innerHTML = `
    <input id="${idChild}" type="text" placeholder="Nhập giá trị...">
    <button onclick="getInputVal(${idChild})">Get value</button>
  `;
  newElement.classList.add('mb-2');
  containerId.appendChild(newElement);
}

function getInputVal(id) {
  let inputId = document.getElementById(`${id}`);
  let output = document.getElementById('output');
  output.innerHTML = `Value: ${inputId.value}`;
}