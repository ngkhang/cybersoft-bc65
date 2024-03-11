const TITLE_EMPLOYEE = {
  'Sếp': 3,
  'Trưởng phòng': 2,
  'Nhân viên': 1,
}

const LEVEL_EMPLOYEE = {
  Infinity: 'xuất sắc',
  191: 'giỏi',
  175: 'khá',
  159: 'trung bình',
}

function getLevelEmployee(workTime) {
  let keys = Object.keys(LEVEL_EMPLOYEE);

  for (let step = 0; step < keys.length; step++) {
    const key = keys[step];
    if (workTime <= key) return LEVEL_EMPLOYEE[key];
  }
}

function Employee(_tknv, _name, _email, _password, _datePicker, _salary, _titleEmp, _workTime) {
  this.tknv = _tknv;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.datePicker = _datePicker;
  this.salary = _salary;
  this.titleEmp = _titleEmp;
  this.workTime = _workTime;

  // Tinh tong luong nhan vien theo chuc vu
  this.getTotalSalary = () => this.salary * 1 * TITLE_EMPLOYEE[this.titleEmp];

  // Xep loai nhan vien theo gio lam viec
  this.getLevel = () => getLevelEmployee(this.workTime);
}