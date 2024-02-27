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
        printResult();
        break;
      case 'exercise02':
        calElectricityBill();
        break;
      case 'exercise03':
        // calTaxBill();
        break;
      default:
        // getTypeTriangle();
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

  const resultID = document.getElementById('result_exercise_01');
  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

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

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 02 - Tính tiền điện
function calElectricityBill() {
  let userName = document.getElementById('userName').value;
  let countKw = document.getElementById('countKw').value;
  const resultID = document.getElementById('result_exercise_02');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

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
  let output;

  let checkUserName = validateEmpty(userName, 'Tên người sử dụng');
  let checkCountKw = validateNumber(countKw, 'Số KW', 'Float');
  if (!checkUserName.status) output = checkUserName.mess;
  else if (!checkCountKw.status) output = checkCountKw.mess;
  else if (countKw * 1 < 0) output = `Số KW không hợp lệ.`


  if (output === undefined) {
    let step = 1;
    let price = 0;
    let kw = countKw
    while (kw !== 0) {
      let levelCurrent = LEVEL[step];

      if (kw > levelCurrent.range) {
        price += levelCurrent.range * levelCurrent.price;
        kw = kw - levelCurrent.range;
        step++;
      }
      else {
        price += kw * levelCurrent.price;
        kw = 0;
      }
    };
    output = `👉 Người sử dụng: ${userName} sử dụng ${countKw} KW - Phí: ${price}`;
  }

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

// BT 03 - Tính tiền thuế thu nhập cá nhân
function calTaxBill() {
  const TAX_LEVEL = {
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
  const MONEY_OF_DEPENDANT = 1_600_000;
  let taxpayers = document.getElementById('taxpayers').value;
  let income = document.getElementById('income').value;
  let dependant = document.getElementById('dependant').value;

  const resultID = document.getElementById('result_exercise_03');

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');

  let output;

  let checkTaxPayers = validateEmpty(taxpayers, 'Họ và tên');
  let checkIncome = validateNumber(income, 'Thu nhập', 'Float');
  let checkDependant = validateNumber(dependant, 'Người phụ thuộc');

  if (!checkTaxPayers.status) output = checkTaxPayers.mess;
  else if (!checkIncome.status) output = checkIncome.mess;
  else if (income * 1 < 0) output = `Thu nhập không được là số âm`;
  else if (!checkDependant.status) output = checkDependant.mess;
  else if (dependant * 1 < 0) output = `Số người phụ thuộc không được là số âm`;


  if (output === undefined) {
    let cost = income * 1 - PRICE_TAX - dependant * 1 * MONEY_OF_DEPENDANT;

    output = `👉 ${taxpayers} thu nhập ${income}đ/năm - Tiền thuế phải trả: ${cost}`;
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

  resultID.classList.add(`${(output.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = output;
}

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

  return totalPrice;
}
// 4115
