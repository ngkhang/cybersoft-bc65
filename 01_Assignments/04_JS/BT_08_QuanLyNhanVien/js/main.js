// Global List employee
let EMPLOYEES = [];

// Handle Modal
$(QUERY_SELECTORS.MODAL).on("hidden.bs.modal", () => {
  resetInputsField();
  disableButton(QUERY_SELECTORS.BTN_ADD_EMPLOYEE, false);
  disableButton(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE, false);
});

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
  disableButton(QUERY_SELECTORS.BTN_UPDATE_EMPLOYEE, true);

// Handle add a new employee
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

// Handle update
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
 * Feature: Delete a employee
 * - Handle delete employee:
 *    - Find employee by "TKNV"
 *    - Delete it
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
