const arrNumbers01 = [];

function handleEnter(event, func) {
  if (event.keyCode === 13) func();
}

function practice01() {
  let numberId = document.getElementById('practice01_Number');

  arrNumbers01.push(numberId.value * 1);
  numberId.value = '';
  numberId.focus();

  let resultId = document.getElementById('result01');

  let sumEven = 0;
  let countNegative = 0;
  let sumNegative = 0;


  arrNumbers01.forEach((number) => {
    if (number % 2 === 0) sumEven += number;
    if (number < 0) {
      countNegative++;
      sumNegative += number;
    }
  })

  resultId.innerHTML = `
  <p>Dãy số: ${arrNumbers01.join(',')}</p>
  <ul>
    <li>Tổng các số chẳn: ${sumEven}</li>
    <li>Số số âm: ${countNegative}</li>
    <li>Tổng các số âm: ${sumNegative}</li>
  </ul>
  `;
}

// Practice 02:
let arrNumber = [2, 4, 11, 13, 23, 42, 19];
document.querySelector('div#arrayOrigin').innerHTML += arrNumber;

function updateResult(content) {
  document.querySelector('div#arrayAfter').innerHTML = content;
}

// Action 01: Thêm 1 số mới
function addNewNumber() {
  let newNumber = document.querySelector('div#action01>input').value * 1;

  arrNumber.push(newNumber);
  updateResult(arrNumber);
}

// Action 02: Tìm và xóa 1 số.
function deleteNumber() {
  let delNumber = document.querySelector('div#action02>input').value * 1;

  let position = arrNumber.indexOf(delNumber);
  arrNumber.splice(position, 1);
  let content = (position === -1) ? `Số ${delNumber} không tồn tại` : arrNumber;
  updateResult(content);
}

// Action 03: Tìm và xóa 1 số.
function getMinMax() {
  let min = Infinity;
  let max = -Infinity;

  arrNumber.forEach((number) => {
    min = (min > number) ? number : min;
    max = (max < number) ? number : max;
  })

  let content = `MIN: ${min} - MAX: ${max}`;
  updateResult(content);
}


// Action 04: Tổng các số chẳn
function getSumEven() {
  let sumEven = 0;

  arrNumber.forEach((number) => {
    sumEven += (number % 2 === 0) ? number : 0;
  })

  let content = `Tổng các số chẳn: ${sumEven}`;
  updateResult(content);
}

// Action 05: Tìm số lớn thứ 2
function getSecondMax() {
  let max = -Infinity;
  let secondMax;

  arrNumber.forEach((number) => {
    if (max < number) {
      secondMax = max;
      max = number;
    }
  })

  let content = `Số lớn thứ 2: ${secondMax}`;
  updateResult(content);
}


