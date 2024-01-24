/*
BT 01 - Tính tiền lương nhân viên

- Input:
  - Số ngày đã làm việc

- Solution:
  1. Tạo biến và gán giá trị:
    - day: số ngày làm việc
    - moneyInDay: tiền lương 1 ngày (mặc định: moneyInday = 100000)
  2. Kiểm tra day có hợp lệ -> Không hợp lệ: in ra log "Invalid Day".
  3. Tạo và gán giá trị cho salary: salary = day * moneyInDay
  4. In giá trị salary ra log.

- Output:
  - Kết quả: giá trị salary hoặc "Invalid Day" (nếu không hợp lệ)
*/

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


/*
BT 02 - Tính giá trị trung bình của 5 số

- Input:
  - 5 số thực

- Solution:
  1. Tạo biến và gán giá trị:
    - num_1, num_2, num_3, num_4, num_5: tương ứng từ số thứ 1 đến số thứ 5.
    - COUNT: số số hạng (mặc định: COUNT = 5)
  2. Tạo và gán giá trị
    - total: tổng của 5 số hạng
      total = num_1 + num_2 + num_3 + num_4 + num_5
    - aver: giá trị trung bình của 5 số hạng
      aver = total / aver
  3. In giá trị aver ra log.

- Output:
  - Kết quả: aver
*/
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


/*
BT 03 - Quy đổi tiền tệ: USD -> VND

- Input:
  - Tiền mệnh giá USD

- Solution:
  1. Tạo biến và gán giá trị:
    - money: số tiền mệnh giá USD cần quy đổi.
    - USD: tỉ giá USD sang VND (mặc định: USD = 23500)
  2. Kiểm tra money có hợp lệ -> Không hợp lệ: in ra log "Invalid Money".
  3. Tạo và gán giá trị
    - monneyConvert: số tiền sau khi quy đổi
      monneyConvert = money * USD;
  4. Định dạng monneyConvert theo dạng VND
  5. In giá trị monneyConvert sau khi định dạng ra log.

- Output:
  - Kết quả: giá trị monneyConvert hoặc 'Invalid Money' (nếu money không hợp lệ)
*/

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

/*
BT 04 - Tính chu vi và diện tích hình chữ nhật

- Input:
  - Chiều dài và chiều rộng

- Solution:
  1. Tạo biến và gán giá trị:
    - long: chiều dài.
    - wide: chiều rộng.
  2. Kiểm tra long và wide có hợp lệ -> Không hợp lệ: in lỗi ra log.
  3. Tạo biến và gán giá trị cho S và P
    - S: diện tích hình chữ nhật
      S = long * wide;
    - P: chu vi hình chữ nhật
      P = (long + wide) * 2;
  5. In giá trị S và P ra log

- Output:
  - Kết quả: giá trị S và P hoặc in ra lỗi (nếu long hoặc wide không hợp lệ)
*/
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


/*
BT 05 - Tính tổng 2 ký số

- Input:
  - Số có 2 chữ số

- Solution:
  1. Tạo biến và gán giá trị:
    - number: số người dùng nhập vào.
  2. Kiểm tra number có hợp lệ -> Không hợp lệ: in lỗi ra log.
  3. Tính S và P
    - S = long * wide;
    - P = (long + wide) * 2;
  5. In giá trị S và P ra log

- Output:
  - Kết quả: giá trị total hoặc in ra lỗi (nếu number không hợp lệ)
*/
function sumTwoNumber(number) {
  let output;
  if (number >= 100) output = 'Invalid Number: number > 99';
  else if (number <= -100) output = 'Invalid Number: number < -99';
  else output = `Tổng: ${Math.trunc(((number < 0) ? -number : number) / 10) + number % 10}`;

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
