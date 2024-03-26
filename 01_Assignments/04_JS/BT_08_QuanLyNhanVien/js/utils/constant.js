const TITLE_EMPLOYEE = {
  giam_doc: {
    text: "Giám đốc",
    value: 3,
  },
  truong_phong: {
    text: "Trưởng phòng",
    value: 2,
  },
  nhan_vien: {
    text: "Nhân viên",
    value: 1,
  },
};

const RANKS_OF_EMPLOYEE = [
  {
    title: "xuất sắc",
    minRank: 192,
    maxRank: 200,
  },
  {
    title: "giỏi",
    minRank: 176,
    maxRank: 191,
  },
  {
    title: "khá",
    minRank: 160,
    maxRank: 175,
  },
  {
    title: "trung bình",
    minRank: 80,
    maxRank: 159,
  },
];

// List query selectors
const QUERY_SELECTORS = {
  TABLE: "#tableDanhSach",
  MODAL: "#myModal",
  SEARCH: "#searchName",
  BTN_ADD_MAIN: "#btnThem",
  BTN_ADD_EMPLOYEE: "#btnThemNV",
  BTN_UPDATE_EMPLOYEE: "#btnCapNhat",
  BTN_CLOSE_MODAL: "#btnDong",
  BTN_SEARCH_EMPLOYEE: "#btnTimNV",
  INPUTS_FIELD: [
    ".modal-body form .input-group input",
    ".modal-body form .input-group select",
  ],
};

// List Regex using validation
const REGEXS = {
  NUMBER: /^[0-9]+$/,
  NAME: /[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+\ /,
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/,
  // PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/,
  DATE: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/,
};
