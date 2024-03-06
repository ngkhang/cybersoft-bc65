# Section 06: JavaScript - Loop

- **NOTE**: Input đầu vào chưa thực hiện validate

## Bài tập 1: Tìm số nguyên dương n nhỏ nhất

- Điều kiện: `1 + 2 + 3 + ... + n > 10000`

### Input

### Solution

- Tạo và gán giá trị `min` = 0; `max`= 10000.
- Tạo vòng lặp với `step`:
  - Bắt đầu là 1.
  - Bước nhảy 1.
  - Điều kiện: `step <= max`
- Trong vòng lặp:
  - Nếu `min < step`: `min = step`.
  - `max = max - step`
- Kết thúc vòng lặp, thực hiện cộng min cho giá trị min + 1.
- In số nguyên dương `min`.

### Output

- Kết quả: Số nguyên dương nhỏ nhất thỏa 1 + 2 + .. + n > 10000

---

## Bài tập 2: Tính tổng S(n) = x + x^2 + ... + x^n

### Input

- Số nguyên dương `n` và `x`

### Solution

- Kiểm tra input: `n` và `x` không bỏ trống; là số nguyên dương
  - Không hợp lệ: in lỗi ra giao diện.
  - Hợp lệ:
    - Tạo và gán giá trị tổng: `sum = 0`.
    - Cách 1: Sử dụng công thức toán học:
      - `S(n) = x * ((1 - x^n) / (1-x))`
    - Cách 2: Dùng vòng lặp với `step`:
      - Bắt đầu là 1.
      - Bước nhảy 1.
      - Điều kiện: `step <= n`
      - Trong vòng lặp:
        - Tạo biến tạm `temp`: `temp = x ** step`
        - Thực hiện `sum = sum + temp`
      - In giá trị `sum` ra giao diện

### Output

- Kết quả: Tổng hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 3: Tính giai thừa n

### Input

- Số nguyên n

### Solution

- Kiểm tra input: `n` không bỏ trống; là số nguyên dương
  - Không hợp lệ:
  - Hợp lệ: Dùng đệ quy

### Output

- Kết quả: Giai thừa của số n hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 4: In 10 thẻ div

- Với div chẳn có background màu đỏ.
- Với div chẳn có background màu xanh.

### Input

### Solution

- Tạo và gán giá trị:
  - `OBJ_DIV` chứa property: `0`- chẳn; `1`- lẻ. Trong đó chứa thuộc tính: `background` có `value` như đề bài.
  - `content` chứa nội dung hiển thị.
- Dùng vòng lặp với `step`:
  - Bắt đầu là 0.
  - Bước nhảy 1.
  - Điều kiện: `step < 10`
  - Trong vòng lặp, thực hiện tính từng giá trị của `step + 1 % 2` để lấy giá trị từ `OBJ_DIV` tương ứng.
    - Tạo thẻ div từ giá trị lấy được và cộng chuỗi vào `content`
  - In nội dung ra giao diện

### Output

- Kết quả: Thẻ div có background màu đỏ- div chẳn và màu xanh- div lẻ.

---

## Bài tập 5: In dãy số nguyên tố từ 1 đến `n`

### Input

- Số nguyên dương `n`

### Solution

- Tạo hàm kiểm tra 1 số có là số nguyên tố không? `isPrimeNumber(number)`
  - `number` <= 1 hoặc number chia hết cho 1 số trong khoảng từ [2, number - 1]: trả về false, ngược lại true.
- Tạo và gán giá trị:
  - `n` nhận từ người dùng nhập vào.
  - `listPrime` mảng rỗng chứa các số nguyên tố.
  - Dùng vòng lặp với `step`:
    - Bắt đầu là 2.
    - Bước nhảy 1.
    - Điều kiện: `step <= n`
    - Trong vòng lặp:
      - Thực hiện kiểm tra từng giá trị của `step` qua hàm `isPrimeNumber(step)`.
      - Thỏa điều kiện: chèn step vào `listPrime`
    - Chuyển mảng `listPrime` thành chuỗi qua phương thức `join()` và in chuỗi số nguyên tố.

### Output

- Kết quả: Dãy số nguyên tố từ 1 tới `n` hoặc in lỗi cho người dùng (nếu không hợp lệ)

---
