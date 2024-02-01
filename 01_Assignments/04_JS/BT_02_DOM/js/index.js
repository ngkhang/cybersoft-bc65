// Reset all input
function resetAll(resultId) {
  const inputs = document.getElementsByTagName('input');

  resultId.innerHTML = '👉 Kết quả...';
  resultId.classList.remove('resultSuccess', 'resultError');
  resultId.classList.add('resultPedding');

  [...inputs].forEach((input) => {
    input.value = '';
  });
}

// Fake loading
function fakeLoading(exrciseId) {
  const spinnerId = document.getElementById('spinner');
  spinnerId.classList.remove('d-none');
  spinnerId.classList.add('d-flex');

  let timerId = setTimeout(() => {
    spinnerId.classList.remove('d-flex');
    spinnerId.classList.add('d-none');
    exrciseId.classList.remove('d-none')
  }, 500);
}

// Handle Submit with Enter keyboard
function handleEnter(event, exerciseId) {
  if (event.keyCode === 13) {
    switch (exerciseId) {
      case 'exercise01':
        getSalary();
        break;
      case 'exercise02':
        avergeNumber();
        break;
      case 'exercise03':
        convertMoney();
        break;
      case 'exercise04':
        calRectangle();
        break;
      default:
        sumTwoNumber();
        break;
    }
  };
}

// Handle Change Exercise
function handleChangeExercise(exerciseId) {
  const ID = exerciseId.slice(-1);
  const exerciseID = document.getElementById(exerciseId);
  const listExercise = document.getElementsByClassName('exercise');
  const listBtnExercise = document.getElementsByClassName('btn-exercise');
  const resultId = document.getElementById(`result_exercise_0${ID}`);

  resetAll(resultId);

  [...listBtnExercise].forEach((ele, index) => {
    (index === ID - 1)
      ? ele.classList.add('active')
      : ele.classList.remove('active');
  });

  [...listExercise].forEach((ele) => {
    ele.classList.add('d-none');
  });

  fakeLoading(exerciseID);
}

// BT 01 - Tính tiền lương nhân viên
function getSalary() {
  const dayId = document.getElementById('day');
  const moneyInDayId = document.getElementById('moneyInDay');
  const resultID = document.getElementById('result_exercise_01');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let output;

  if (!dayId.value * 1 && !moneyInDayId.value * 1) output = 'Vui lòng nhập input';
  else if (dayId.value * 1 === NaN || moneyInDayId.value === NaN) output = 'Input không phải là số';
  else if (!dayId.value * 1) output = 'Số ngày làm việc không hợp lệ';
  else if (!moneyInDayId.value * 1) output = 'Tiền lương ngày làm việc không hợp lệ';
  else output = dayId.value * 1 * moneyInDayId.value * 1;

  resultID.classList.add(`${(Number.isInteger(output)) ? 'resultSuccess' : 'resultError'}`);

  resultID.innerHTML = `👉 ${output}`;
}

// BT 02 - Tính giá trị trung bình của 5 số
function avergeNumber() {
  const COUNT = 5;
  const listNumber = document.getElementsByName('number_exercise02');
  const resultID = document.getElementById('result_exercise_02');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let total = 0;
  listNumber.forEach((ele) => {
    total += ele.value * 1;
  });

  let aver = total / COUNT;
  resultID.classList.add('resultSuccess');
  resultID.innerHTML = `👉 ${aver}`;
}

// BT 03 - Quy đổi tiền tệ: USD -> VND
function convertMoney(USD = 23_500) {
  const moneyId = document.getElementById('money');
  const resultID = document.getElementById('result_exercise_03');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let money = moneyId.value;
  let output;
  if (money === '') output = 'Vui lòng nhập số tiền'
  else if (!Number.isInteger(money * 1) || money * 1 < 0) output = 'Số tiền không hợp lệ'
  else output = money * 1 * USD;

  if (Number.isInteger(output)) {
    resultID.classList.add('resultSuccess');
    resultID.innerHTML = `👉 ${new Intl.NumberFormat('vn-VN').format(output)}`;
  }
  else {
    resultID.classList.add('resultError');
    resultID.innerHTML = `👉 ${output}`;
  }
}

// BT 04 - Tính chu vi và diện tích hình chữ nhật
function calRectangle() {
  const longId = document.getElementById('long');
  const wideId = document.getElementById('wide');
  const resultID = document.getElementById('result_exercise_04');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let longValue = longId.value;
  let wideValue = wideId.value;

  let output;
  let S, P;
  if (longValue === '' && wideValue === '') output = 'Vui lòng nhập chiều dài và chiều rộng';
  else if (longValue === '') output = 'Vui lòng nhập chiều dài';
  else if (wideValue === '') output = 'Vui lòng nhập chiều rộng';
  else if (!Number.isInteger(longValue * 1) || longValue * 1 < 0) output = 'Chiều dài không hợp lệ';
  else if (!Number.isInteger(wideValue * 1) || wideValue * 1 < 0) output = 'Chiều rộng không hợp lệ';
  else {
    S = longId.value * 1 * wideId.value * 1;
    P = (longId.value * 1 + wideId.value * 1) * 2;
    output = `Diện tích: ${S}; Chu vi: ${P}`;
  }

  resultID.classList.add(`${(Number.isInteger(S)) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = `👉 ${output}`;
}

// BT 05 - Tính tổng 2 ký số
function sumTwoNumber() {
  const numberId = document.getElementById('numberTwoCharactor');
  const resultID = document.getElementById('result_exercise_05');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let output;
  let numberVal = numberId.value;
  if (numberVal === '') output = 'Vui lòng không bỏ trống';
  else if (!Number.isInteger(numberVal * 1)) output = 'Vui lòng nhập chữ số';
  else if (numberVal * 1 < -99 || numberVal * 1 > 99) output = 'Vui lòng nhập số có 2 chữ số';
  else output = Math.trunc(((numberVal < 0) ? -numberVal : numberVal) / 10) + numberVal % 10;

  resultID.classList.add(`${(Number.isInteger(output)) ? 'resultSuccess' : 'resultError'}`);

  resultID.innerHTML = `👉 ${output}`;
}
