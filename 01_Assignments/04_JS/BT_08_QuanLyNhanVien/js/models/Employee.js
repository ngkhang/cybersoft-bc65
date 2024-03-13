function getLevelEmployee(workTime) {
  // let keys = Object.keys(RANGE_LEVEL_EMPLOYEE);

  // for (let step = 0; step < keys.length; step++) {
  //   const key = keys[step];
  //   if (workTime <= key) return RANGE_LEVEL_EMPLOYEE[key];
  // }

  const range = Object.entries(RANGE_LEVEL_EMPLOYEE);
  for (let index = 0; index < range.length; index++) {
    const size = range[index][1];
    if (workTime * 1 <= size) return range[index][0];
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