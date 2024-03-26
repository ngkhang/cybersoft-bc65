// Global List employee
let EMPLOYEES = [];

// Start: Handle with DOM

// End: Handle with DOM

// Start: Handle logic

// End: Handle logic

// 👇 Fix
// Handle button close modal
// When click button
document.querySelector(QUERY_SELECTORS.BTN_CLOSE_MODAL).onclick = () =>
  resetInputsField();
// FIX: When click over form
// document.querySelector(QUERY_SELECTORS.MODAL).addEventListener('click', () => {
//   resetInputsField();
// });

/**
 * Feature: Add a new employee
 * - Disable button UPDATE
 * - Handle add a new employee
 *    - Validate input
 *    - Add
 *    - Reset input form
 *    - Close modal
 *    - Render UI
 */
// Disable button UPDATE
getElements(QUERY_SELECTORS.BTN_ADD_MAIN)[0].onclick = () =>
  handleButton(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE, true);

// Handle add a new employee
document.querySelector(QUERY_SELECTORS.BTN_ADD_EMPLOYEE).onclick = () => {
  let newEmployee = getInfoEmployee();

  // Validate input
  let isValid = handleValidate(newEmployee, "ADD");

  if (isValid) {
    EMPLOYEES.push(newEmployee);
    resetInputsField();
    handleModal("hide");
    handleButton(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE, false);
    render(EMPLOYEES);
  }
};

/**
 * Feature: Update information of employee
 * - Handle get current information of employee
 *    - Disable button ADD
 *    - Get current information
 *    - Open modal (form)
 *    -
 * - Handle update:
 *    - Get info from Form
 *    - Validation input
 *    - Update
 *    - Reset input field
 *    - Close modal
 *    - Enable button ADD_EMPLOYEE
 *    - Re-render
 */
// Handle get current information of employee
function editEmployee(account) {
  handleButton(QUERY_SELECTORS.BTN_ADD_EMPLOYEE, true);

  const employee = findDataByCallback(
    EMPLOYEES,
    (employee) => employee["tknv"] === account
  )[0];

  handleModal("show");
  const inputsForm = getElements(QUERY_SELECTORS.INPUTS_FIELD);
  // const inputsForm = getInputsQuery();

  inputsForm.forEach((input) => {
    let inputId = input.id;
    if (inputId === "tknv") input.readOnly = true;
    input.value = employee[inputId];
  });
}
// Handle update
document.querySelector(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE).onclick = () => {
  let newInfoEmployee = getInfoEmployee();

  // Validate input
  let isValid = handleValidate(newInfoEmployee);

  if (isValid) {
    let currentInfoEmployee = findDataByCallback(
      EMPLOYEES,
      (employee) => employee["tknv"] === newInfoEmployee.tknv
    )[0];
    // let currentInfoEmployee = findEmployees(
    //   (employee) => employee["tknv"] === newInfoEmployee.tknv
    // )[0];

    Object.keys(currentInfoEmployee).forEach((key) => {
      if (key !== "tknv") currentInfoEmployee[key] = newInfoEmployee[key];
    });

    resetInputsField();
    handleButton(QUERY_SELECTORS.BTN_ADD_EMPLOYEE, false);
    handleModal("hide");
    render(EMPLOYEES);
  }
};

/**
 * Feature: Delete a employee
 * - Handle delete employee:
 *    - Find employee by "TKNV"
 *    - Delete it
 */
// Delete employee
function deleteEmployee(account) {
  const newListEmployee = findDataByCallback(
    EMPLOYEES,
    (employee) => employee["tknv"] !== account
  );

  EMPLOYEES = [...newListEmployee];
  render(EMPLOYEES);
}

/**
 * Feature: Search employee
 * - Handle button Search and Enter keyboard
 * - Handle search
 *    - Get value input serach
 *    - Find value in list
 */
// Handle button Search and Enter keyboard
document.querySelector(QUERY_SELECTORS.BTN_SEARCH_EMPLOYEE).onclick = () => {
  handleSearch();
};

document.querySelector(QUERY_SELECTORS.SEARCH).onkeydown = (event) => {
  if (event.keyCode === 13) handleSearch();
};
// Search employees
function handleSearch() {
  const levelSearch = document.querySelector(QUERY_SELECTORS.SEARCH).value;

  if (levelSearch === "") {
    render(EMPLOYEES);
    return;
  }

  const listEmployee = findDataByCallback(
    EMPLOYEES,
    (employee) => employee.getLevel() === levelSearch.trim().toLowerCase()
  );
  render(listEmployee);
}
