function SinhVien(
  _MaSV,
  _TenSV,
  _Email,
  _Pass,
  _NgaySinh,
  _khSV,
  _DiemToan,
  _DiemLy,
  _DiemHoa,
) {
  this.MaSV = _MaSV;
  this.TenSV = _TenSV;
  this.Email = _Email;
  this.Pass = _Pass;
  this.NgaySinh = _NgaySinh;
  this.khSV = _khSV;
  this.DiemToan = _DiemToan;
  this.DiemLy = _DiemLy;
  this.DiemHoa = _DiemHoa;

  this.tinhDTB = () => (this.DiemToan * 1 + this.DiemLy * 1 + this.DiemHoa * 1) / 3;
}
