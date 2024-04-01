// Get all product
function fetchProductList() {
  PRODUCT_SERVER.getAllProduct()
    .then((response) => render(response.data))
    .catch((error) => console.log(error));
}

// Initial
document.querySelector("body").onload = () => {
  fetchProductList();
  isOpenSpinner(false);
};

// Handle button RESET input
document.querySelector(QUERY_SELECTORS.BTN_MODAL_RESET).onclick = () =>
  handleResetInputs();

// Handle button ADD & UPDATE when modal hidden
$(QUERY_SELECTORS.MODAL).on("hidden.bs.modal", () => {
  handleButton(QUERY_SELECTORS.BTN_MODAL_ADD, false);
  handleButton(QUERY_SELECTORS.BTN_MODAL_UPDATE, false);
  handleResetInputs();
});

// ADD NEW PRODUCT
// 1. Disable button UPDATE
document.querySelector(QUERY_SELECTORS.BTN_ADD_PRODUCT).onclick = () => {
  handleButton(QUERY_SELECTORS.BTN_MODAL_UPDATE, true);
};
// 2. Handle add new product
document.querySelector(QUERY_SELECTORS.BTN_MODAL_ADD).onclick = () => {
  isOpenSpinner(true);
  let newProduct = getInfoForm();

  PRODUCT_SERVER.addProduct(newProduct)
    .then((response) => {
      fetchProductList();
      handleModal("hide");
    })
    .catch((error) => console.log(error))
    .finally(() => isOpenSpinner(false));
};

// UPDATE PRODUCT
// 1. Disable ADD & RESET button
function viewProduct(idProduct) {
  handleButton(QUERY_SELECTORS.BTN_MODAL_ADD, true);
  handleButton(QUERY_SELECTORS.BTN_MODAL_RESET, true);
  isOpenSpinner(true);

  PRODUCT_SERVER.getProduct(idProduct)
    .then((response) => {
      let product = response.data;
      handleModal("show");
      setInfoForm(product);
    })
    .catch((error) => console.log(error))
    .finally(() => isOpenSpinner(false));
}
// 2. Handle UPDATE button
document.querySelector(QUERY_SELECTORS.BTN_MODAL_UPDATE).onclick = () => {
  let newInfoProduct = getInfoForm();
  isOpenSpinner(true);

  PRODUCT_SERVER.updateProduct(newInfoProduct.id, newInfoProduct)
    .then((response) => {
      handleModal("hide");
      fetchProductList();
    })
    .catch((error) => console.log(error))
    .finally(() => isOpenSpinner(false));
}

// DELETE PRODUCT
function delProduct(idProduct) {
  isOpenSpinner(true);
  PRODUCT_SERVER.delProduct(idProduct)
    .then((response) => fetchProductList())
    .catch((error) => console.log(error))
    .finally(() => isOpenSpinner(false));
}

// SEARCH PRODUCT
// 1. Handle Enter and button SEARCH
document
  .querySelector(QUERY_SELECTORS.INPUT_SEARCH)
  .addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      let keyWord = e.target.value.trim().toLowerCase();
      handleSearchInput(keyWord);
    }
  });
document.querySelector(QUERY_SELECTORS.SEARCH).onclick = () => {
  let keyWord = document.querySelector(QUERY_SELECTORS.INPUT_SEARCH).value.trim().toLowerCase();
  handleSearchInput(keyWord);
};

// 2. Handle search
function handleSearchInput(keyWord) {
  isOpenSpinner(true);

  // Solution 1:
  PRODUCT_SERVER.getAllProduct()
    .then((response) => {
      const LIST_PRODUCT = response.data;
      let listProduct =
        keyWord === ""
          ? LIST_PRODUCT
          : findDataByCallback(LIST_PRODUCT, (prod) =>
            prod.name.toLowerCase().includes(keyWord)
          );
      render(listProduct);
    })
    .catch((error) => console.log(error))
    .finally(() => isOpenSpinner(false));

  // Solution 2:
  // PRODUCT_SERVER.getAllProduct(valueSearch)
  //   .then((response) => render(response.data))
  //   .catch((error) => console.log(error))
  //   .finally(() => isOpenSpinner(false));
}
