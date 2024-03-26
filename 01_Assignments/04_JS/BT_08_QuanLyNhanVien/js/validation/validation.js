/**
 * Function to display error message by DOM ID
 * @param {string} idError - The ID of the DOM element to display the error message
 * @param {string} messError - The error message to display
 */
function displayErrorMessage(idError, messError) {
  const errorElement = document.querySelector(idError);

  if (errorElement) {
    if (messError === "") {
      errorElement.classList.remove("d-inline-block");
    } else {
      errorElement.classList.add("d-inline-block");
      errorElement.innerHTML = messError;
    }
  }
}

/**
 * Function to check if a field is empty and display an error message if it is
 * @param {string} input - The input string to be validated
 * @param {string} fieldName - The name of the field being validated (for error message)
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the field is not empty, false otherwise
 */
function isEmpty(input, fieldName, idError) {
  if (!input || input.trim() === "") {
    let content = `${fieldName} không được để trống`;
    displayErrorMessage(idError, content);
    return false;
  }

  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to validate if a string is an integer and display an error message by DOM ID
 * @param {string} input - The input string to be validated
 * @param {string} fieldName - The name of the field being validated (for error message)
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is a number, false otherwise
 */
function isNumber(input, fieldName, idError) {
  if (!REGEXS.NUMBER.test(input.trim())) {
    let content = `${fieldName} phải là chữ số`;
    displayErrorMessage(idError, content);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to check if a number is within a specified range [start, end] and display an error message if it is not
 * @param {number} input - The number to be validated
 * @param {string} fieldName - The name of the field being validated (for error message)
 * @param {number} start - The start of the allowed range (inclusive)
 * @param {number} end - The end of the allowed range (inclusive)
 * @param {string} idError - The ID of the DOM element to display the error message
 * @returns {boolean} - Returns true if the number is within the specified range, false otherwise
 */
function isNumberInRange(input, fieldName, start, end, idError) {
  if (input < start || end < input) {
    let content = `${fieldName} phải trong khoảng từ ${start} đến ${end}`;
    displayErrorMessage(idError, content);
    return false;
  }

  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to validate if a string is in name format and display an error message by DOM ID
 * @param {string} input - The input string to be validated
 * @param {string} fieldName - The name of the field being validated (for error message)
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is in name format, false otherwise
 */
function isValidateName(input, fieldName, idError) {
  if (!REGEXS.NAME.test(input.trim())) {
    let content = `${fieldName} không đúng định dạng tên`;
    displayErrorMessage(idError, content);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to validate if a key is unique within a given data array and display an error message by DOM ID
 * @param {string} input - The key to be checked for uniqueness
 * @param {Array} data - The array of objects to be searched for the key
 * @param {string} key - The property name of the key in the objects of the data array
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the key is unique, false otherwise
 */
function isUniqueKey(input, data, key, idError) {
  if (data.length === 0) return true;

  const duplicateIndex = data.findIndex((item) => item[key] === input);
  if (duplicateIndex !== -1) {
    let content = `${input} đã tồn tại`;
    displayErrorMessage(idError, content);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to validate if a string is in email format and display an error message by DOM ID
 * @param {string} input - The input string to be validated
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is in email format, false otherwise
 */
function isEmailFormat(input, idError) {
  if (!REGEXS.EMAIL.test(input.trim())) {
    displayErrorMessage(idError, `Email không đúng định dạng`);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to check if a string is within a specified range [min, max] and display an error message if it is not
 * @param {number} input - The string to be validated
 * @param {string} fieldName - The name of the field being validated (for error message)
 * @param {number} min - The min of the allowed range (inclusive)
 * @param {number} max - The max of the allowed range (inclusive)
 * @param {string} idError - The ID of the DOM element to display the error message
 * @returns {boolean} - Returns true if the string is within the specified range, false otherwise
 */
function isValidLength(input, fieldName, min, max, idError) {
  const LEN_INPUT = input.length;

  if (LEN_INPUT < min || max < LEN_INPUT) {
    let content = `${fieldName} phải có độ dài ${min} đến ${max}`;
    displayErrorMessage(idError, content);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to validate if a string is in password format and display an error message by DOM ID
 * @param {string} input - The input string to be validated
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is in password format, false otherwise
 */
function isPasswordFormat(input, idError) {
  if (!REGEXS.PASSWORD.test(input)) {
    displayErrorMessage(
      idError,
      `Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt`
    );
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to validate if the day part of a date is valid, considering leap years for February.
 * @param {string} date - The date string in "mm/dd/yyyy" format
 * @return {boolean} - Returns true if the day part is valid for the given month and year, false otherwise
 */
function validDayOfFebruary(date) {
  const [month, day, year] = date.split("/");
  const daysInMonth = new Date(year, month, 0).getDate();
  if (month === "02") return parseInt(day) <= daysInMonth;
}

/**
 * Function to validate if a string is in date format and display an error message by DOM ID
 * @param {string} input - The input string to be validated
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is in date format, false otherwise
 */
function isValidDateFormat(input, idError) {
  if (!REGEXS.DATE.test(input) && !validDayOfFebruary(input)) {
    let content = `Ngày không đúng định dạng mm/dd/yyyy`;
    displayErrorMessage(idError, content);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

function handleValidate(employee, action = "EDIT") {
  let isValid = true;

  if (action === "ADD") {
    isValid &=
      isEmpty(employee.tknv, "Tài khoản", "#tbTKNV") &&
      isNumber(employee.tknv, "Tài khoản", "#tbTKNV") &&
      isValidLength(employee.tknv, "Tài khoản", 4, 6, "#tbTKNV") &&
      isUniqueKey(employee.tknv, EMPLOYEES, "tknv", "#tbTKNV");
  }

  // Validate Name
  isValid &=
    isEmpty(employee.name, "Tên", "#tbName") &&
    isValidateName(employee.name, "Tên", "#tbName");
  // Validate Email
  isValid &=
    isEmpty(employee.email, "Email", "#tbEmail") &&
    isEmailFormat(employee.email, "#tbEmail");
  // Validate Password
  isValid &=
    isEmpty(employee.password, "Mật khẩu", "#tbPassword") &&
    isValidLength(employee.password, "Mật khẩu", 6, 10, "#tbPassword") &&
    isPasswordFormat(employee.password, "#tbPassword");
  // Validate datePicker
  isValid &=
    isEmpty(employee.datePicker, "Ngày làm", "#tbDatePicker") &&
    isValidDateFormat(employee.datePicker, "#tbDatePicker");

  // Validate Salary
  isValid &=
    isEmpty(employee.salary, "Lương", "#tbSalary") &&
    isNumber(employee.salary, "Lương", "#tbSalary") &&
    isNumberInRange(
      employee.salary,
      "Lương",
      1_000_000,
      20_000_000,
      "#tbSalary"
    );
  // Validate Title Employee
  isValid &= isEmpty(employee.titleEmp, "Chức vụ", "#tbTitleEmp");
  // Validate Working Time
  isValid &=
    isEmpty(employee.workTime, "Giờ làm việc", "#tbworkTime") &&
    isNumber(employee.workTime, "Giờ làm việc", "#tbworkTime") &&
    isNumberInRange(employee.workTime, "Giờ làm việc", 80, 200, "#tbworkTime");

  return isValid;
}
