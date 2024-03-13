// List employee
let EMPLOYEES = [];

// Clear Form
function clearForm() {
  const inputsForm = getInputsQuery(querySelectors);

  inputsForm.forEach((input) => input.value = '');
}

// Close Modal
function closeModal() {
  clearForm();
  $('#myModal').modal('hide');
}

// Handle button close modal
document.getElementById('btnDong').onclick = () => closeModal();

// Render List Employee
function render(listEmployee) {
  const tableDSId = document.getElementById('tableDanhSach');
  let content = listEmployee.map((emp) => {
    return `
      <tr>
        <td>${emp.tknv}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.datePicker}</td>
        <td>${emp.titleEmp}</td>
        <td>${emp.getTotalSalary()}</td>
        <td>${emp.getLevel()}</td>
        <td><em class="fa fa-cog" onclick="deleteEmployee('${emp.tknv}')"></em></td>
      </tr>
    `;
  })

  tableDSId.innerHTML = content.join('');
}

/*  ======= CRUD ======= */
// Create: Add new employee
document.getElementById('btnThemNV').onclick = () => {
  let newEmployee = getInfoEmployee();
  EMPLOYEES.push(newEmployee);
  clearForm();
  closeModal();
  render(EMPLOYEES);
}

// Update: Update information of employee
function updateEmployee(account) {
}

// Delete: Delete employee
function deleteEmployee(account) {
  const newListEmployee = EMPLOYEES.filter((employee) => employee.tknv !== account);

  EMPLOYEES = [...newListEmployee];
  render(EMPLOYEES);
}

// Find employee by key-value
// function findEmployees(key, value) {
//   const employees = EMPLOYEES.filter((employee) => employee[key] === value);

//   return employees.length !== 0 ? employees : -1;
// }

// Search employees
function findEmployeesWithLevel() {
  const levelSearch = document.getElementById('searchName').value;

  const lstEmployee = EMPLOYEES.filter((emp) => emp.getLevel() === levelSearch);

  render(lstEmployee.lenght !== 0 ? lstEmployee : EMPLOYEES);
}

document.getElementById('btnTimNV').onclick = () => findEmployeesWithLevel();

