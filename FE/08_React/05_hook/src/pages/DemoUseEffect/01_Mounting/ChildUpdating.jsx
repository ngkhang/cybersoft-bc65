import axios from "axios";
import { useEffect, useState } from "react";

const ChildUpdating = (props) => {
  const { idProduct } = props;
  const [productDetail, setProductDetail] = useState({});

  const getProdutcDetail = async (idProduct) => {
    const res = await axios.get(
      `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`
    );
    setProductDetail(res.data.content);
  };

  useEffect(() => {
    console.log("Child render when idProduct change");
    getProdutcDetail(idProduct);
  }, [idProduct]);

  return (
    <div className="bg-dark text-white p-2">
      Child Component Updating {idProduct}
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <img src={productDetail.image} alt="..." className="img-fluid" />
              <h4>{productDetail.name}</h4>
              <p>{productDetail.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildUpdating;
