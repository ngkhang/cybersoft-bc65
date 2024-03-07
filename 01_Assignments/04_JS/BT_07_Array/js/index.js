const ARRAYS = [];

function initial() {
  let inputID = document.getElementById('originNumbers');
  inputID.innerHTML = ARRAYS.join(',');

}

// Handle button add
function handleAddNewNumbers() {
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
}

function getListNumber() {
  const strNumbers = document.querySelector('input#numbers').value;
  const messError = document.getElementById('numberHelpId');
  let content = '';
  let status = true;
  const listNumber = strNumbers.split(',');

  let isEmptyList = isEmpty(strNumbers, 'Các số nguyên');

  if (!isEmptyList.status) {
    content = isEmptyList.messError;
    status = isEmptyList.status;
  }
  else {

    for (let step = 0; step < listNumber.length; step++) {
      if (listNumber[step] === '' || Number.isNaN(listNumber[step] * 1)) {
        content = `Sai định dạng`;
        status = false;
        continue;
      }
    }
  }

  // Display origin numbers
  let inputID = document.getElementById('originNumbers');

  if (status) {
    const convertInput = listNumber.map((input) => input * 1);
    ARRAYS.push(...convertInput);

    inputID.innerHTML = '👉 ' + ARRAYS.join(', ');
    handleAddNewNumbers();

    // Handle autofocus input and clear input field
  }
  else inputID.innerHTML = content;
}

// Bài tập 01 - Tổng các số dương
function totalPositive() {
  let sizeArray = ARRAYS.length;
  let content = ' Danh sách rỗng';

  if (sizeArray) {
    let total = ARRAYS.reduce((sum, number) => sum += (number > 0) ? number : 0, 0);

    content = total === 0
      ? 'Không tồn tại số dương'
      : `Tổng: ${total}`;
  }

  let status = true; // Không cần validate input
  printOutput('#exercise01 p.result', content, status);
}

// Bài tập 02 - Đếm các số dương
function countPositive() {
  let sizeArray = ARRAYS.length;
  let content = ' Danh sách rỗng';
  if (sizeArray) {
    let count = 0;
    ARRAYS.forEach((number) => count += (number > 0) ? 1 : 0);

    content = count === 0
      ? 'Không có số dương'
      : `Số dương: ${count}`;
  }

  let status = true; // Không cần validate input
  printOutput('#exercise02 p.result', content, status);
}

// Bài tập 03 - Tìm số nhỏ nhất
function getMin() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';

  if (sizeArray) {
    let min = Infinity;
    ARRAYS.forEach((number) => min = (min >= number) ? number : min);

    content = `Số nhỏ nhất: ${min}`;
  }

  let status = true; // Không cần validate input
  printOutput('#exercise03 p.result', content, status);
}

// Bài tập 04 - Tìm số dương nhỏ nhất
function getPositiveMin() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';

  if (sizeArray) {
    let minPositive = Infinity;
    let max = -Infinity;

    ARRAYS.forEach((number) => {
      if (max < number && number > 0) {
        max = number;
        if (minPositive > max) minPositive = max;
      }
    });

    content = Number.POSITIVE_INFINITY === minPositive
      ? 'Không tồn tại số dương'
      : `Số dương nhỏ nhất: ${minPositive}`;
  }

  let status = true; // Không cần validate input
  printOutput('#exercise04 p.result', content, status);
}

// Bài tập 05 - Tìm số chẳn cuối cùng
function getPositiveLasted() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';
  if (sizeArray) {
    let positiveLasted;

    for (let index = sizeArray - 1; index >= 0; index--) {
      if (ARRAYS[index] !== 0 && ARRAYS[index] % 2 === 0) {
        positiveLasted = ARRAYS[index];
        break;
      }
    }

    content = positiveLasted ? `Số chẳn cuối cùng: ${positiveLasted}` : 'Không tồn tại số chẳn'
  }

  let status = true; // Không cần validate input
  printOutput('#exercise05 p.result', content, status);
}

// Bài tập 06 - Đổi chỗ 2 số theo vị trí
function swapTwoNumber() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';
  let status = true;

  if (sizeArray) {
    let indexNumber1 = document.getElementById('index1').value;
    let indexNumber2 = document.getElementById('index2').value;

    let validIdx1 = isNumber(indexNumber1, 'Vị trí 1');
    let validIdx2 = isNumber(indexNumber2, 'Vị trí 2');

    status = false;
    if (!validIdx1.status) content = validIdx1.messError;
    else if (validIdx1.data < 0 || validIdx1.data > sizeArray) content = 'Vị trí 1 ngoài phạm vi';
    else if (!validIdx2.status) content = validIdx2.messError;
    else if (validIdx2.data < 0 || validIdx2.data > sizeArray) content = 'Vị trí 2 ngoài phạm vi';
    else {
      status = true;
      const copyArr = [...ARRAYS];
      [copyArr[validIdx1.data - 1], copyArr[validIdx2.data - 1]] = [copyArr[validIdx2.data - 1], copyArr[validIdx1.data - 1]]

      content = `
        <span class='d-block'>Before: ${ARRAYS.join(', ')}</span>
        <span class='d-block'>After: ${copyArr.join(', ')}</span>
      `;
    }
  }

  printOutput('#exercise06 p.result', content, status);
}

// Bài tập 07 - Sắp xếp tăng dần
function sortedArray() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';

  if (sizeArray) {
    const arrSorted = [...ARRAYS].sort((a, b) => a - b);

    content = `
      <span class='d-block'>Before: ${ARRAYS.join(', ')}</span>
      <span class='d-block'>After: ${arrSorted.join(', ')}</span>
    `;
  }

  let status = true; // Không cần validate input
  printOutput('#exercise07 p.result', content, status);
}

// Bài tập 08 - Tìm số nguyên tố đầu tiên
function isPrimeNumber(number) {
  // Check number is Integer
  if (!Number.isInteger(number)) return false;
  const STOP_POINT = number - 1;

  for (let index = 2; index <= STOP_POINT; index++) {
    if (number % index === 0) return false;
  }

  return true;
}
function getFirstPrimeNumber() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';

  if (sizeArray) {
    let primeNumber = ARRAYS.find((number) => isPrimeNumber(number));

    content = primeNumber
      ? `Số nguyên tố đầu tiên: ${primeNumber}`
      : 'Không tồn tại số nguyên tố';
  }

  let status = true; // Không cần validate input
  printOutput('#exercise08 p.result', content, status);
}

// Bài tập 09 - Đếm số nguyên
function countInteger() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';

  if (sizeArray) {
    let countInt = ARRAYS.reduce((count, number) => count += Number.isInteger(number) ? 1 : 0, 0);

    content = countInt
      ? `Số số nguyên: ${countInt}`
      : 'Không tồn tại số nguyên';
  }

  let status = true; // Không cần validate input
  printOutput('#exercise09 p.result', content, status);
}

// Bài tập 10 - So sánh số lượng số âm và số dương
function comparePositiveAndNegative() {
  let sizeArray = ARRAYS.length;
  let content = 'Danh sách rỗng';

  if (sizeArray) {
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

  let status = true;  // Không cần validate input
  printOutput('#exercise10 p.result', content, status);
}