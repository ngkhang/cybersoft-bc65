// List Student Global
let ListStudent = [];

// Create new student
function addNewStudent() {
  let newStudent = getInfoStudent();
  ListStudent.push(newStudent);
  render(ListStudent);
  resetField();
}

// Update infor student
function edit(idStudent) {
  let student = ListStudent.find((stu) => stu.MaSV === idStudent);

  let inputs = [...document.querySelectorAll('#formQLSV input'),
  ...document.querySelectorAll('#formQLSV select')];

  inputs.forEach((input) => {
    let idInput = input.id.replace('txt', '');
    if (idInput === 'MaSV') input.readOnly = true;

    input.value = student[idInput];
  });
}

function handleBtnUpdate() {
  let updateStudent = getInfoStudent();

  let oldInfoStudent = ListStudent.find((stu) => stu.MaSV === updateStudent.MaSV);

  Object.keys(oldInfoStudent).forEach((key) => {
    oldInfoStudent[key] = updateStudent[key];
  })

  render(ListStudent);
  resetField();
}

// Delete Student
function del(idStudent) {
  let student = ListStudent.filter((stu) => stu.MaSV !== idStudent);
  ListStudent = [...student];
  render(ListStudent);
}

// Reset field input
function resetField() {
  let inputs = [...document.querySelectorAll('#formQLSV input'),
  ...document.querySelectorAll('#formQLSV select')];

  inputs.forEach((input) => {
    input.value = '';
    if (input.id.replace('txt', '') === 'MaSV') input.readOnly = false;
  });
}

// Search student
function searchStudent() {
  let nameStudent = document.getElementById('txtSearch').value;
  let student = ListStudent.filter((stu) => stu.TenSV === nameStudent);

  render(nameStudent === '' ? ListStudent : student);
  nameStudent.value = '';
}
