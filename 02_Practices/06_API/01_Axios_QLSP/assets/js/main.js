// Get all product
function fetchProductList() {
  PRODUCT_SERVER.getAllProduct()
    .then((response) => render(response.data))
    .catch((error) => console.log(error));
}

// Add new product
function addProduct(dataProduct) {
  PRODUCT_SERVER.addProduct(dataProduct)
    .then((response) => {
      fetchProductList();
    })
    .catch((error) => console.log(error));
}

// Detail product
function viewProduct(idProduct) {
  PRODUCT_SERVER.getProduct(idProduct)
    .then((response) => {
      let product = response.data;
      let idProduct = product.id;

      handleModal('show');

      const Elements = [
        ...document.querySelectorAll('.modal-body input'),
        ...document.querySelectorAll('.modal-body select'),
        ...document.querySelectorAll('.modal-body textarea'),
      ];

      Elements.forEach((item) => {
        const key = PRODUCT_PROPS[item.id];
        item.value = product[key];
      });

      const btnElemnts = `
        <button
          class="btn btn-primary" type="button"
          onclick="handleAddNewProduct()"
        >
          Add
        </button>
        <button
          class="btn btn-warning"
          type="button"
          onclick="handleUpdate('${idProduct}')"
        >
          Update
        </button>
        <button
          class="btn btn-light"
          type="button"
          onclick="handleReset()"
        >
          Reset
        </button>
      `;

      document.querySelector(DOM_ID.MODAL_FOOTER).innerHTML = btnElemnts;
    })
    .catch((error) => console.log(error));
}

// Delete product
function delProduct(idProduct) {
  PRODUCT_SERVER.delProduct(idProduct)
    .then((response) => {
      fetchProductList()
    })
    .catch((error) => console.log(error));
}

// Update product
function updateProduct(idProduct) {
  let newInfoProduct = {};
  // handleModal('hide');
  const Elements = [
    ...document.querySelectorAll('.modal-body input'),
    ...document.querySelectorAll('.modal-body select'),
    ...document.querySelectorAll('.modal-body textarea'),
  ];

  Elements.forEach((item) => {
    const key = PRODUCT_PROPS[item.id];
    newInfoProduct[key] = item.value;
  });

  PRODUCT_SERVER.updateProduct()


}

// Search product
function handleSearchInput(nameProduct) {
  PRODUCT_SERVER.getAllProduct()
    .then((response) => {
      const LIST_PRODUCT = response.data;
      let listProduct = (nameProduct === '')
        ? LIST_PRODUCT
        : LIST_PRODUCT.filter((prod) => prod.name === nameProduct);
      render(listProduct);
    })
    .catch((error) => console.log(error));
}

// Handle Button Enter
document.querySelector(DOM_ID.INPUT_SEARCH).addEventListener('keyup', (e) => {
  if (e.keyCode === 13) handleSearchInput(e.target.value.trim());
})
document.querySelector(DOM_ID.ICON_SEARCH).onclick = () => {
  let value = document.querySelector(DOM_ID.INPUT_SEARCH).value.trim()
  handleSearchInput(value);
}

// Handle Button Reset
function handleReset() {
  const Elements = [
    ...document.querySelectorAll('.modal-body input'),
    ...document.querySelectorAll('.modal-body select'),
    ...document.querySelectorAll('.modal-body textarea'),
  ];

  Elements.forEach((item) => item.value = '');
}

// Handle Modal
function handleModal(status) {
  $(`${DOM_ID.MODAL}`).modal(status);
}

// Initial
document.querySelector('body').onload = () => {
  fetchProductList();
}

// Handle add new product
function handleAddNewProduct() {
  const Elements = [
    ...document.querySelectorAll('.modal-body input'),
    ...document.querySelectorAll('.modal-body select'),
    ...document.querySelectorAll('.modal-body textarea'),
  ];

  let newProduct = new Product();
  Elements.forEach((input) => {
    let key = PRODUCT_PROPS[input.id];
    let value = input.value;

    newProduct[key] = key === 'price' ? value * 1 : value;
  });
  addProduct(newProduct);
  handleModal('hide');
}

// Handle button update
function handleUpdate(idProduct) {
  const Elements = [
    ...document.querySelectorAll('.modal-body input'),
    ...document.querySelectorAll('.modal-body select'),
    ...document.querySelectorAll('.modal-body textarea'),
  ];

  let updateProduct = new Product();
  Elements.forEach((item) => {
    const key = PRODUCT_PROPS[item.id];
    updateProduct[key] = item.value;
  });

  PRODUCT_SERVER.updateProduct(idProduct, updateProduct)
    .then((response) => {
      handleModal('hide');
      fetchProductList();
    })
    .catch((error) => console.log(error));
}