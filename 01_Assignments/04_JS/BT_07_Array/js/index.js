// Global variable
const ARRAYS = [];

// Check empty array
function isEmptyArray(arr) {
  return arr.length === 0;
}

function initial() {
  let inputID = document.getElementById('originNumbers');
  inputID.innerHTML = ARRAYS.join(',');
}

// Handle button add
function handleAddNewNumbers() {
  handleLoading('spinner', 'output')
    .then(() => {
      totalPositive();
      countPositive();
      getMin();
      getPositiveMin();
      getPositiveLasted();
      // swapTwoNumber();
      sortedArray();
      getFirstPrimeNumber();
      countInteger();
      comparePositiveAndNegative();

    })
    .then(() => resetInputField('input#numbers'))
}

function getListNumber() {
  const strNumbers = document.querySelector('input#numbers').value;
  const messError = document.getElementById('numberHelpId');
  messError.innerHTML = '';

  let content = '';
  let status = true;
  const listNumber = strNumbers.trim().split(',');

  let validInput = isEmpty(strNumbers, 'Các số nguyên');

  if (!validInput.status) {
    content = validInput.messError;
    status = validInput.status;
  }
  else {

    let sizeNumber = listNumber.length;
    for (let step = 0; step < sizeNumber; step++) {
      const number = listNumber[step];
      let validNumber = isNumber(number, `Nội dung`, '');

      if (!validNumber.status) {
        content = validNumber.messError;
        status = validNumber.status;
        break;
      }
    }

    if (status) {
      const convertInput = listNumber.map((input) => input * 1);
      ARRAYS.push(...convertInput);
      content = '👉 ' + ARRAYS.join(', ');
      handleAddNewNumbers();
      resetInputField('input#numbers');
      printOutput('p#originNumbers', content, status);
      return;
    }
  }
  messError.innerHTML = content;

}

// Bài tập 01 - Tổng các số dương
function totalPositive() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let total = ARRAYS.reduce((sum, number) => sum += (number > 0) ? number : 0, 0);

    content = total === 0
      ? 'Không tồn tại số dương'
      : `Tổng: ${total}`;
  }
  else content = 'Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise01 p.result', content, status);
}

// Bài tập 02 - Đếm các số dương
function countPositive() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let count = 0;
    ARRAYS.forEach((number) => count += (number > 0) ? 1 : 0);

    content = count === 0
      ? 'Không có số dương'
      : `Số dương: ${count}`;
  }
  else content = ' Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise02 p.result', content, status);
}

// Bài tập 03 - Tìm số nhỏ nhất
function getMin() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let min = Infinity;
    ARRAYS.forEach((number) => min = (min >= number) ? number : min);

    content = `Số nhỏ nhất: ${min}`;
  }
  else content = 'Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise03 p.result', content, status);
}

// Bài tập 04 - Tìm số dương nhỏ nhất
function getPositiveMin() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let minPositive;

    ARRAYS.forEach((number) => {
      minPositive = (
        number > 0 &&
        (minPositive === undefined || minPositive > number)
      )
        ? number
        : minPositive;
    });

    content = minPositive === undefined
      ? 'Không tồn tại số dương'
      : `Số dương nhỏ nhất: ${minPositive}`;
  }
  else content = 'Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise04 p.result', content, status);
}

// Bài tập 05 - Tìm số chẳn cuối cùng
function getPositiveLasted() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let positiveLasted;

    for (let index = ARRAYS.length - 1; index >= 0; index--) {
      if (ARRAYS[index] !== 0 && ARRAYS[index] % 2 === 0) {
        positiveLasted = ARRAYS[index];
        break;
      }
    }

    content = positiveLasted
      ? `Số chẳn cuối cùng: ${positiveLasted}`
      : 'Không tồn tại số chẳn'
  }
  else content = 'Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise05 p.result', content, status);
}

