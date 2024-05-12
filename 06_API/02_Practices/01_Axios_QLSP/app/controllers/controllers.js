// Render list product
function render(productList) {
  const contents = productList.map((prod) => {
    return `
      <tr>
        <td>${prod.id}</td>
        <td>${prod.name}</td>
        <td>${prod.price}</td>
        <td class='w-25'>
          <img src='${prod.image}' class='img-fluid'/>
        </td>
        <td class='w-25'>${prod.description}</td>
        <td class=''>
          <div class='d-flex justify-content-between'>
            <button
              class='btn btn-primary px-4 py-1 mr-1' type='button'
              onclick='viewProduct("${prod.id}")'
            >
              Chi tiết
            </button>
            <button
              class='btn btn-danger px-4 py-1 mr-1' type='button'
              onclick='delProduct("${prod.id}")'
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>    
    `;
  });

  document.querySelector(QUERY_SELECTORS.TABLE_BODY).innerHTML = contents.join('');
}

function getInfoForm() {
  const ELEMENTS = getElements(QUERY_SELECTORS.INPUT_FORM);

  let newProduct = new Product();
  ELEMENTS.forEach((input) => {
    let key = PRODUCT_PROPS[input.id];
    let value = input.value;

    newProduct[key] = key === 'price' ? value * 1 : value;
  });

  return newProduct;
}

function setInfoForm(data) {
  const INPUTS = getElements(QUERY_SELECTORS.INPUT_FORM);

  INPUTS.forEach((ele) => {
    const key = PRODUCT_PROPS[ele.id];
    ele.value = data[key];
  });
}