// Get Elements by query
function getElements(query) {
  if (typeof query === 'string')
    return document.querySelectorAll(query);

  const ELEMENT = [];
  query.forEach((ele) => ELEMENT.push(...document.querySelectorAll(ele)));

  return ELEMENT;
};

/**
* Handle disabled/enable button
* @param queryBtn {string} 
* @param status {boolean} 
*/
function handleButton(queryBtn, status) {
  document.querySelector(queryBtn).disabled = status;
}

/**
* Handle reset input
*/
function handleResetInputs() {
  const ELEMETS = getElements(QUERY_SELECTORS.INPUT_FORM);
  ELEMETS.forEach((ele) => ele.value = '');
}

/**
* Handle Modal
* @param status {string} - "show" or "hide" 
*/
function handleModal(status) {
  $(QUERY_SELECTORS.MODAL).modal(status);
}

/**
* Find data 
* @param data {array} 
* @param callback {function} 
* @return array
*/
function findDataByCallback(data, callback) {
  return data.filter(callback);
}

/**
* Handle spinner 
* @param status {boolean} 
*/
function isOpenSpinner(status) {
  const spinner = getElements(QUERY_SELECTORS.SPINNER)[0];

  spinner.style.display = (status) ? 'flex' : 'none';
}
