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

    if (!numberValid.status || !Number.isInteger(number * 1)) {
      output = numberValid.mess || `Số thứ ${i + 1} không là số nguyên`;
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
  const userId = document.getElementById('user');
  let userVal = userId.value.toLowerCase();
  const resultID = document.getElementById('result_exercise_02');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let output;
  switch (userVal) {
    case 'ba':
    case 'b':
      output = '👉 Thế giới có gì mới? cùng khám phá nào';
      break;
    case 'mẹ':
    case 'm':
      output = '👉 Mùa sales đã tới, cùng sắm đồ thôi';
      break;
    case 'anh trai':
    case 'a':
      output = '👉 Cùng chiến game thôi nào';
      break;
    case 'em gái':
    case 'e':
      output = '👉 Kpop có tin tức mới, xem nhanh nào';
      break;
    case '':
      output = 'Vui lòng không bỏ trống';
      break;
    default:
      output = 'Vui lòng nhập đúng định dạng';
      break;
  }

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
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
    if ((sides[0] + sides[1] <= sides[2])
      || (sides[0] + sides[2] <= sides[1])
      || (sides[1] + sides[2] <= sides[0])) {

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
    } else output = '👉 Tam giác thường';
  }
  console.log(output);

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

function isEmpty(input) {
  let status = true;
  let mess = '';

  if (input === '') {
    mess = `Vui lòng nhập ${fieldName}`;
    status = false;
  }

  return {
    mess,
    status,
  };
}

function isNumber(input, option = 'Int') {
  let status = true;
  let mess = '';

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


// BT 01 - Quản lý tuyển sinh
function printResult() {
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

  const GRADE_BASE = 28;
  let a = 4;
  let b = 10;
  let c = 8;
  let khuvuc = 'B';
  let doituong = 1;

  let totalThree = a + b + c;
  let result = '';

  let areaGrade = KHU_VUC[khuvuc];
  let objectGrade = DOI_TUONG[doituong];
  let totalGrade = areaGrade + objectGrade + totalThree;

  if (a <= 0 || b <= 0 || c <= 0) {
    result = `Tổng điểm: ${totalGrade} - Kết quả: Rớt`;
  }
  else if (totalGrade >= GRADE_BASE) result = `Tổng điểm: ${totalGrade} - Kết quả: Đậu`;
  else result = `Tổng điểm: ${totalGrade} - Kết quả: Rớt`;

  console.log(result);
  return result;
}

// BT 02 - Tính tiền điện
function calculatorEng() {
  let userName = 'BAS';
  let countKw = 45.6;
  const LEVEL = {
    1: {
      range: 50,
      price: 500,
    },
    2: {
      range: 50,
      price: 650,
    },
    3: {
      range: 100,
      price: 850,
    },
    4: {
      range: 150,
      price: 1100,
    },
    5: {
      range: Infinity,
      price: 1300,
    },
  }

  let step = 1;
  let price = 0;

  while (countKw !== 0) {
    let levelCurrent = LEVEL[step];

    if (countKw > levelCurrent.range) {
      price += levelCurrent.range * levelCurrent.price;
      countKw = countKw - levelCurrent.range;
      step++;
    }
    else {
      price += countKw * levelCurrent.price;
      countKw = 0;
    }
  };
  return price;
}

// BT 03 - Tính tiền thuế thu nhập cá nhân
function calculatorTax() {
  const LEVEL_TAX = {
    1: {
      range: 60,
      percent: 0.05,
    },
    2: {
      range: 120,
      percent: 0.10,
    },
    3: {
      range: 210,
      percent: 0.15,
    },
    4: {
      range: 384,
      percent: 0.2,
    },
    5: {
      range: 624,
      percent: 0.25,
    },
    6: {
      range: 960,
      percent: 0.3,
    },
    7: {
      range: Infinity,
      percent: 0.35,
    },
  };

  const PRICE_TAX = 4_000_000;
  const PRICE_PERSON = 1_600_000;
  let fullName = 'Nguyen Van A';
  let totalSalary = 90_000_000;
  let person = 2;

  let cost = totalSalary - PRICE_TAX - person * PRICE_PERSON;
  console.log(cost * 0.1);


}
// 8,280,000


// BT 04 - Tính tiền cáp
function calculatorCable() {
  const TYPE_CUSTOMER = {
    'Nhà dân': {
      costBase: 4.5,
      costStandard: {
        basic: 20.5,
        bonus: 0,
      },
      costChannel: {
        count: 1,
        price: 7.5,
      },
    },
    'Doanh nghiệp': {
      costBase: 15,
      costStandard: {
        basic: 75,
        bonus: 5,
      },
      costChannel: {
        count: 1,
        price: 50,
      },
    },
  };

  let codeCustomer = 'ABC123';
  let typeCustomer = 'Doanh nghiệp';
  let connects = 15;
  let channels = 80;

  let priceBase = TYPE_CUSTOMER[typeCustomer].costBase;
  let priceChannel = channels * TYPE_CUSTOMER[typeCustomer].costChannel.count * TYPE_CUSTOMER[typeCustomer].costChannel.price;
  let priceConnect = (connects > 10) ? (connects - 10) * TYPE_CUSTOMER[typeCustomer].costStandard.bonus + TYPE_CUSTOMER[typeCustomer].costStandard.basic : connects * TYPE_CUSTOMER[typeCustomer].costStandard.basic;

  let totalPrice = priceBase + priceChannel + priceConnect;

  console.log(totalPrice);
  return totalPrice;
}
// 4115
