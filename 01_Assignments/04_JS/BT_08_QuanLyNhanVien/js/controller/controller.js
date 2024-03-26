function getInfoEmployee() {
  const inputsForm = getElements(QUERY_SELECTORS.INPUTS_FIELD);

  let newEmployee = new Employee();
  inputsForm.forEach((input) => {
    let inputId = input.id;
    newEmployee[inputId] = input.value;
  });
  return newEmployee;
}
