# JS - Quản lý nhân viên

- [JS - Quản lý nhân viên](#js---quản-lý-nhân-viên)
  - [Tracking Tasks](#tracking-tasks)
  - [Features](#features)
    - [1. Khởi tạo đối tượng nhân viên](#1-khởi-tạo-đối-tượng-nhân-viên)
    - [2. In danh sách nhân viên](#2-in-danh-sách-nhân-viên)
    - [3. Validation](#3-validation)
    - [4. Thêm nhân viên mới](#4-thêm-nhân-viên-mới)
    - [5. Cập nhật thông tin nhân viên](#5-cập-nhật-thông-tin-nhân-viên)
    - [6. Xóa nhân viên](#6-xóa-nhân-viên)
    - [7. Tìm nhân viên](#7-tìm-nhân-viên)
    - [8. Xử lý logic](#8-xử-lý-logic)

## Tracking Tasks

1. In danh sách nhân viên.
2. Tạo đối tượng nhân viên với các thuộc tính và phương thức theo yêu cầu.
3. Validation input.
4. Thêm nhân viên mới.
5. Cập nhật thông tin nhân viên.
6. Xóa nhân viên.
7. Tìm nhân viên theo xếp loại.

## Features

### 1. Khởi tạo đối tượng nhân viên

- Status:
- Step:
  - Properties:
    - Nhận từ form:
      - Tài khoản
      - Họ tên
      - Email
      - Mật khẩu
      - Ngày làm
      - Lương cơ bản
      - Chức vụ: Giám đốc, Trưởng phòng, Nhân viên
      - Giờ làm trong tháng
    - Nhận từ method trả về:
      - Tổng Lương
      - Loại nhân viên
  - Methods:
    - Tính tổng lượng cho nhân viên:
      `Tổng lương = Lương cơ bản * Hệ số theo chức vụ`
      | Chức vụ      | Hệ số |
      | ------------ | ----- |
      | Giám đốc     | 3     |
      | Trưởng phòng | 2     |
      | Nhân viên    | 1     |
    - Xếp loại cho nhân viên dựa trên giờ làm việc trong tháng
      | Số giờ làm                             | Xếp loại   |
      | -------------------------------------- | ---------- |
      | Dưới 160h (80h <= ... <= 159h)         | Trung bình |
      | Từ 160h đến 175h (160h <= ... <= 175h) | Khá        |
      | Từ 176h đến 191h (176h <= ... <= 191h) | Giỏi       |
      | Từ 192h trở lên  (192h <= ... <= 200h) | Xuất sắc   |

### 2. In danh sách nhân viên

- Status: ✅Done
- Step:
  - Lấy danh sách nhân viên (từ global)
  - Duyệt mảng, in ra table

### 3. Validation

- Status: ✅Done
- Step:
  - Validation Functions:
    - Check empty:
      `isEmpty(input, fieldName, idError)`
    - Check number:
      `isNumber(input, fieldName, idError)`
    - Check number have range [start, end]:
      `isNumberInRange(input, fieldName, start, end, idError)`
    - Check input have name format:
      `isNameFormat(input, idError)`
    - Check unique key:
      `isUniqueKey(input, key, fieldName, data, idError)`
    - Check input have email format:
      `isEmailFormat(input, idError)`
    - Check length of string in range [min, max]:
      `isValidLength(input, fieldName, min, max, idError)`
    - Check input have password format:
      `isPasswordFormat(input, idError)`
    - Check input have date format:
      `isDateFormat(input, idError)`
  - Requirements:
    1. Tài khoản:
       - Không để trống.
       - Độ dài: 4-6 ký số.
       - Là duy nhất.
    2. Tên nhân viên:
       - Không để trống.
       - Là chữ.
    3. Email:
       - Không để trống.
       - Đúng định dạng email.
    4. Mật khẩu:
       - Không để trống.
       - Độ dài: 6-10 ký tự.
       - Có ít nhất: 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt.
    5. Ngày làm:
       - Không để trống.
       - Đúng định dạng: mm/dd/yyyy
    6. Lương cơ bản:
       - Không để trống.
       - Giới hạn: 1_000_000 - 20_000_000
    7. Chức vụ:
       - Không để trống (phải chọn chức vụ)
    8. Số giờ làm trong tháng:
       - Không để trống.
       - Giới hạn: 80 - 200 (h)

### 4. Thêm nhân viên mới

- Status: ✅Done
- Step:
  - Lây thông tin từ form
  - Validation input
    - Hợp lệ:
      - Thêm váo danh sách global.
      - Reset input field và đóng modal (modal)
      - Re-render danh sách
    - Không hợp lệ: Thông báo lỗi ngay.

### 5. Cập nhật thông tin nhân viên

- Status: ✅Done
- Step:
  - Tìm thông tin nhân viên dựa vào `tknv`.
  - Hiển thị thông tin nhân viên:
    - Mở modal (form) và hiển thị thông tin.
    - Disable `ADD`, `RESET` button và khóa `tknv` input.
  - Cập nhật thông tin mới: Validation input
    - Hợp lệ:
      - Tìm nhân viên dựa vào `tknv` và cập nhật thông tin mới.
      - Reset input field và đóng modal (modal)
      - Enable `ADD` và `RESET` button
      - Re-render danh sách
    - Không hợp lệ: Thông báo lỗi

### 6. Xóa nhân viên

- Status: ✅Done
- Step:
  - Tìm nhân viên dựa vào `tknv`
  - Xóa nhân viên từ danh sách (global)
  - Re-render danh sách

### 7. Tìm nhân viên

- Status: ✅Done
- Step:
  - Lấy keyword từ input tìm kiếm.
  - Duyệt mảng danh sách và tìm với keyword.
  - In danh sách đã tìm được.

### 8. Xử lý logic

- Handle Enter keyboard when searching
- Modal
- Reset input field form
- Disable/Enable button
