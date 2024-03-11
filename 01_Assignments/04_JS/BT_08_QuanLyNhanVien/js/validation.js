function isEmpty(input, fieldName) {
  const output = {
    status: true,
    messError: '',
    data: input,
  }

  if (input === '') {
    output.status = false;
    output.messError = `${fieldName} không được bỏ trống;`
  }
  return output;
}

// Validation Account
function isValidAccount(input) {
  const regx = /[0-9]{4,6}/g;
  const output = {
    status: true,
    messError: '',
    data: input,
  }

  if (input.length < 4 || input.length > 6 || input.match(regx) === null) {
    output.status = false;
    output.messError = 'Account phải là số, có 4 - 6 ký số';
  }
  return output;
}