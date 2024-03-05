# Section 05: JavaScript - Function

## Bài tập 1: Quản lý tuyển sinh

### Input

- Điểm chuẩn của hội đồng
- Điểm thi 3 môn của thí sinh
- Loại khu vực ưu tiên:

  | Loại khu vực | Điểm ưu tiên            |
  | ------------ | ----------------------- |
  | A            | 2                       |
  | B            | 1                       |
  | C            | 0.5                     |
  | X            | 0 (không thuộc ưu tiên) |

- Đối tượng dự thi
  | Đối tượng | Điểm ưu tiên |
  | --------- | ------------ |
  | 1         | 2.5          |
  | 2         | 1.5          |
  | 3         | 1            |

### Solution

1. Tạo biến và cho người dùng nhập
   - Điểm chuẩn: `baseGrade`.
   - Điểm thi 3 môn: `subjA`,`subjB`,`subjC`.
   - Khu vực ưu tiên: `area`.
   - Đối tượng ưu tiên: `objectStudent`.
2. Kiểm tra số nhập vào có hợp lệ: Không được bỏ trống
   - Không hợp lệ: In lỗi ra UI
   - Hợp lệ:
     - Có 1 môn có điểm = 0 -> Rớt
     - Tạo biến và gán giá trị:
       - Tổng điểm 3 môn thi: `total = subjA + subjB + subj`
       - Tổng điểm ưu tiên: `grade_priority = grade_area + grade_object`
       - Điểm tổng: `result = total + grade_priority`;
     - So sánh điểm tổng và điểm chuẩn:
       - Điểm tổng >= điểm chuẩn: Đậu
       - Điểm tổng < điểm chuẩn: Rớt
     - In kết quả đậu/rớt và tổng số điểm đạt được.

### Output

- Kết quả: Đậu/rớt và tổng số điểm đạt của thí sinh hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 2: Tính tiền điện

### Input

- Tên người sử dụng
- Số điện tiêu thụ (số KW)

### Solution

1. Tạo biến và cho người dùng nhập:
   1. Tên người sử dụng: `userName`
   2. Số điện tiêu thụ: `energy` (KW)
2. Kiểm tra số nhập vào có hợp lệ:
   1. `userName`: không bỏ trống
   2. `energy`: không bỏ trống; là số dương
   - Không hợp lệ: In lỗi ra UI
   - Hợp lệ:
     - In tên của người dùng và tổng số tiền điện phải trả.

### Output

- Kết quả: Tên của người dùng và tổng số tiền điện phải trả hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 3: Tính thuế thu nhập cá nhân

### Input

- Thông tin cá nhân:
  - Họ tên
  - Tổng thu nhập năm
  - Số người phụ thuộc

### Solution

1. Tạo biến và cho người dùng nhập:
   1. Họ tên: `taxpayers`
   2. Tổng thu nhập năm `income` (đơn vị đ)
   3. Số người phụ thuộc `dependant`

2. Kiểm tra số nhập vào có hợp lệ, các trường không bỏ trống và:
   1. `taxpayers`: là chữ
   2. `income`: là số
   3. `dependant`: là số nguyên
   - Không hợp lệ: In lỗi ra UI
   - Hợp lệ:
     - Tạo và gán giá trị cho hằng số:
       - `PRICE_TAX` = 4.000.000
       - `MONEY_OF_DEPENDANT` = 1.600.000
     - Tạo biến và gán giá trị theo công thức:
       - `taxable_income = income - PRICE_TAX - dependant * MONEY_OF_DEPENDANT`;
       - Só tiền thuế phải trả: `cash = taxable_income * tax_rate`
         - Trong đó, `tax_rate` theo bảng:

            | Thu nhập chịu thuế (triệu đồng) | Thuế suất (%) |
            | ------------------------------- | ------------- |
            | Đến 60                          | 5             |
            | Trên 60 đến 120                 | 10            |
            | Trên 120 đến 210                | 15            |
            | Trên 210 đến 384                | 20            |
            | Trên 384 đến 624                | 25            |
            | Trên 624 đến 960                | 30            |
            | Trên 960                        | 35            |

     - In tên của người dùng và số tiền thuế phải trả.

### Output

- Kết quả: Tên của người dùng và số tiền thuế phải trả hoặc in lỗi cho người dùng (nếu không hợp lệ)

---

## Bài tập 4: Tính tiền cáp

### Input

- Mã khách hàng
- Loại khách hàng
- Số kết nối (chỉ hiện ra nếu loại khách hàng là Doanh nghiệp)
- Số kênh cao cấp

### Solution

1. Tạo biến và cho người dùng nhập:
   1. Loại khách hàng: `typeCustomer`
   2. Mã khách hàng `codeCustomer`
   3. Số kênh cao cấp `channels`
   4. Số kết nối: `connects` - chỉ hiện nếu loại khách hàng là doanh nghiệp.

2. Kiểm tra số nhập vào có hợp lệ, các trường không bỏ trống và:
   - Không hợp lệ: In lỗi ra UI
   - Hợp lệ:
     - Tạo biến và gán giá trị:
       - Phí xứ lý hóa đơn: `invoice_processing_fee = based_on_type`;
       - Phí dịch vụ cơ bản: `service_fee = based_on_type`;
       - Phí thuê kênh cao cấp: `premium_channel_fee = based_on_type * channels`
       - Tổng số tiền phí phải trả: `cash = taxable_income * tax_rate`
         - Trong đó, `tax_rate` theo bảng:

            | Loại chi phí       | Nhà dân    | Doanh nghiệp                                    |
            | ------------------ | ---------- | ----------------------------------------------- |
            | Phí xử lý hóa đơn  | 4.5$       | 15$                                             |
            | Phí dịch vụ cơ bản | 20.5$      | 75$/10 kết nối đầu; mỗi kết nối thêm 5$/kết nối |
            | Thuê kênh cao cấp  | 7.5$/ kênh | 50$/kênh                                        |

     - In tất cả thông tin của người dùng và tổng chi phí tiền cáp.

### Output

- Kết quả: Thông tin của người dùng và tổng chi phí tiền cáp hoặc in lỗi (nếu không hợp lệ)

---
