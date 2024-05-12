export default class Student {
  // maSinhVien = '';
  // tenSinhVien = '';

  constructor(_maSinhVien, _tenSinhVien,) {
    this.maSinhVien = _maSinhVien;
    this.tenSinhVien = _tenSinhVien;
  }

  hienthi() {
    console.log(`ID: ${this.maSinhVien} - Name: ${this.tenSinhVien}`);
  };
}