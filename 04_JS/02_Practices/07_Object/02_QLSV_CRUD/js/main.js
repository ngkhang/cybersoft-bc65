// List Student Global
let ListStudent = [];

const fieldValidation = {
  MaSV: {
    idErr: 'spanMaSV',
    fieldName: 'Mã sinh viên',
    arrCheck: ['isEmpty', 'isNumber'],
  },
  TenSV: {
    idErr: 'spanTenSV',
    fieldName: 'Tên sinh viên',
    arrCheck: ['isEmpty', 'isString'],
  },
  Email: {
    idErr: 'spanEmailSV',
    fieldName: 'Email sinh viên',
    arrCheck: ['isEmpty'],
  },
  Pass: {
    idErr: 'spanMatKhau',
    fieldName: 'Mật khẩu',
    arrCheck: ['isEmpty'],
  },
  NgaySinh: {
    idErr: 'spanNgaySinh',
    fieldName: 'Ngày sinh',
    arrCheck: ['isEmpty'],
  },
  khSV: {
    idErr: 'spanKhoaHoc',
    fieldName: 'Khóa học',
    arrCheck: ['isEmpty'],
  },
  DiemToan: {
    idErr: 'spanToan',
    fieldName: 'Điểm Toán',
    arrCheck: ['isEmpty', 'isNumber'],
  },
  DiemLy: {
    idErr: 'spanLy',
    fieldName: 'Điểm Lý',
    arrCheck: ['isEmpty', 'isNumber'],
  },
  DiemHoa: {
    idErr: 'spanHoa',
    fieldName: 'Điểm Hóa',
    arrCheck: ['isEmpty', 'isNumber'],
  },
}

// Create new student
function addNewStudent() {
  let newStudent = getInfoStudent();

  let converArr = Object.entries(newStudent);
  let isValid = true;

  for (let idx = 0; idx < converArr.length - 1; idx++) {
    const [key, value] = converArr[idx];
    let idErr = fieldValidation[key].idErr;

    let arrFiel = fieldValidation[key].arrCheck;
    for (let step = 0; step < arrFiel.length; step++) {
      const nameFunc = arrFiel[step];
      let isCheck = listFunc[nameFunc](value, idErr, fieldValidation[key].fieldName);
      if (!isCheck) {
        isValid = false;
        break;
      }
    }
  }
  if (isValid) {
    ListStudent.push(newStudent);
    render(ListStudent);
    resetField();
  }

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
  let nameStudent = document.getElementById('txtSearch').value.trim();

  if (nameStudent.length < 0) return;

  let student = ListStudent.filter((stu) => stu.TenSV.includes(nameStudent));
  render(nameStudent === '' ? ListStudent : student);
  nameStudent.value = '';
}
