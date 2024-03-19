/**
 * Function to display error message by DOM ID
 * @param {string} idError - The ID of the DOM element to display the error message
 * @param {string} messError - The error message to display
 */
function displayErrorMessage(idError, messError) {
  const errorElement = document.querySelector(idError);

  if (errorElement) {
    errorElement.classList.add('d-inline-block')
    // errorElement.setAttribute('display', 'block')
    errorElement.innerHTML = messError;
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
  if (!input || input.trim() === '') {
    let content = `${fieldName} không được để trống`;
    displayErrorMessage(idError, content);
    return false;
  }

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
  if (!REGEXS.NUMBER.test(input)) {
    let content = `${fieldName} không phải là số`;
    displayErrorMessage(idError, content);
    return false;
  }
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
  const duplicateIndex = data.findIndex((item) => item[key] === input);

  if (duplicateIndex !== -1) {
    let content = `${input} đã tồn tại`;
    displayErrorMessage(idError, content);
    return false;
  }
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
    getMessError(idError, `Email không đúng định dạng`);
    return false;
  }

  return true;
}


/**
 * Function to check if a string is within a specified range [min, max] and display an error message if it is not
 * @param {number} input - The string to be validated
 * @param {number} min - The min of the allowed range (inclusive)
 * @param {number} max - The max of the allowed range (inclusive)
 * @param {string} idError - The ID of the DOM element to display the error message
 * @returns {boolean} - Returns true if the string is within the specified range, false otherwise
 */
function isValidLength(input, min, max, idError) {
  const LEN_INPUT = input.length;

  if (LEN_INPUT < min || max < LEN_INPUT) {
    let content = `${input} đã tồn tại`;
    displayErrorMessage(idError, content)
    return false;
  }
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
    displayErrorMessage(idError, `Password không đúng định dạng`)
    return false;
  }
  return true;
}


/**
 * Function to validate if the day part of a date is valid, considering leap years for February.
 * @param {string} date - The date string in "mm/dd/yyyy" format
 * @return {boolean} - Returns true if the day part is valid for the given month and year, false otherwise
 */
function validDayOfFebruary(date) {
  const [month, day, year] = date.split('/');
  const daysInMonth = new Date(year, month, 0).getDate();
  if (month === '02') return parseInt(day) <= daysInMonth;
}


/**
 * Function to validate if a string is in date format and display an error message by DOM ID
 * @param {string} input - The input string to be validated
 * @param {string} idError - The ID of the DOM element to display the error message
 * @return {boolean} - Returns true if the input is in date format, false otherwise
 */
function isValidDateFormat(input, idError) {
  if (!REGEXS.DATE.test(input) || !validDayOfFebruary(input)) {
    let content = `Date không đúng định dạng mm/dd/yyyy`;
    displayErrorMessage(idError, content)
    return false;
  }
  return true;
}
