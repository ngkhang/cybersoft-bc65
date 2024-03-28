// Get level employee based on working time
function getLevelEmployee(workTime) {
  let rankEmployee = RANKS_OF_EMPLOYEE.find(
    (rank) => rank.minRank <= workTime * 1 && workTime * 1 <= rank.maxRank
  );

  return rankEmployee.title;
}

// TODO: Còn properties: totalSalary và levelEmployee
function Employee(
  _tknv,
  _name,
  _email,
  _password,
  _datePicker,
  _salary,
  _titleEmp,
  _workTime
) {
  // Properties
  this.tknv = _tknv;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.datePicker = _datePicker;
  this.salary = _salary * 1;
  this.titleEmp = _titleEmp;
  this.workingTime = _workTime * 1;

  // Methods
  // Get total salary based on title employee
  this.getTotalSalary = () =>
    this.salary * 1 * TITLE_EMPLOYEE[this.titleEmp].value;

  // Get level employee
  this.getLevel = () => getLevelEmployee(this.workTime);
}
