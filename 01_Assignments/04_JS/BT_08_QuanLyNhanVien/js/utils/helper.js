function getInputsQuery(arrSelector) {
  const inputs = [];

  arrSelector.forEach((selector) => {
    inputs.push(...document.querySelectorAll(selector));
  });

  return inputs;
}

// Reset form input
function resetForm(listQuery) {
  const inputsForm = getInputsQuery(listQuery);

  inputsForm.forEach((input) => input.value = '');
}

/**
* Handle Modal
* @param status {"show" | "hide"}
*/
function handleModal(status) {
  $(`#${DOM_ID.MODAL}`).modal(status);
}

/**
* Handle button
* @param btnID {string} 
* @param status {boolean} 
*/
function handleButton(btnID, status) {
  document.getElementById(btnID).disabled = status;
}

// Render list employee
function render(listEmployee) {
  const tableID = document.getElementById(DOM_ID.TABLE);

  // FIX: 👇Handle error when no data ${TITLE_EMPLOYEE[employee.titleEmp].text}

  let content = listEmployee.map((employee) => {
    return `
      <tr>
        <td>${employee.tknv}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.datePicker}</td>
        <td>${TITLE_EMPLOYEE[employee.titleEmp].text}</td>
        <td>${employee.getTotalSalary()}</td>
        <td>${employee.getLevel()}</td>
        <td>
          <button class='btn btn-primary' onclick='editEmployee("${employee.tknv}")'>Edit</button>
          <button class='btn btn-danger' onclick='deleteEmployee("${employee.tknv}")'>Delete</button>
        </td>
      </tr>
    `;
  });

  tableID.innerHTML = content.join('');
}

// Find employee
function findEmployees(callback) {
  const output = EMPLOYEES.filter((emp) => callback(emp));

  return output.length !== 0 ? output : -1;
}
