# Section 03: JavaScript - Basic

## Bài tập 1: Sắp xắp 3 số nguyên theo thứ tự tăng dần

### Input

- 3 số nguyên

### Solution

1. Tạo biến và cho người dùng nhập 3 số nguyên.
2. Kiểm tra 3 số nhập vào có hợp lệ: Không được bỏ trống; số nguyên
   - Không hợp lệ: In lỗi ra UI
   - Hợp lệ:
     - Lặp qua từng số để sắp xếp theo thứ tự hoặc dùng hàm `sort()` và dùng hàm `join()` để chuyển thành chuỗi.
     - In dãy số ra UI

### Output

- Kết quả: 3 số nguyên đã sắp xếp theo thứ tự tăng dần hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 2: Chào hỏi thành viên trong gia đình

### Input

- Tên (vai trò) của người sử dụng máy tính (ba, mẹ, anh trai hay em gái)

### Solution

1. Tạo biến và cho người dùng nhập vai trò người sử dụng máy tính.
2. Chuyển nội dung nhập về kiểu viết thường và kiểm tra với cấu trúc `switch...case`
3. In lời chào ra UI

### Output

- Kết quả: lời chào tương ứng hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 3: Đếm số số lẻ và số số chẳn trong 3 số nguyên

### Input

- 3 số nguyên

### Solution

1. Tạo biến và cho người dùng nhập vào 3 số nguyên
2. Kiểm tra giá trị: không bỏ trống; là số nguyên
   - Không hợp lệ: In lỗi ra UI
   - Hợp lệ:
     - Tạo biến và gán giá trị:
       oddNumber = 0: số số lẻ
       evenNumber = 0: số số chẳn
     - Lặp qua lần lượt 3 số nguyên: Số chia hết cho 2: tăng evenNumber thêm 1, ngược lại, tăng oddNumber thêm 1.
     - In kết quả ra UI

### Output

- Kết quả: số số lẻ và số số chẳn hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 4: Kiểm tra loại tam giác thông qua 3 cạnh

### Input

- Độ dài 3 cạnh

### Solution

1. Tạo biến và cho người dùng nhập vào 3 cạnh.
2. Kiểm tra hợp lệ: không bỏ trống; là chữ số
   - Không hợp lệ: In lỗi ra UI
   - Hợp lệ: Kiểm tra các điều kiện tam giác: 2 cạnh bất kỳ lớn hơn cạnh còn lại.
     - Có 3 cạnh bằng nhau: tam giác đều
     - Có 2 cạnh bằng nhau: tam giác cân
     - Có 3 cạnh thỏa định lý Pytago (a^2 + b^2 = c^2): tam giác vuông
     - Có 2 cạnh bằng nhau: tam giác thường

### Output

- Kết quả: loại tam giác (tam giác: thường, vuông, cân, đều) hoặc in lỗi cho người dùng (nếu không hợp lệ)
