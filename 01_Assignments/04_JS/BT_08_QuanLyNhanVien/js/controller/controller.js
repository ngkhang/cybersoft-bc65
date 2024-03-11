const KEYS_ID = {
  "tknv": "tknv",
  "name": "name",
  "email": "email",
  "password": "password",
  "datePicker": "datePicker",
  "salary": "salary",
  "titleEmp": "titleEmp",
  "workTime": "workTime",
}

function getInfoEmployee() {
  const inputsForm = [
    ...document.querySelectorAll('.modal-body form .input-group input'),
    ...document.querySelectorAll('.modal-body form .input-group select')
  ]

  let newEmployee = new Employee();

  inputsForm.forEach((input) => {
    let inputId = input.id;
    newEmployee[inputId] = input.value;
  })

  return newEmployee;
}
