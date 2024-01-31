function handleExerce(exerciseId) {
  let exerciseID = document.getElementById(exerciseId);
  let listExercise = document.getElementsByClassName('exercise');
  let listBtnExercise = document.getElementsByClassName('btn-exercise');

  let id = exerciseId.slice(-1);
  [...listBtnExercise].forEach((ele, index) => {
    (index === id - 1)
      ? ele.classList.add('active')
      : ele.classList.remove('active');
  });

  [...listExercise].forEach((ele) => {
    ele.classList.add('d-none');
  });


  let spinnerId = document.getElementById('spinner');
  spinnerId.classList.remove('d-none');
  spinnerId.classList.add('d-flex');

  let timerId = setTimeout(() => {
    spinnerId.classList.remove('d-flex');
    spinnerId.classList.add('d-none');
    exerciseID.classList.remove('d-none')
  }, 500);
}

// BT 01 - Tính tiền lương nhân viên
function getSalary() {
  let dayId = document.getElementById('day');
  let moneyInDayId = document.getElementById('moneyInDay');
  let resultID = document.getElementById('result_exercise_01');

  let output = dayId.value * moneyInDayId.value;

  resultID.innerHTML = `${output}`;
}


// BT 02 - Tính giá trị trung bình của 5 số
function avergeNumber() {
  let listNumber = document.getElementsByName('number_exercise02');
  let resultID = document.getElementById('result_exercise_02');

  const COUNT = 5;
  let total = 0;
  listNumber.forEach((ele) => {
    total += ele.value * 1;
  });

  let aver = total / COUNT;
  resultID.innerHTML = `${aver}`;
}


// BT 03 - Quy đổi tiền tệ: USD -> VND
function convertMoney(USD = 23_500) {
  let moneyId = document.getElementById('money');
  let resultID = document.getElementById('result_exercise_03');

  let monneyConvert = (moneyId.value) ? moneyId.value * USD : 0;

  resultID.innerHTML = `${new Intl.NumberFormat('vn-VN').format(monneyConvert)}`;
}


// BT 04 - Tính chu vi và diện tích hình chữ nhật
function calRectangle() {
  let longId = document.getElementById('long');
  let wideId = document.getElementById('wide');
  let resultID = document.getElementById('result_exercise_04');

  let S = longId.value * 1 * wideId.value * 1;
  let P = (longId.value * 1 + wideId.value * 1) * 2;

  resultID.innerHTML = `Diện tích: ${S}; Chu vi: ${P}`;
}


// BT 05 - Tính tổng 2 ký số
function sumTwoNumber() {
  let numberId = document.getElementById('numberTwoCharactor');
  let resultID = document.getElementById('result_exercise_05');

  let number = numberId.value * 1;

  resultID.innerHTML = `Tổng: ${Math.trunc(((number < 0) ? -number : number) / 10) + number % 10}`;
}
