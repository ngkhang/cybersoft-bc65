# Section 01: JavaScript

## Bài tập 1: Tính tiền lương nhân viên

### Input

- Số ngày đã làm việc

### Solution

1. Tạo biến và gán giá trị:
   - day: số ngày làm việc
   - moneyInDay: tiền lương 1 ngày (mặc định: moneyInday = 100000)
2. Kiểm tra day có hợp lệ?
   - Không hợp lệ: in ra log "Invalid Day".
   - Hợp lệ:
     - Tạo và gán giá trị cho salary: salary = day * moneyInDay
     - In salary ra log.

### Output

- Kết quả: giá trị salary hoặc "Invalid Day" (nếu không hợp lệ)

## Bài tập 2: Tính giá trị trung bình của 5 số

### Input

- 5 số thực

### Solution

1. Tạo biến và gán giá trị:
   - num_1, num_2, num_3, num_4, num_5: tương ứng từ số thứ 1 đến số thứ 5.
   - COUNT: số số hạng (mặc định: COUNT = 5)
2. Tạo và gán giá trị
   - total: tổng của 5 số hạng
     total = num_1 + num_2 + num_3 + num_4 + num_5
   - aver: giá trị trung bình của 5 số hạng
     aver = total / aver
3. In giá trị aver ra log.

### Output

- Kết quả: aver

## Bài tập 3: Quy đổi tiền tệ: USD -> VND

### Input

- Tiền mệnh giá USD

### Solution

1. Tạo biến và gán giá trị:
   - money: số tiền mệnh giá USD cần quy đổi.
   - USD: tỉ giá USD sang VND (mặc định: USD = 23500)
2. Kiểm tra money có hợp lệ -> Không hợp lệ: in ra log "Invalid Money".
3. Tạo và gán giá trị
   - monneyConvert: số tiền sau khi quy đổi
     monneyConvert = money * USD;
4. Định dạng monneyConvert theo dạng VND.
5. In giá trị monneyConvert sau khi định dạng ra log.

### Output

- Kết quả: giá trị monneyConvert hoặc 'Invalid Money' (nếu money không hợp lệ)

## Bài tập 4 - Tính chu vi và diện tích hình chữ nhật

### Input

- Chiều dài và chiều rộng

### Solution

1. Tạo biến và gán giá trị:
   - long: chiều dài.
   - wide: chiều rộng.
2. Kiểm tra long và wide có hợp lệ -> Không hợp lệ: in lỗi ra log.
3. Tạo biến và gán giá trị cho S và P
   - S: diện tích hình chữ nhật
     S = long * wide;
   - P: chu vi hình chữ nhật
     P = (long + wide) * 2;
4. In giá trị S và P ra log

### Output

- Kết quả: giá trị S và P hoặc in ra lỗi (nếu long hoặc wide không hợp lệ)

## Bài tập 5 - Tính tổng 2 ký số

### Input

- Số có 2 chữ số

### Solution

1. Tạo biến và gán giá trị:
   - number: số người dùng nhập vào.
2. Kiểm tra number có hợp lệ -> Không hợp lệ: in lỗi ra log.
3. Tạo biến total và tính tổng
   - Ký số hàng chục = number / 10
   - Ký số hàng đơn vị = number % 10;
   - total = Ký số hàng chục + Ký số hàng đơn vị
4. In giá trị total

### Output

- Kết quả: giá trị total hoặc in ra lỗi (nếu number không hợp lệ)
