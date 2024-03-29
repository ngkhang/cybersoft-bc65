// Global List employee
let EMPLOYEES = [];

// Handle Modal
$(QUERY_SELECTORS.MODAL).on("hidden.bs.modal", () => {
  resetInputsField();
  resetMessError();
  [...document.querySelectorAll(QUERY_SELECTORS.INPUTS_FIELD)].find(
    (input) => input.id === "tknv"
  ).readOnly = false;
  disableButton(QUERY_SELECTORS.BTN_ADD_EMPLOYEE, false);
  disableButton(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE, false);
});

/**
 * Feature: Add a new employee
 * - Disable UPDATE button
 * - Handle adding a new employee:
 *    - Validate input from the form
 *    - Add the new employee to the list
 *    - Handle Modal:
 *      - Close Modal
 *      - Reset input form and enable button
 *    - Re-render UI
 */
// 1. Disable button UPDATE
getElements(QUERY_SELECTORS.BTN_ADD_MAIN)[0].onclick = () =>
  disableButton(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE, true);

// 2. Handle add a new employee
document.querySelector(QUERY_SELECTORS.BTN_ADD_EMPLOYEE).onclick = () => {
  let newEmployee = getObjectFromForm(QUERY_SELECTORS.INPUTS_FIELD, Employee);

  // Validate input
  let isValid = handleValidate(newEmployee, "ADD");

  if (isValid) {
    EMPLOYEES.push(newEmployee);
    handleModal("hide");
    render(EMPLOYEES);
  }
};

/**
 * Feature: Update information of employee
 * - Handle getting current information of an employee:
 *    - Disable the ADD button
 *    - Get current information
 *    - Open the modal and display information
 *
 * - Handle the update process:
 *    - Retrieve information from the form
 *    - Validation input
 *    - Update the employee information
 *    - Handle Modal:
 *      - Close Modal
 *      - Reset input form and enable button
 *    - Re-render UI
 */
// 1. Handle getting current information of an employee
function editEmployee(account) {
  disableButton(QUERY_SELECTORS.BTN_ADD_EMPLOYEE, true);

  const employee = findDataByCallback(
    EMPLOYEES,
    (employee) => employee["tknv"] === account
  )[0];

  handleModal("show");

  setObjectToForm(QUERY_SELECTORS.INPUTS_FIELD, employee, (input) => {
    if (input.id === "tknv") input.readOnly = true;
  });
}

// 2. Handle the update process
document.querySelector(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE).onclick = () => {
  let newInfoEmployee = getObjectFromForm(
    QUERY_SELECTORS.INPUTS_FIELD,
    Employee
  );

  // Validate input
  let isValid = handleValidate(newInfoEmployee);

  if (isValid) {
    let currentInfoEmployee = findDataByCallback(
      EMPLOYEES,
      (employee) => employee["tknv"] === newInfoEmployee.tknv
    )[0];

    Object.keys(currentInfoEmployee).forEach((key) => {
      if (key !== "tknv") currentInfoEmployee[key] = newInfoEmployee[key];
    });

    handleModal("hide");
    render(EMPLOYEES);
  }
};

/**
 * Feature: Delete an employee
 * - Find the employee by their "TKNV" (Employee Account)
 * - Remove the employee from the list
 * - Re-render UI
 */
function deleteEmployee(account) {
  const newListEmployee = findDataByCallback(
    EMPLOYEES,
    (employee) => employee["tknv"] !== account
  );

  EMPLOYEES = [...newListEmployee];
  render(EMPLOYEES);
}

/**
 * Feature: Search for an employee
 * - Handle the Search button and Enter key press
 * - Handle the search process:
 *    - Get the keyword entered in the search input
 *    - Find mathching employees in the list
 */
// 1. Handle the Search button and Enter key press
document.querySelector(QUERY_SELECTORS.BTN_SEARCH_EMPLOYEE).onclick = () => {
  handleSearch();
};

document.querySelector(QUERY_SELECTORS.SEARCH).onkeydown = (event) => {
  if (event.keyCode === 13) handleSearch();
};

// 2. Handle the search process
function handleSearch() {
  const keyWord = document
    .querySelector(QUERY_SELECTORS.SEARCH)
    .value.trim()
    .toLowerCase();

  if (keyWord === "") {
    render(EMPLOYEES);
    return;
  }

  const listEmployee = findDataByCallback(EMPLOYEES, (employee) =>
    employee.getLevel().toLowerCase().includes(keyWord)
  );

  render(listEmployee);
}
