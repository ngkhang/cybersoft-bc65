# Section 02: DOM JavaScript

## Bài tập 1: Tính tiền lương nhân viên

### Input

- Lương 1 ngày làm việc
- Số ngày đã làm việc

### Solution

1. Tạo biến và cho người dùng nhập giá trị:
   - day: số ngày làm việc
   - moneyInDay: tiền lương 1 ngày
2. Kiểm tra day có hợp lệ: day/moneyInDay là số dương, không bỏ trống.
   - Không hợp lệ: in lỗi ra UI
   - Hợp lệ:
     - Tạo và gán giá trị cho salary: salary = day * moneyInDay
     - In salary ra UI.

### Output

- Kết quả: Tiền lương hoặc lỗi cho người dùng (nếu không hợp lệ)

## Bài tập 2: Tính giá trị trung bình của 5 số

### Input

- 5 số thực

### Solution

1. Tạo biến và cho người dùng nhập giá trị:
   - num_1, num_2, num_3, num_4, num_5: tương ứng từ số thứ 1 đến số thứ 5.
   - COUNT: số số hạng (mặc định: COUNT = 5)
2. Kiểm tra day có hợp lệ: các số không bỏ trống.
   - Không hợp lệ: in lỗi ra UI
   - Hợp lệ:
     - Tạo và gán giá trị cho total: tổng của 5 số hạng
       total = num_1 + num_2 + num_3 + num_4 + num_5
     - Tạo và gán giá trị cho aver
       aver = total / aver
     - In aver ra UI.

### Output

- Kết quả: giá trị trung bình hoặc lỗi cho người dùng (nếu không hợp lệ)

## Bài tập 3: Quy đổi tiền tệ: USD -> VND

### Input

- Tiền mệnh giá USD

### Solution

1. Tạo biến và cho người dùng nhập giá trị:
   - money: số tiền mệnh giá USD cần quy đổi.
   - USD: tỉ giá USD sang VND (mặc định: USD = 23500)
2. Kiểm tra money có hợp lệ: không bỏ trống, phải là số dương.
   - Không hợp lệ: in lỗi ra UI
   - Hợp lệ:
     - Tính giá trị tiền quy đổi = money * USD;
     - Định dạng số tiền theo dạng VND và in ra UI.

### Output

- Kết quả: giá trị tiền đã chuyển đổi hoặc lỗi cho người dùng (nếu không hợp lệ)

## Bài tập 4 - Tính chu vi và diện tích hình chữ nhật

### Input

- Chiều dài và chiều rộng

### Solution

1. Tạo biến và cho người dùng nhập giá trị:
   - long: chiều dài.
   - wide: chiều rộng.
2. Kiểm tra long và wide có hợp lệ: không bỏ trống, phải là số dương.
   - Không hợp lệ: in lỗi ra UI
   - Hợp lệ:
     - Tạo biến và gán giá trị cho S và P
       - S: diện tích hình chữ nhật
         S = long * wide;
       - P: chu vi hình chữ nhật
         P = (long + wide) * 2;
     - In giá trị S và P ra UI.

### Output

- Kết quả: Diện tích và chu vi hình chữ nhật hoặc lỗi cho người dùng (nếu không hợp lệ)

## Bài tập 5 - Tính tổng 2 ký số

### Input

- Số có 2 chữ số

### Solution

1. Tạo biến và cho người dùng nhập:
   - number: số người dùng nhập vào.
2. Kiểm tra number có hợp lệ: không bỏ trống, số có 2 chữ số.
   - Không hợp lệ: in lỗi ra UI
   - Hợp lệ:
     - Tạo biến total và tính tổng
       - total =  number / 10 +  number % 10
     - In giá trị total ra UI.

### Output

- Kết quả: Giá trị tổng 2 ký số hoặc lỗi cho người dùng (nếu không hợp lệ)
