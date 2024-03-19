# JS - Quản lý nhân viên

## List Tasks

1. [x] In danh sách nhân viên.
2. [ ] Tạo đối tượng nhân viên với các thuộc tính và phương thức theo yêu cầu.
3. [ ] Validation input.
4. [ ] Thêm nhân viên mới.
5. [ ] Cập nhật thông tin nhân viên.
6. [ ] Xóa nhân viên.
7. [ ] Tìm nhân viên theo xếp loại.

## Flow

### In danh sách nhân viên

1. [x] Lấy danh sách truyền vào.
2. [x] Duyệt mảng in ra table.

### Tạo đối tượng nhân viên

1. [ ] Properties:
   1. Nhận từ form nhập:
      - Tài khoản
      - Họ tên
      - Email
      - Mật khẩu
      - Ngày làm
      - Lương cơ bản
      - Chức vụ: Giám đốc, Trưởng phòng, Nhân viên
      - Giờ làm trong tháng
   2. Nhận từ method trả về:
      - Tổng Lương
      - Loại nhân viên
2. [ ] Methods:
   1. Tính tổng lượng cho nhân viên:
     `Tổng lương = Lương cơ bản * Hệ số theo chức vụ`
     | Chức vụ      | Hệ số |
     | ------------ | ----- |
     | Giám đốc     | 3     |
     | Trưởng phòng | 2     |
     | Nhân viên    | 1     |
   2. Xếp loại cho nhân viên dựa trên giờ làm việc trong tháng
      | Số giờ làm                             | Xếp loại   |
      | -------------------------------------- | ---------- |
      | Dưới 160h (80h <= ... <= 159h)         | Trung bình |
      | Từ 160h đến 175h (160h <= ... <= 175h) | Khá        |
      | Từ 176h đến 191h (176h <= ... <= 191h) | Giỏi       |
      | Từ 192h trở lên  (192h <= ... <= 200h) | Xuất sắc   |

### Validation input

#### Requirement

1. [ ] Tài khoản:
   1. [ ] Không để trống.
   2. [ ] Độ dài: 4-6 ký số.
   3. [ ] Là duy nhất.
2. [ ] Tên nhân viên:
   1. [ ] Không để trống.
   2. [ ] Là chữ.
3. [ ] Email:
   1. [ ] Không để trống.
   2. [ ] Đúng định dạng email.
4. [ ] Mật khẩu:
   1. [ ] Không để trống.
   2. [ ] Độ dài: 6-10 ký tự.
   3. [ ] Có ít nhất: 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt.
5. [ ] Ngày làm:
   1. [ ] Không để trống.
   2. [ ] Đúng định dạng: mm/dd/yyyy
6. [ ] Lương cơ bản:
   1. [ ] Không để trống.
   2. [ ] Giới hạn: 1_000_000 - 20_000_000
7. [ ] Chức vụ:
   [ ] Không để trống (chọn chức vụ hợp lệ)
8. [ ] Số giờ làm trong tháng:
   1. [ ] Không để trống.
   2. [ ] Giới hạn: 80 - 200 (h)

#### Functions

- [x] Validate empty: `isEmpty()`
- [x] Validate number: `isNumber()`
- [x] Validate number have range: `isNumberInRange()`
- [x] Validate name`isValidateName()`
- [x] Validate unique key `isUniqueKey()`
- [x] Validate Email `isEmailFormat()`
- [x] Validate length of string: `isValidLength()`
- [x] Validate Password: `isPasswordFormat()`
- [x] Validate Date: `isValidDateFormat()`

### Thêm nhân viên mới

- Status: 🔃In process
- Step:

1. [x] Lấy thông tin từ form
2. [ ] Validation input
   1. [ ] Hợp lệ:
      1. [x] Thêm vào danh sách
      2. [x] Xóa và đóng form
      3. [x] Render danh sách mới.
   2. [ ] Không hợp lệ:
      1. [ ] Thông báo lỗi ngay bên dưới input.

### Cập nhật thông tin

- Status:
- Step:
  - [ ] Tìm account của nhân viên trong danh sách dựa vào `tknv`.
  - [ ] Hiển thị thông tin hiện tại của nhân viên:
    - [ ] Mở modal
    - [ ] Disable button `Thêm nhân viên`
    - [ ] Hiển thị thông tin lên form input (disable `tknv` input)
  - [ ] Cập nhật thông tin mới
    - [ ] Validation thông tin mới từ form
      - [ ] Hợp lệ:
        - [ ] Cập nhật thông tin mới dựa vào key: `tknv`
        - [ ] Xóa và đóng modal
        - [ ] Enable button `Thêm nhân viên`
        - [ ] Render danh sách
      - [ ] Không hợp lệ: Thông báo lỗi ngay bên dưới input

### Xóa nhân viên

- Status: ✅Done
- Step:
  - Tìm nhân viên dựa vào tài khoản nhân viên.
  - Xóa nhân viên và cập nhật lại danh sách.
  - Render lại danh sách.

### Tìm nhân viên dựa theo xếp loại

- Status:
- Step:
  - Validation input search (xuất sắc, giỏi, khá hoặc trung bình):
    - Hợp lệ:
      - [x] Duyệt danh sách và tìm danh sách nhân viên có xếp loại tương ứng.
      - [x] Render danh sách tìm được.
    - Không hợp lệ: Danh sách rỗng/ Thông báo lỗi.
