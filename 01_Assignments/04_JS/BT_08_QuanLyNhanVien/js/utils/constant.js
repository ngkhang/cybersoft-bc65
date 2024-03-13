const TITLE_EMPLOYEE = {
  'Sếp': 3,
  'Trưởng phòng': 2,
  'Nhân viên': 1,
}

const LEVEL_EMPLOYEE = {
  XUAT_SAC: 'xuất sắc',
  GIOI: 'giỏi',
  KHA: 'khá',
  TRUNG_BINH: 'trung bình',
}

const RANGE_LEVEL_EMPLOYEE = {
  [LEVEL_EMPLOYEE.XUAT_SAC]: Infinity,
  [LEVEL_EMPLOYEE.GIOI]: 191,
  [LEVEL_EMPLOYEE.KHA]: 175,
  [LEVEL_EMPLOYEE.TRUNG_BINH]: 159,
}

const KEYS_ID = {
  "tknv": "tknv",
  "name": "name",
  "email": "email",
  "password": "password",
  "datePicker": "datePicker",
  "salary": "salary",
  "titleEmp": "titleEmp",
  "workTime": "workTime",
}

const querySelectors = [
  '.modal-body form .input-group input',
  '.modal-body form .input-group select',
]