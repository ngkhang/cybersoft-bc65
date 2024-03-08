# Section 07: JavaScript - Array

- Input chung:
  - Danh sách các số người dùng nhập vào.
  - Định dạng:
    - Nhập từng số, ví dụ: `10`; `-9.5`
    - Nhập nhiều số, ví dụ: `0, 10, 8, -19`; `2,3,1,5,5`
  - Validate:
    - Theo đúng định dạng
    - Chỉ chứa số
    - Không bỏ trống

## Bài tập 01: Tổng các số dương

### Input

### Solution

- Tạo biến `total` và gán giá trị của `reduce()`:
  - Xét điều kiện: `number > 0`, thỏa: `total += number`.
- In tổng `total` hoặc `Không tồn tại số dương`

### Output

- In tổng của dãy số.

---

## Bài tập 02: Đếm các số dương

### Input

### Solution

- Tạo và gán giá trị `count = 0`.
- Dùng vòng lặp `forEach((number) => {})` và xét: `number > 0`
  - Thỏa điều kiện: `count` tăng thêm 1.
  - Không thỏa điều kiện: `count` giữ nguyên.
- In tổng `count` hoặc `Không có số dương`

### Output

- In số số dương của dãy số

---

## Bài tập 03: Tìm số nhỏ nhất

### Input

### Solution

- Khởi tạo và gán giá trị `min = Infinity`.
- Duyệt mảng bằng `forEach()` qua từng `number`. Xét điều kiện: `min > number`:
  - Thỏa điều kiện: `min = number`
  - Không thỏa điều kiện: `min` giữ nguyên giá trị.
- In giá trị của `min`.

### Output

- In số nhỏ nhất tìm được.

---

## Bài tập 04: Tìm số dương nhỏ nhất

### Input

### Solution

- Khởi tạo `minPositive`.
- Duyệt mảng bằng `forEach()` qua từng `number`. Xét điều kiện: `minPositive > number` và `number > 0`:
  - Thỏa điều kiện: `minPositive = number`
  - Không thỏa điều kiện: `minPositive` giữ nguyên giá trị.
- In giá trị của `minPositive` hoặc Không tồn tại số dương.

### Output

- In số dương lớn nhất tìm được.

---

## Bài tập 05: Tìm số chẳn cuối cùng

### Input

### Solution

- Khởi tạo `positiveLasted`.
- Duyệt mảng bằng `for()`, bắt đầu từ cuối mảng đến đầu mảng, qua từng `number`. Xét điều kiện: `number % 2 === 0` (`number` chia hết cho 2):
  - Thỏa điều kiện:  `positiveLasted = number` và thoát vòng lặp.
  - Không thỏa điều kiện: in thông báo `'Không tồn tại số chẳn'`.

### Output

- In ra số chẳn cuối cùng của mảng.

---

## Bài tập 06: Đổi chỗ 2 số theo vị trí

### Input

- Vị trí của số thứ 1
- Vị trí của số thứ 2

### Solution

- Tạo và gán giá trị khi người dùng nhập:
  - `indexNumber1`: vị trí của số thứ 1
  - `indexNumber2`: vị trí của số thứ 2
- Kiểm tra input: số nguyên dương; bắt đầu từ 1...
  - Không hợp lệ: in lỗi cho người dùng
  - Hợp lệ:
    - Khởi tạo và sao chép mảng chứa dãy số gốc cho `copyArr`
    - Hoán đổi giá trị của 2 số ở 2 vị trí nhập vào.
    - Chuyển mảng chứa 2 số sau khi hoán đổi thành chuỗi và in ra giao diện.

### Output

- In ra dãy số sau khi hoán đổi hoặc thông báo lỗi cho người dùng.

---

## Bài tập 07: Sắp xếp tăng dần

### Input

### Solution

- Khởi tạo và sao chép mảng mới cho `copyArr`.
- Dùng hàm `sort()` để sắp xếp giá trị theo thứ tự tăng dần.
- Chuyển mảng sau khi sắp xếp thành chuỗi và in ra giao diện.

### Output

- In ra dãy số sau khi sắp xếp hoặc thông báo lỗi cho người dùng.

---

## Bài tập 08: Tìm số nguyên tố đầu tiên

### Solution

- Tạo hàm `isPrimeNumber()` - kiểm tra số nguyên tố `number`
  - Kiểm tra số `number` có là số nguyên dương
    - Không hợp lệ: trả về `false`;
    - Hợp lệ:
      - Tạo vòng lặp có `index = 2`; chạy từ `index` đến `number - 1`. Xét điều kiện `number` chia hết cho `index`
        - Thỏa điều kiện: Thoát vòng lặp, trả về `false`;
      - Chạy hết vòng lặp: trả về `true`;
- Tạo biến `primeNumber` và gán giá trị trả về của hàm `find()` khi duyệt qua mảng. Bên trong `find()` truyền `number` vào hàm `isPrimeNumber()`.
- `primeNumber` khác `undefined`:
  - Thỏa: In ra số nguyên tố
  - Không thỏa: Không tồn tại số nguyên tố

### Output

- In ra số nguyên tố đầu tiên hoặc thông báo lỗi cho người dùng.

---

## Bài tập 09: Đếm số nguyên

### Input

### Solution

- Tạo biến `countInt` để nhận giá trị trả về từ `reduce()`.
- Bên trong `reduce((count, number)=>{}, 0)`:
  - Khởi tạo `count = 0`.
  - Kiểm tra `number` có là số nguyên bằng `Number.isInterger()`:
    - Thỏa: `count` tăng lên 1.
    - Không thỏa: `count` giữ nguyên.
  - In ra `count` hoặc `Không tồn tại số nguyên`.

### Output

- In ra số số nguyên trong mảng hoặc thông báo lỗi cho người dùng.

---

## Bài tập 10: So sánh số lượng số âm và số dương

### Input

### Solution

- Tạo và gán giá trị:
  - `countPosition = 0` - đếm số dương.
  - `countNegative = 0` - đếm số âm.
- Dùng `forEach((number))` để duyệt và so sánh điều kiện: `number > 0`:
  - Thỏa: `countPosition` tăng thêm 1
  - Không thỏa: `countNegative` tăng thêm 1
- Thực hiện so sánh `countPosition` và `countNegative`.
- In ra số lượng dương và số lượng số âm và kết quả so sánh.

### Output

- In ra số lượng dương và số lượng số âm và kết quả so sánh.