// Bài tập 06 - Đổi chỗ 2 số theo vị trí
function swapTwoNumber() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);
  let sizeArr = ARRAYS.length;

  let status = true;

  if (!isEmptyArr) {
    let indexNumber1 = document.getElementById('index1').value;
    let indexNumber2 = document.getElementById('index2').value;

    let validIdx1 = isNumber(indexNumber1, 'Vị trí 1');
    let validIdx2 = isNumber(indexNumber2, 'Vị trí 2');

    status = false;
    if (!validIdx1.status) content = validIdx1.messError;
    else if (validIdx1.data <= 0 || validIdx1.data > sizeArr) content = 'Vị trí 1 ngoài phạm vi';
    else if (!validIdx2.status) content = validIdx2.messError;
    else if (validIdx2.data <= 0 || validIdx2.data > sizeArr) content = 'Vị trí 2 ngoài phạm vi';
    else {
      status = true;
      const copyArr = [...ARRAYS];
      [copyArr[validIdx1.data - 1], copyArr[validIdx2.data - 1]] = [copyArr[validIdx2.data - 1], copyArr[validIdx1.data - 1]]

      content = `
      <span class='d-block'>Before: ${ARRAYS.join(', ')}</span>
      <span class='d-block'>After: ${copyArr.join(', ')}</span>
      `;
      resetInputField('#exercise06 input');
    }
  }
  else content = 'Danh sách rỗng';

  printOutput('#exercise06 p.result', content, status);
}

// Bài tập 07 - Sắp xếp tăng dần
function sortedArray() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    const arrSorted = [...ARRAYS].sort((a, b) => a - b);

    content = `
    <span class='d-block'>Before: ${ARRAYS.join(', ')}</span>
    <span class='d-block'>After: ${arrSorted.join(', ')}</span>
    `;
  }
  else content = 'Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise07 p.result', content, status);
}

// Bài tập 08 - Tìm số nguyên tố đầu tiên
function isPrimeNumber(number) {
  // Check number is Integer
  if (!Number.isInteger(number) || number <= 1) return false;
  const STOP_POINT = number - 1;

  for (let index = 2; index <= STOP_POINT; index++) {
    if (number % index === 0) return false;
  }

  return true;
}
function getFirstPrimeNumber() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let primeNumber = ARRAYS.find((number) => isPrimeNumber(number));

    content = primeNumber
      ? `Số nguyên tố đầu tiên: ${primeNumber}`
      : 'Không tồn tại số nguyên tố';
  }
  else content = 'Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise08 p.result', content, status);
}

// Bài tập 09 - Đếm số nguyên
function countInteger() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let countInt = ARRAYS.reduce((count, number) => count += Number.isInteger(number) ? 1 : 0, 0);

    content = countInt
      ? `Số số nguyên: ${countInt}`
      : 'Không tồn tại số nguyên';
  }
  else content = 'Danh sách rỗng';

  let status = true; // Không cần validate input
  printOutput('#exercise09 p.result', content, status);
}

// Bài tập 10 - So sánh số lượng số âm và số dương
function comparePositiveAndNegative() {
  let content = '';
  let isEmptyArr = isEmptyArray(ARRAYS);

  if (!isEmptyArr) {
    let countPosition = 0;
    let countNegative = 0;

    ARRAYS.forEach((number) => {
      if (number !== 0) {
        (number > 0)
          ? countPosition = countPosition + 1
          : countNegative = countNegative + 1
      }
    });

    let compare = countPosition > countNegative
      ? 'lớn hơn'
      : (countPosition < countNegative) ? 'nhỏ hơn' : 'bằng';

    content = `
    <span class='d-block'>Số số dương: ${countPosition} - Số số âm: ${countNegative}</span>
    <span class='d-block'>Số lượng số dương ${compare} số lượng số âm</span>
    `;
  }
  else content = 'Danh sách rỗng';

  let status = true;  // Không cần validate input
  printOutput('#exercise10 p.result', content, status);
}