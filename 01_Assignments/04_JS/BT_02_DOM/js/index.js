// Validate input
function validate(input, fieldName = '', type = '') {
  let status = false;
  let mess = '';

  if (input === '')
    mess = `Vui lòng nhập ${fieldName}`;
  else if (Number.isNaN(input * 1))
    mess = `${fieldName} không hợp lệ`;
  else if (type === 'checkWith0' && input * 1 < 0) {
    mess = `${fieldName} nhỏ hơn 0`;
  }
  else status = true;

  return {
    status,
    mess,
  };
}

// Reset all input
function resetAll(resultId) {
  const inputs = document.getElementsByTagName('input');

  resultId.innerHTML = '👉 Kết quả...';
  resultId.classList.remove('resultSuccess', 'resultError');
  resultId.classList.add('resultPedding');

  [...inputs].forEach((input) => input.value = '');
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
  }, 300);
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

  let dayVal = dayId.value;
  let moneyInDayVal = moneyInDayId.value;

  let dayValid = validate(dayVal, 'Số ngày làm việc', 'checkWith0');
  let moneyInDayValid = validate(moneyInDayVal, 'Tiền lương 1 ngày', 'checkWith0');

  let output = (moneyInDayValid.status && dayValid.status)
    ? `👉 Tiền lương: ${dayVal * 1 * moneyInDayVal * 1}`
    : `
        ${!moneyInDayValid.status ? `${moneyInDayValid.mess}<br/>` : ''}
        ${!dayValid.status ? dayValid.mess : ''}
    `;

  resultID.classList.add(`${(moneyInDayValid.status && dayValid.status) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 02 - Tính giá trị trung bình của 5 số
function avergeNumber() {
  const COUNT = 5;
  const listNumber = document.getElementsByName('number_exercise02');
  const resultID = document.getElementById('result_exercise_02');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let total = 0;
  let errorMess = '';
  let arrNum = [...listNumber];
  for (let i = 0; i < arrNum.length; i++) {
    let numberValid = validate(arrNum[i].value, `Số thứ ${i + 1}`);
    if (!numberValid.status) {
      errorMess = numberValid.mess;
      break;
    }

    total += arrNum[i].value * 1;
  }

  let output = (errorMess === '')
    ? `👉 Giá trị trung bình: ${total / COUNT}`
    : errorMess;

  resultID.classList.add(`${(errorMess === '') ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 03 - Quy đổi tiền tệ: USD -> VND
function convertMoney() {
  const USD = 23_500;
  const moneyId = document.getElementById('money');
  const resultID = document.getElementById('result_exercise_03');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let money = moneyId.value;

  let moneyValid = validate(money, 'Số tiền USD', 'checkWith0');
  let output = (moneyValid.status)
    ? `👉 ${new Intl.NumberFormat('vn-VN').format(money * 1 * USD)}`
    : moneyValid.mess;

  resultID.classList.add(`${(moneyValid.status) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 04 - Tính chu vi và diện tích hình chữ nhật
function calRectangle() {
  const longId = document.getElementById('long');
  const wideId = document.getElementById('wide');
  const resultID = document.getElementById('result_exercise_04');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let longValue = longId.value;
  let wideValue = wideId.value;

  let longValid = validate(longValue, 'Chiều dài', 'checkWith0');
  let wideValid = validate(wideValue, 'Chiều rộng', 'checkWith0');

  let output = (longValid.status && wideValid.status)
    ? `👉 Diện tích: ${longValue * 1 * wideValue * 1} --- Chu vi: ${(longValue * 1 + wideValue * 1) * 2}`
    : `
        ${!longValid.status ? `${longValid.mess}<br/>` : ''}
        ${!wideValid.status ? wideValid.mess : ''}
    `;

  resultID.classList.add(`${(longValid.status && wideValid.status) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 05 - Tính tổng 2 ký số
function sumTwoNumber() {
  const numberId = document.getElementById('numberTwoCharactor');
  const resultID = document.getElementById('result_exercise_05');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let output;
  let numberVal = numberId.value;
  let total = NaN;

  let numberValid = validate(numberVal, 'Số');

  if (!numberValid.status) output = numberValid.mess;
  else if (numberVal * 1 < -99 || numberVal * 1 > 99) output = 'Vui lòng nhập số có 2 chữ số';
  else {
    if (numberVal < 0) numberVal = Math.abs(numberVal)
    total = Math.trunc(numberVal / 10) + numberVal % 10;
    output = `👉 Tổng: ${total}`;
  }

  resultID.classList.add(`${(!Number.isNaN(total)) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}
