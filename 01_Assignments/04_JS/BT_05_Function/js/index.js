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
        printResult();
        break;
      case 'exercise02':
        calElectricityBill();
        break;
      case 'exercise03':
        calTaxBill();
        break;
      default:
        calculatorCable();
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

// Format currency VND
function convertCurrencyVnd(number) {
  const LOCALE = 'vi-VN';
  const OPTIONS = {
    style: 'currency',
    currency: 'VND',
  };
  return new Intl.NumberFormat(LOCALE, OPTIONS).format(number);
}

// Print output
function printOutput(id, content) {
  const resultID = document.getElementById(id);

  resultID.classList.remove('resultPedding', 'resultError', 'resultSuccess');
  resultID.classList.add(`${(content.startsWith('👉')) ? 'resultSuccess' : 'resultError'}`);
  resultID.innerHTML = content;
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

// BT 02 - Tính tiền điện
function calElectricityBill() {
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

  let userName = document.getElementById('userName').value;
  let countKw = document.getElementById('countKw').value;

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

  printOutput('result_exercise_02', output);
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

  let output;

  let checkTaxPayers = validateEmpty(taxpayers, 'Họ và tên');
  let checkIncome = validateNumber(income, 'Thu nhập', 'Float');
  let checkDependant = validateNumber(dependant, 'Người phụ thuộc');

  if (!checkTaxPayers.status) output = checkTaxPayers.mess;
  else if (!Number.isNaN(taxpayers * 1)) output = `Họ và tên phải là chữ`;
  else if (!checkIncome.status) output = checkIncome.mess;
  else if (income * 1 < 0) output = `Thu nhập không được là số âm`;
  else if (dependant * 1 === 0) dependant = 0;
  else if (!checkDependant.status) output = checkDependant.mess;
  else if (dependant * 1 < 0) output = `Số người phụ thuộc không được là số âm`;


  if (output === undefined) {
    let prevCost = income * 1 - PRICE_TAX - dependant * 1 * MONEY_OF_DEPENDANT;
    let cost = 0;

    let step = 1;
    while (prevCost !== 0) {
      let range = TAX_LEVEL[step].range * 1_000_000;
      let percent = TAX_LEVEL[step].percent;
      if (prevCost >= range) {
        cost += range * percent;
        prevCost = prevCost - range;
      }
      else {
        cost += prevCost * percent;
        prevCost = 0;
      }
      step++;
    }

    output = `👉 ${taxpayers} thu nhập ${convertCurrencyVnd(income)}/năm - Tiền thuế thu nhập cá nhân: ${convertCurrencyVnd(cost)}`;
  }

  printOutput('result_exercise_03', output);
}

// BT 04 - Tính tiền cáp
function handleTypeCustomer() {
  let containerConnect = document.getElementById('containerConnect');
  let typeCustomer = document.getElementById('typeCustomer').value;

  switch (typeCustomer) {
    case 'Doanh nghiệp':
      containerConnect.classList.remove('d-none');
      break;
    default:
      containerConnect.classList.add('d-none');
      break;
  }
}

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

  let codeCustomer = document.getElementById('codeCustomer').value;
  let typeCustomer = document.getElementById('typeCustomer').value;
  let connects = document.getElementById('connect').value;
  let channels = document.getElementById('channel').value;

  let output;

  // Validate input
  let checkCodeCustomer = validateEmpty(codeCustomer, 'Mã khách hàng');
  let checkTypeCustomer = validateEmpty(typeCustomer, 'Loại khách hàng');
  let checkConnects = validateNumber(connects, 'Số kết nối');
  let checkChannels = validateNumber(channels, 'Số kênh');

  if (!checkCodeCustomer.status) output = checkCodeCustomer.mess;
  else if (!checkTypeCustomer.status) output = checkTypeCustomer.mess;
  else if (!checkChannels.status) output = checkChannels.mess;
  else if (typeCustomer === 'Doanh nghiệp' && !checkConnects.status) output = checkConnects.mess;

  const PRICE = TYPE_CUSTOMER[typeCustomer];

  if (output === undefined) {
    let priceBase = PRICE.costBase;
    let priceChannel = channels * PRICE.costChannel.count * PRICE.costChannel.price;

    let priceConnect = 0;
    if (typeCustomer === 'Doanh nghiệp') {
      priceConnect = (connects > 10) ? (connects - 10) * PRICE.costStandard.bonus + PRICE.costStandard.basic : PRICE.costStandard.basic;
    }
    else priceConnect = PRICE.costStandard.basic

    let totalPrice = convertCurrencyVnd(priceBase + priceChannel + priceConnect);

    output = `👉 Mã khách hàng: ${codeCustomer} - Tổng chi phí: ${totalPrice}`;
  }

  printOutput('result_exercise_04', output);
}

