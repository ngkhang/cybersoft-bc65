function getInfoEmployee() {
  const inputsForm = getInputsQuery(querySelectors);

  let newEmployee = new Employee();
  inputsForm.forEach((input) => {
    let inputId = input.id;
    newEmployee[inputId] = input.value;
  })
  return newEmployee;
}
