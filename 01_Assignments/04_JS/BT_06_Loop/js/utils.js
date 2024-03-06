// Initial
const RESULT_CLASS = {
  Pedding: "resultPedding",
  Success: "resultSuccess",
  Error: "resultError",
};

const DISPLAY_CLASS = {
  none: "d-none",
  flex: "d-flex",
};

/**
 * Checks if the given input data is empty or undefined.
 * @param {any} rawData - The input data.
 * @param {string} fieldName - The name of the field associated with the input data.
 * @returns {object} An object containing status, messError, and input properties.
 */
function isEmpty(rawData, fieldName) {
  const output = {
    status: true,
    messError: "",
    data: rawData,
  };

  if (rawData === "" || rawData === undefined) {
    output.status = false;
    output.messError = `Hãy nhập ${fieldName}`;
  }

  return output;
}

/**
 * Validates if the given input is a number based on specified options.
 * @param {any} rawData - The input data.
 * @param {string} fieldName - The name of the field associated with the input data.
 * @param {object} option - Options for number validation (typeNumber: 'Int' or 'Float', negPos: 'positive' or 'negative').
 * @return {object} An object containing status, messError, and input properties.
 */
function isNumber(
  rawData,
  fieldName,
  option = { typeNumber: "Int", negPos: "positive" }
) {
  const OUTPUT = {
    status: true,
    messError: "",
    data: rawData,
  };

  // Check empty or undefined
  let validateEmpty = isEmpty(OUTPUT.data, fieldName);
  if (!validateEmpty.status) return validateEmpty;

  OUTPUT.data = OUTPUT.data * 1;

  // Check input is number
  if (Number.isNaN(OUTPUT.data)) {
    OUTPUT.status = false;
    OUTPUT.messError = `${fieldName} không phải là số`;
    return OUTPUT;
  }

  // Check input is Integer (default)
  if (option.typeNumber === "Int" && !Number.isInteger(OUTPUT.data)) {
    OUTPUT.status = false;
    OUTPUT.messError = `${fieldName} không phải là số nguyên`;
    return OUTPUT;
  }

  // Check input is Negative or Positive
  if (option.negPos === "negative" && OUTPUT.data > 0) {
    OUTPUT.status = false;
    OUTPUT.messError = `${fieldName} không phải là số âm`;
  } else if (option.negPos === "positive" && OUTPUT.data < 0) {
    OUTPUT.status = false;
    OUTPUT.messError = `${fieldName} không phải là số dương`;
  }

  return OUTPUT;
}

/**
 * Handles loading states by showing a spinner and hiding a block element after a specified time.
 * @param {string} idSpinner - The ID of the spinner element
 * @param {string} idBlock - The ID of the block element
 * @param {number} time_ms - The time in milliseconds before hiding the spinner and showing the block (default: 300ms).
 * @param {Object} displayClass - An object containing CSS classes for managing element display.
 */
function handleLoading(
  idSpinner,
  idBlock,
  time_ms = 300,
  displayClass = DISPLAY_CLASS,
) {
  const spinnerElement = document.getElementById(idSpinner);
  const blockElement = document.getElementById(idBlock);

  // Show spinner
  spinnerElement.classList.remove(displayClass.none);
  spinnerElement.classList.add(displayClass.flex);

  // Set timeout to hide spinner and show block after time_ms
  let timerId = setTimeout(() => {
    spinnerElement.classList.remove(displayClass.flex);
    spinnerElement.classList.add(displayClass.none);
    blockElement.classList.remove(displayClass.none);
  }, time_ms);
}

/**
* Resets input elements and sets default content for output fields.
* @param {string} selectorInputs - The CSS selector for input elements to be reset.
* @param {string} selectorOutput - The CSS selector for output fields where default content needs to be set.
*/
function resetAll(selectorInputs, selectorOutput) {
  const DEFAULT_CONTENT = "👉Kết quả...";

  // Reset and set initial value for input elements
  const inputs = document.querySelectorAll(selectorInputs);

  inputs.forEach((input) => {
    input.value = "";
    input.removeAttribute('autofocus');
  });

  // Reset and set default content for output fields
  const outputs = document.querySelectorAll(selectorOutput);
  outputs.forEach((output) => {
    output.innerHTML = DEFAULT_CONTENT;

    output.classList.remove(...Object.values(RESULT_CLASS));
    output.classList.add(RESULT_CLASS.Pedding);
  });
}

/**
 * Executes a specific action when the Enter key is pressed.
 * @param {object} event - The event object representing the key press event.
 * @param {function} action - The function to be executed when the Enter key is pressed
 */
function handleEnter(event, action) {
  if (event.keyCode === 13) action();
}

/**
* Sets focus on the first input element within a specified block element.
* @param {string} idBlock - The ID of the block element containing input elements.
* @param {string} selectorInput - The CSS selector for input elements within the block element.
*/
function handleAutoFocusInput(idBLock, selectorInput) {
  const blockElement = document.getElementById(idBLock);

  const firstInput = blockElement.querySelector(selectorInput);
  if (firstInput) firstInput.focus();
}

/**
 * Updates the content and visual style of an HTML element.
 * @param {string} id - The ID of element
 * @param {string} content - The content to be displayed.
 * @param {boolean} status -  The status to determine the styling class (true for success, false for error).
 */
function printOutput(id, content, status) {
  const resultElement = document.querySelector(id);

  resultElement.classList.remove(...Object.values(RESULT_CLASS));

  const classStatus = status ? RESULT_CLASS.Success : RESULT_CLASS.Error;

  resultElement.classList.add(classStatus);
  resultElement.innerHTML = content;
}

/**
* Handles the change of block elements based on the clicked button.
* @param {string} idBlock - The ID of the block element to be activated.
* @param {string} selectorBlock - The CSS selector for block elements.
* @param {string} selectorBtn - The CSS selector for buttons associated with the block elements.
*/
function handleChangeBlockByButton(idBlock, selectorBlock, selectorBtn) {
  const regx = /\d+/g;

  const listBlockElement = document.querySelectorAll(selectorBlock);
  const listBtnElement = document.querySelectorAll(selectorBtn);

  // Extract the index of the active button from the idBlock
  const indexBtnActive = idBlock.match(regx).pop() * 1;

  // Reset all input elements and set default content for output fields
  resetAll('input', '.exercise>p');

  // Change background button
  listBtnElement.forEach((button, index) => {
    (index === indexBtnActive - 1)
      ? button.classList.add('active')
      : button.classList.remove('active');
  })

  // Hidden block elements
  listBlockElement.forEach((block) => block.classList.add(DISPLAY_CLASS.none));

  // Loading and visible extract block from the idBlock 
  handleLoading('spinner', idBlock);
}
