let sinhVien = {
  // Properties
  MaSV: '',
  TenSV: '',
  LoaiSV: '',
  DiemToan: 0,
  DiemVan: 0,

  // Methods
  tinhDTB: function () {
    return (this.DiemToan + this.DiemVan) / 2;
  },

  xepLoai: function () {
    let diemTb = this.tinhDTB();
    return (diemTb > 5)
      ? 'Khá'
      : 'Yếu';
  },
}

function handleSubmit() {
  let MaSV = document.getElementById('txtMaSV').value
  let TenSV = document.getElementById('txtTenSV').value
  let LoaiSV = document.getElementById('loaiSV').value
  let DiemToan = document.getElementById('txtDiemToan').value * 1;
  let DiemVan = document.getElementById('txtDiemVan').value * 1;

  sinhVien = {
    ...sinhVien,
    MaSV,
    TenSV,
    LoaiSV,
    DiemToan,
    DiemVan,
  };

  let output = document.querySelectorAll('.lead > span');

  output.forEach((span) => {
    let key = span.id.replace('span', '');
    console.log(span.id, key, sinhVien[key]);
    if (key === 'DTB') span.innerHTML = sinhVien.tinhDTB()
    else if (key === 'XepLoai') span.innerHTML = sinhVien.xepLoai()
    else span.innerHTML = sinhVien[key];
  })
}

