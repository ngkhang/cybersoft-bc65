import { useState } from "react";

const ViewDetail = () => {
  const data = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  const [detail, setDetail] = useState({
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  });

  return (
    <div className="container">
      <h1 className="text-center mb-4">
        Section 07: Props - Ex02: View Detail
      </h1>
      <div className="row">
        <div className="col-3">
          <img src={detail.hinhAnh} alt="..." className="img-fluid" />
        </div>
        <div className="col-9">
          <div className="table-responsive">
            <table className="table table-primary">
              <thead>
                <tr>
                  <td>Màn hình</td>
                  <td>{detail.manHinh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detail.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{detail.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{detail.rom}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detail.heDieuHanh}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className="row mb-3 align-items-stretch">
        {data.map((prod) => {
          return (
            <div key={prod.maSP} className="col-4">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src={prod.hinhAnh}
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">{prod.tenSP}</h4>
                  <p className="card-text">{prod.giaBan}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setDetail(prod)}
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewDetail;
