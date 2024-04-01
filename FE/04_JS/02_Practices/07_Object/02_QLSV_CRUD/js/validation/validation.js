function getMessError(selector, messErr) {
  document.querySelector(`#${selector}`).innerHTML = messErr;
}

// Validate isEmpty
function isEmpty(value, idErr, fielName) {
  const output = {
    status: true,
    messErr: '',
  }

  if (value.trim() === '') {
    output.status = false;
    output.messErr = `${fielName} không được để trống`;
  }
  getMessError(idErr, output.messErr);

  return output.status;
}

// Validation isNumber
function isNumber(value, idErr, fielName) {
  const REGX = /^[0-9]+$/g;

  const output = {
    status: true,
    messErr: '',
  }

  if (!REGX.test(value.trim())) {
    output.status = false;
    output.messErr = `${fielName} chỉ được là số`;
  }
  getMessError(idErr, output.messErr);

  return output.status;
}

// Validation isNumber
function isString(value, idErr, fielName) {
  const REGX = /^[a-zA-Z]+$/g;

  const output = {
    status: true,
    messErr: '',
  }

  if (!REGX.test(value.trim())) {
    output.status = false;
    output.messErr = `${fielName} chỉ được là chữ`;
  }
  getMessError(idErr, output.messErr);

  return output.status;
}

// Validation isUnique
function isUnique(value, database, idErr, fielName) {
  const output = {
    status: true,
    messErr: '',
  }

  let isUnique = database.some((item) => item.MaSV === value.trim());

  if (!isUnique) {
    output.status = false;
    output.messErr = `${fielName} đã tồn tại`;
  }
  getMessError(idErr, output.messErr);

  return output.status;
}

function checkLengthInput(value, idErr, fielName, start, end) {
  const output = {
    status: true,
    messErr: '',
  }

  let lenInput = value.trim().length;

  if (lenInput < start || lenInput > end) {
    output.status = false;
    output.messErr = `${fielName} phải nằm trong khoảng từ ${start} đến ${end}`;
  }
  getMessError(idErr, output.messErr);

  return output.status;
}


const listFunc = {
  'isEmpty': (value, idErr, fielName) => isEmpty(value, idErr, fielName),
  'isNumber': (value, idErr, fielName) => isNumber(value, idErr, fielName),
  'isString': (value, idErr, fielName) => isString(value, idErr, fielName),
}