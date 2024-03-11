// Get infor student
function getInfoStudent() {
  let inputs = [...document.querySelectorAll('#formQLSV input'),
  ...document.querySelectorAll('#formQLSV select')];

  let infoStudent = {};

  inputs.forEach((input) => {
    let idInput = input.id.replace('txt', '');
    infoStudent[idInput] = input.value;
  })

  let newSinhVien = new SinhVien(
    infoStudent.MaSV,
    infoStudent.TenSV,
    infoStudent.Email,
    infoStudent.Pass,
    infoStudent.NgaySinh,
    infoStudent.khSV,
    infoStudent.DiemToan,
    infoStudent.DiemLy,
    infoStudent.DiemHoa,
  );
  return newSinhVien;
}

// Render list student
function render(lstStudent) {
  let output = document.getElementById('tbodySinhVien');
  let content = lstStudent.map((student) => {
    return `
      <tr>
        <td>${student.MaSV}</td>
        <td>${student.TenSV}</td>
        <td>${student.Email}</td>
        <td>${student.NgaySinh}</td>
        <td>${student.khSV}</td>
        <td>${student.tinhDTB()}</td>
        <td>
        <button onclick="edit('${student.MaSV}')" class='btn btn-warning'>Edit</button>
        <button onclick="del('${student.MaSV}')" class='btn btn-danger'>Delete</button>
        </td>
      </tr>
    `
  });
  output.innerHTML = content.join('');
}
