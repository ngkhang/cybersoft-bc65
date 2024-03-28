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
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is in name format, false otherwise
 */
function isNameFormat(input, idError) {
  if (!REGEXS.NAME.test(input.trim())) {
    let content = "Tên không đúng định dạng tên";
    displayErrorMessage(idError, content);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

/**
 * Function to validate if a key is unique within a given data array and display an error message by DOM ID
 * @param {string} input - The key to be checked for uniqueness
 * @param {string} key - The property name of the key in the objects of the data array
 * @param {string} fieldName - The name of the field being validated (for error message)
 * @param {Array} data - The array of objects to be searched for the key
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the key is unique, false otherwise
 */
function isUniqueKey(input, key, fieldName, data, idError) {
  if (data.length === 0) return true;

  const duplicateIndex = data.findIndex((item) => item[key] === input);
  if (duplicateIndex !== -1) {
    let content = `${fieldName} đã tồn tại`;
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
function validDayInFebruary(date) {
  const [month, day, year] = date.split("/");
  const daysInMonth = new Date(year, month, 0).getDate();

  if (month === "02") return parseInt(day) <= daysInMonth;
  return true;
}

/**
 * Function to validate if a string is in date format and display an error message by DOM ID
 * @param {string} input - The input string to be validated
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is in date format, false otherwise
 */
function isDateFormat(input, idError) {
  if (!REGEXS.DATE.test(input) || !validDayInFebruary(input)) {
    let content = `Ngày không đúng định dạng mm/dd/yyyy`;
    displayErrorMessage(idError, content);
    return false;
  }
  displayErrorMessage(idError, "");
  return true;
}

function validateTKNV(tknv, { fieldName, idError }) {
  return (
    isEmpty(tknv, fieldName, idError) &&
    isNumber(tknv, fieldName, idError) &&
    isValidLength(tknv, fieldName, 4, 6, idError) &&
    isUniqueKey(tknv, "tknv", fieldName, EMPLOYEES, idError)
  );
}

function validateName(name, { fieldName, idError }) {
  return isEmpty(name, fieldName, idError) && isNameFormat(name, idError);
}

function validateEmail(email, { fieldName, idError }) {
  return isEmpty(email, fieldName, idError) && isEmailFormat(email, idError);
}

function validatePassword(passWord, { fieldName, idError }) {
  const OPTIONS = {
    sizeLen: [6, 10],
  };

  return (
    isEmpty(passWord, fieldName, idError) &&
    isValidLength(passWord, fieldName, ...OPTIONS.sizeLen, idError) &&
    isPasswordFormat(passWord, idError)
  );
}

function validateDatePicker(datePicker, { fieldName, idError }) {
  return (
    isEmpty(datePicker, fieldName, idError) && isDateFormat(datePicker, idError)
  );
}

function validateSalary(salary, { fieldName, idError }) {
  const OPTIONS = {
    range: [1_000_000, 20_000_000],
  };

  return (
    isEmpty(salary, fieldName, idError) &&
    isNumber(salary, fieldName, idError) &&
    isNumberInRange(salary, fieldName, ...OPTIONS.range, idError)
  );
}

function validateTitleEmployee(titleEmp, { fieldName, idError }) {
  return isEmpty(titleEmp, fieldName, idError);
}

function validateWorkingTime(workTime, { fieldName, idError }) {
  const OPTIONS = {
    range: [80, 200],
  };
  return (
    isEmpty(workTime, fieldName, idError) &&
    isNumber(workTime, fieldName, idError) &&
    isNumberInRange(workTime, fieldName, ...OPTIONS.range, idError)
  );
}

/**
 * Validates employee data based on the specified action.
 * @param {object} employee - The employee data to validate.
 * @param {string} action - The action to perform (default is "EDIT").
 * @returns {boolean} - Returns true if all inputs are valid, false otherwise.
 */
function handleValidate(employee, action = "EDIT") {
  let isValid = true;

  // Validation TKNV when add new employee
  if (action === "ADD")
    isValid = validateTKNV(employee.tknv, PROPS_EMPLOYEE.tknv);

  // Validate Name
  isValid &= validateName(employee.name, PROPS_EMPLOYEE.name);

  // Validate Email
  isValid &= validateEmail(employee.email, PROPS_EMPLOYEE.email);

  // Validate Password
  isValid &= validatePassword(employee.password, PROPS_EMPLOYEE.password);

  // Validate datePicker
  isValid &= validateDatePicker(employee.datePicker, PROPS_EMPLOYEE.datePicker);

  // Validate Salary
  isValid &= validateSalary(employee.salary, PROPS_EMPLOYEE.salary);

  // Validate Title Employee
  isValid &= validateTitleEmployee(employee.titleEmp, PROPS_EMPLOYEE.titleEmp);

  // Validate Working Time
  isValid &= validateWorkingTime(employee.workTime, PROPS_EMPLOYEE.workingTime);

  return isValid;
}
