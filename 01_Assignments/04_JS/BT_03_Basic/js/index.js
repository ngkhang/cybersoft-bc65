// Validate input
function validate(input, fieldName = '') {
  let status = false;
  let mess = '';

  if (input === '')
    mess = `Vui lòng nhập ${fieldName}`;
  else if (Number.isNaN(input * 1))
    mess = `${fieldName} không hợp lệ`;
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
        sortThreeNumber();
        break;
      case 'exercise02':
        greeting();
        break;
      case 'exercise03':
        filterNumber();
        break;
      default:
        getTypeTriangle();
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

// BT 01 - Sắp xếp 3 số tăng dần
function sortThreeNumber() {
  const numbers = document.querySelectorAll('#exercise01 input');
  const resultID = document.getElementById('result_exercise_01');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  const arrNumber = [...numbers];
  const arr = [];
  let output;
  for (let i = 0; i < arrNumber.length; i++) {
    let number = arrNumber[i].value;
    let numberValid = validate(number, `Số thứ ${i + 1}`);

    if (!numberValid.status) {
      output = numberValid.mess;
      break;
    }
    arr.push(number * 1);
  }

  if (output === undefined) {
    arr.sort((a, b) => a - b);
    output = `👉 Thứ tự tăng dần: ${arr.join(', ')}`;
  }

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 02 - Chào hỏi thành viên trong nhà
function greeting() {
  // const
}


// BT 03 - Đếm số số lẻ và số số chẳn
function filterNumber() {
  const numbers = document.querySelectorAll('#exercise03 input');
  const resultID = document.getElementById('result_exercise_03');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  const arrNumber = [...numbers];
  let output;
  let oddNumber = 0;
  let evenNumber = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    let number = arrNumber[i].value;
    let numberValid = validate(number, `Số thứ ${i + 1}`);

    if (!numberValid.status || !Number.isInteger(number * 1)) {
      output = numberValid.mess || `Số thứ ${i + 1} không là số nguyên`;
      break;
    }
  }

  if (output === undefined) {
    for (let i = 0; i < arrNumber.length; i++) {
      let number = arrNumber[i].value;
      (number * 1 % 2 === 0)
        ? evenNumber++
        : oddNumber++
    }

    output = `👉 Số số lẻ: ${oddNumber}. Số số chẳn: ${evenNumber}`;
  }

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 04 - Xác định loại tam giác
function getTypeTriangle() {
  const numbers = document.querySelectorAll('#exercise04 input');

  const resultID = document.getElementById('result_exercise_04');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  const arrNumber = [...numbers];
  let output;
  let sides = [];
  for (let i = 0; i < arrNumber.length; i++) {
    let number = arrNumber[i].value;
    let numberValid = validate(number, `Cạnh thứ ${i + 1}`);

    if (!numberValid.status) {
      output = numberValid.mess;
      break;
    }
    sides[i] = number * 1;
  }

  if (output === undefined) {
    if (!(sides[0] + sides[1] > sides[2])
      && !(sides[0] + sides[2] > sides[1])
      && !(sides[1] + sides[2] > sides[0])) {

      output = 'Không phải là tam giác';
    }
    else if (sides[0] === sides[1]
      || sides[0] === sides[2]
      || sides[1] === sides[2]) {
      output = '👉 Tam giác cân';
    }
    else if (sides[0] === sides[1] === sides[2]) {
      output = '👉 Tam giác đều';
    }
    else if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2
      || sides[0] ** 2 + sides[2] ** 2 === sides[1] ** 2
      || sides[1] ** 2 + sides[2] ** 2 === sides[0] ** 2) {
      output = '👉 Tam giác vuông';
    }
  }

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}