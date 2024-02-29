// Validate empty input
function validateEmpty(input, fieldName) {
  let status = true;
  let mess = '';

  if (input === '' || input === undefined) {
    mess = `Vui lòng nhập ${fieldName}`;
    status = false;
  }

  return {
    mess,
    status,
  };
}

// Validate number is interger or float
function validateNumber(input, fieldName, option = 'Int') {
  let status = true;
  let mess = '';

  let isEmpty = validateEmpty(input, fieldName);
  if (isEmpty.status === false) {
    return isEmpty;
  }

  if (Number.isNaN(input * 1)) {
    mess = `${fieldName} không phải là số`;
    status = false;
  }
  else if (option === 'Int' && !Number.isInteger(input * 1)) {
    mess = `${fieldName} không phải là số nguyên`;
    status = false;
  }

  return {
    mess,
    status,
  };
}

// Reset all input
function resetAll() {
  // Reset value input
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.value = '';
    input.removeAttribute('autofocus');
  });

  // Reset output container
  const outputs = document.querySelectorAll('.exercise>p');

  outputs.forEach((output) => {
    output.innerHTML = '👉 Kết quả...';

    output.classList.remove('resultPedding', 'resultError', 'resultSuccess');
    output.classList.add('resultPedding');
  })
}

// Fake loading
function fakeLoading(exrciseId) {
  const spinnerId = document.getElementById('spinner');
  spinnerId.classList.remove('d-none');
  spinnerId.classList.add('d-flex');

  let timerId = setTimeout(() => {
    // Turn on/off spinner
    spinnerId.classList.remove('d-flex');
    spinnerId.classList.add('d-none');
    exrciseId.classList.remove('d-none');

    // Set auto focus input
    const firstInput = exrciseId.querySelector('input');
    if (firstInput) firstInput.focus();
  }, 300);
}

// Handle Submit with Enter keyboard
function handleEnter(event, exerciseId) {
  if (event.keyCode === 13) {
    switch (exerciseId) {
      case 'exercise01':
        // func();
        break;
      case 'exercise02':
        // func();
        break;
      case 'exercise03':
        // func();
        break;
      case 'exercise04':
        // func();
        break;
      default:
        // func();
        break;
    }
  };
}

// Handle Change Exercise
function handleChangeExercise(exerciseId) {
  const ID = exerciseId.slice(-1);
  const exerciseID = document.getElementById(exerciseId);
  const listExercise = document.querySelectorAll('.container-right .exercise');
  const listBtnExercise = document.querySelectorAll('.btn-exercise');

  resetAll();

  listBtnExercise.forEach((ele, index) => (index === ID * 1 - 1)
    ? ele.classList.add('active')
    : ele.classList.remove('active')
  );

  listExercise.forEach((ele) => ele.classList.add('d-none'));

  fakeLoading(exerciseID);
}

// Print output
function printOutput(id, content) {
  const resultID = document.getElementById(id);

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');
  resultID.classList.add(`${(content.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = content;
}

// BT 01 - Quản lý tuyển sinh
function getMin() {
  const KHU_VUC = {
    "A": 2,
    "B": 1,
    "C": 0.5,
    "X": 0,
  };

  const DOI_TUONG = {
    1: 2.5,
    2: 1.5,
    3: 1,
    0: 0,
  };

  let baseGrade = document.getElementById('baseGrade').value;
  let area = document.getElementById('areas').value;
  let objectStudent = document.getElementById('objectStudent').value;
  let grades = document.getElementsByName('grades');
  let output;

  let checkBase = validateNumber(baseGrade, 'Điểm chuẩn', 'Float');
  let checkArea = validateEmpty(area, 'Khu vực');
  let checkObjectStudent = validateEmpty(objectStudent, 'Đối tượng dự thi');

  if (!checkBase.status) output = checkBase.mess;
  else if (!checkArea.status) output = checkArea.mess;
  else if (!checkObjectStudent.status) output = checkObjectStudent.mess;
  else {
    let lstGrade = [...grades];
    for (let i = 0; i < lstGrade.length; i++) {
      let grade = lstGrade[i].value;
      let checkGrade = validateNumber(grade, `Điểm môn thứ ${i + 1}`, 'Float');
      if (!checkGrade.status) output = checkGrade.mess;
      else if (grade * 1 > 10 || grade * 1 < 0) output = `Điểm môn thứ ${i + 1} không hợp lệ`;

      if (output) break;
    }
  }

  if (output === undefined) {
    let totalThree = 0;
    let isFail = false;
    [...grades].forEach((grade) => {
      totalThree += grade.value * 1;
      if (grade.value * 1 <= 0) isFail = true;
    });

    let areaGrade = KHU_VUC[area];
    let objectGrade = DOI_TUONG[objectStudent];
    let totalGrade = areaGrade + objectGrade + totalThree;

    output = (isFail || totalGrade < baseGrade)
      ? `Tổng điểm: ${totalGrade} - Kết quả: Rớt`
      : `👉Tổng điểm: ${totalGrade} - Kết quả: Đậu`;
  }

  printOutput('result_exercise_01', output);
}

// BT 01 - Tim số nguyên dương n nhỏ nhất

// BT 02 - Tính tổng S(n) = x + x^2 + ... + x^n


// BT 03 - Tính giai thừa của số n
// Cách 1: Sử dụng đệ quy
function calFactorial(number) {
  return (number === 1) ? 1 : number * calFactorial(number - 1);
}
// Cách 2: Sử dụng loop
// function calFactorialLoop(number) {
//   let output = 1;
//   for (let step = 1; step <= number; step++) {
//     output *= step;
//   }
//   return output;
// }

function printFactorial() {
  let number = document.getElementById('').value;

  let output;
  let checkNumber = validateNumber(number, 'Số n');
  if (!checkNumber.status) output = checkNumber.mess;
  else if (number * 1 <= 0) output = 'Số n phải là số dương';
  else {
    output = `👉 Số ${number}  có giai thừa là ${calFactorial(number * 1)}`;
  };

  printOutput('result_exercise_03', output);
}


// BT 04 - In 10 thẻ div

// BT 05 - In dãy số nguyên tố từ 1 đến `n`
