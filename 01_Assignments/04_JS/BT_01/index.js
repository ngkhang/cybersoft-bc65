// BT 01 - Tính tiền lương nhân viên
function getSalary(day, moneyInday = 100000) {
  if (day < 0) return 'Invalid day';

  let salary = (day) ? day * moneyInday : 0;
  return `Lương: ${salary}`;
}

const BT1_TEST_CASE_1 = 10;
const BT1_TEST_CASE_2 = 0;
const BT1_TEST_CASE_3 = 2;
const BT1_TEST_CASE_4 = -2;

console.log('-------- BT 01 - Tính tiền lương nhân viên');
console.log(`Số ngày làm việc ${BT1_TEST_CASE_1} -`, getSalary(BT1_TEST_CASE_1));
console.log(`Số ngày làm việc ${BT1_TEST_CASE_2} -`, getSalary(BT1_TEST_CASE_2));
console.log(`Số ngày làm việc ${BT1_TEST_CASE_3} -`, getSalary(BT1_TEST_CASE_3));
console.log(`Số ngày làm việc ${BT1_TEST_CASE_4} -`, getSalary(BT1_TEST_CASE_4));



// BT 02 - Tính giá trị trung bình của 5 số
function avergeNumber(nums) {
  const [num_1, num_2, num_3, num_4, num_5] = [...nums];
  const COUNT = 5;
  let total = num_1 + num_2 + num_3 + num_4 + num_5;
  let aver = total / COUNT
  return `Giá trị trung bình: ${aver}`;
}

const BT2_TEST_CASE_1 = [0, 0, 0, 0, 0];
const BT2_TEST_CASE_2 = [1, 1, 1, 1, 1];
const BT2_TEST_CASE_3 = [1, -10, 1, 1, 1];
const BT2_TEST_CASE_4 = [1.03, 0.05, 1, 2, 2.68];

console.log('-------- BT 02 - Tính giá trị trung bình của 5 số');
console.log(`5 số hạng là ${[...BT2_TEST_CASE_1]} -`, avergeNumber(BT2_TEST_CASE_1));
console.log(`5 số hạng là ${[...BT2_TEST_CASE_2]} -`, avergeNumber(BT2_TEST_CASE_2));
console.log(`5 số hạng là ${[...BT2_TEST_CASE_3]} -`, avergeNumber(BT2_TEST_CASE_3));
console.log(`5 số hạng là ${[...BT2_TEST_CASE_4]} -`, avergeNumber(BT2_TEST_CASE_4));


// BT 03 - Quy đổi tiền tệ: USD -> VND
function convertMoney(money, USD = 23_500) {
  if (money < 0) return 'Invalid Money';

  let monneyConvert = (money) ? money * USD : 0;
  return `Số tiền VND: ${new Intl.NumberFormat('vn-VN').format(monneyConvert)}`;
}

const BT3_TEST_CASE_1 = 0;
const BT3_TEST_CASE_2 = -1000;
const BT3_TEST_CASE_3 = 10;
const BT3_TEST_CASE_4 = 10.5;

console.log('-------- BT 03 - Quy đổi tiền tệ: USD -> VND');
console.log(`Số tiền USD: ${BT3_TEST_CASE_1} -`, convertMoney(BT3_TEST_CASE_1));
console.log(`Số tiền USD: ${BT3_TEST_CASE_2} -`, convertMoney(BT3_TEST_CASE_2));
console.log(`Số tiền USD: ${BT3_TEST_CASE_3} -`, convertMoney(BT3_TEST_CASE_3));
console.log(`Số tiền USD: ${BT3_TEST_CASE_4} -`, convertMoney(BT3_TEST_CASE_4));


// BT 04 - Tính chu vi và diện tích hình chữ nhật
function calRectangle(long, wide) {
  if (long <= 0 && wide <= 0) return 'Invalid Number: long and wide <= 0';
  else if (long <= 0) return 'Invalid Number: long <= 0';
  else if (wide <= 0) return 'Invalid Number: wide <= 0';

  let S = long * wide;
  let P = (long + wide) * 2;
  return `Diện tích: ${S}; Chu vi: ${P}`;
}

const BT4_TEST_CASE_1 = [0, 0];
const BT4_TEST_CASE_2 = [0, 1];
const BT4_TEST_CASE_3 = [1, 0];
const BT4_TEST_CASE_4 = [-10, 2];
const BT4_TEST_CASE_5 = [10, 2];

console.log('-------- BT 04 - Tính chu vi và diện tích hình chữ nhật');
console.log(`Chiều dài: ${BT4_TEST_CASE_1[0]}, Chiều rộng: ${BT4_TEST_CASE_1[1]} -`, calRectangle(...BT4_TEST_CASE_1));
console.log(`Chiều dài: ${BT4_TEST_CASE_2[0]}, Chiều rộng: ${BT4_TEST_CASE_2[1]} -`, calRectangle(...BT4_TEST_CASE_2));
console.log(`Chiều dài: ${BT4_TEST_CASE_3[0]}, Chiều rộng: ${BT4_TEST_CASE_3[1]} -`, calRectangle(...BT4_TEST_CASE_3));
console.log(`Chiều dài: ${BT4_TEST_CASE_4[0]}, Chiều rộng: ${BT4_TEST_CASE_4[1]} -`, calRectangle(...BT4_TEST_CASE_4));
console.log(`Chiều dài: ${BT4_TEST_CASE_5[0]}, Chiều rộng: ${BT4_TEST_CASE_5[1]} -`, calRectangle(...BT4_TEST_CASE_5));


// BT 05 - Tính tổng 2 ký số
function sumTwoNumber(number) {
  let output;
  if (number >= 100) output = 'Invalid Number: number > 99';
  else if (number <= -100) output = 'Invalid Number: number < -99';
  else {
    number = (number < 0) ? Math.abs(number) : number;
    output = `Tổng: ${Math.trunc(number / 10) + number % 10}`;
  }

  return output;
}

const BT5_TEST_CASE_1 = 991;
const BT5_TEST_CASE_2 = 12;
const BT5_TEST_CASE_3 = -12;
const BT5_TEST_CASE_4 = -100;

console.log('-------- BT 05 - Tính tổng 2 ký số');
console.log(`Số: ${BT5_TEST_CASE_1} -`, sumTwoNumber(BT5_TEST_CASE_1));
console.log(`Số: ${BT5_TEST_CASE_2} -`, sumTwoNumber(BT5_TEST_CASE_2));
console.log(`Số: ${BT5_TEST_CASE_3} -`, sumTwoNumber(BT5_TEST_CASE_3));
console.log(`Số: ${BT5_TEST_CASE_4} -`, sumTwoNumber(BT5_TEST_CASE_4));
