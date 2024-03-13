function getInputsQuery(arrSelector) {
  const inputs = [];

  arrSelector.forEach((selector) => {
    inputs.push(...document.querySelectorAll(selector));
  });

  return inputs;
}
