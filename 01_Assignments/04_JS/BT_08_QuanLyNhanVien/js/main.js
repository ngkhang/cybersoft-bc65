// List employee
let EMPLOYEES = [];

// Handle button close modal
// When click button
document.getElementById(DOM_ID.BTN_CLOSE_MODAL).onclick = () => resetForm(querySelectors);
// FIX: When click over form
// document.getElementById(DOM_ID.MODAL).addEventListener('click', () => {
//   resetForm(querySelectors);
// });

// Create: Add new employee
document.getElementById(DOM_ID.BTN_ADD_MAIN).onclick = () => handleButton(DOM_ID.BTN_UPDATE_EMPLOYEE, true);

document.getElementById(DOM_ID.BTN_ADD_EMPLOYEE).onclick = () => {
  let newEmployee = getInfoEmployee();

  // Validate input

  EMPLOYEES.push(newEmployee);
  resetForm(querySelectors);
  handleModal('hide');
  handleButton(DOM_ID.BTN_UPDATE_EMPLOYEE, false);
  render(EMPLOYEES);
}

// Update: Update information of employee
function editEmployee(account) {
  handleButton(DOM_ID.BTN_ADD_EMPLOYEE, true);

  const employee = findEmployees((employee) => employee['tknv'] === account)[0];

  handleModal('show');
  const inputsForm = getInputsQuery(querySelectors);

  inputsForm.forEach((input) => {
    let inputId = input.id;
    if (inputId === 'tknv') input.readOnly = true;
    input.value = employee[inputId];
  });
}

document.getElementById(DOM_ID.BTN_UPDATE_EMPLOYEE).onclick = () => {
  let newInfoEmployee = getInfoEmployee();

  let currentInfoEmployee = findEmployees((employee) => employee['tknv'] === newInfoEmployee.tknv);

  Object.keys(currentInfoEmployee).forEach((key) => {
    currentInfoEmployee[key] = newInfoEmployee[key];
  })

  resetForm(querySelectors);
  handleModal('hide');
  handleButton(DOM_ID.BTN_ADD_EMPLOYEE, false);
  render(EMPLOYEES);
}

// Delete employee
function deleteEmployee(account) {
  const newListEmployee = findEmployees((employee) => employee['tknv'] !== account);

  EMPLOYEES = [...newListEmployee];
  render(EMPLOYEES);
}

// Search employees
document.getElementById(DOM_ID.BTN_SEARCH_EMPLOYEE).onclick = () => {
  const levelSearch = document.getElementById(DOM_ID.SEARCH).value;
  if (levelSearch === '') {
    render(EMPLOYEES);
    return;
  }
  // Validate input

  // Return
  const listSearch = findEmployees((employee) => employee.getLevel() === levelSearch);
  render(listSearch !== -1 ? listSearch : []);
}
