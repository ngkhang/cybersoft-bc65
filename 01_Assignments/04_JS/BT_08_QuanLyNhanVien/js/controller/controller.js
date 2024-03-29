/**
 * Constructs an object from the form inputs based on the provided constructor function.
 * @param {Array<string>} querySelectors - Array of query selectors for form inputs.
 * @param {Function} constructor - The constructor function to create the object.
 * @return {Object} - The newly created object with information from the form inputs.
 */
function getObjectFromForm(querySelectors, constructor) {
  const inputFields = getElements(querySelectors);

  let newObj = new constructor();

  inputFields.forEach((input) => {
    let inputId = input.id;
    newObj[inputId] = input.value.trim();
  });

  return newObj;
}

/**
 * Sets the values of form inputs based on the provided object's properties.
 * @param {Array<string>} querySelectors - Array of query selectors for form inputs.
 * @param {Object} obj - The object containing values to set in the form inputs.
 * @param {Function} exception - The callback to condition.
 */
function setObjectToForm(querySelectors, obj, exception) {
  const inputFields = getElements(querySelectors);

  inputFields.forEach((input) => {
    let inputId = input.id;
    exception(input);
    input.value = obj[inputId];
  });
}
