function fetchProductList() {
  PRODUCT_SERVER.getProducts()
    .then((response) => render(response.data))
    .catch((error) => console.log(error));
}
fetchProductList();

// Delete product
function delProduct(id) {
  PRODUCT_SERVER.delProduct(id)
    .then((response) => {
      fetchProductList()
    })
    .catch((error) => console.log(error));
}

// Update product

// Add new product

// Search product
function handleSearchInput(nameProduct) {
  PRODUCT_SERVER.getProducts()
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
}// Handle Search Input
