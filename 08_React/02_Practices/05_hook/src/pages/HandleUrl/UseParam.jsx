import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UseParam = () => {
  const [productDetail, setProductDetail] = useState({});
  let { idProduct } = useParams();
  const getProductDetail = async (idProduct) => {
    const res = await axios.get(
      `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`
    );
    setProductDetail(res.data.content);
  };

  useEffect(() => {
    getProductDetail(idProduct);
  }, [idProduct]);

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt="..." className="img-fluid" />
        </div>
        <div className="col-8">
          <h4 className="text-uppercase text-center">{productDetail.name}</h4>
          <p className="">{productDetail.shortDescription}</p>
          <p className="fs-3 fw-bold">${productDetail.price}</p>
          <div className="container">
            {productDetail.size?.map((size) => {
              return (
                <button key={size} className="mx-2 btn btn-secondary">
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className='row'>
        <h3 className="text-center mb-3">Relate Products</h3>
        <div className="row justify-content-center align-items-stretch">
          {productDetail.relatedProducts?.map((prod) => {
            return (
              <div key={prod.id} className="col-3 h-100">
                <div className="card">
                  <img src={prod.image} alt="..." className="img-fluid" />
                  <p className='mb-2 text-center text-uppercase'>{prod.name}</p>
                  <Link className="btn btn-dark" to={`/detail/${prod.id}`}>
                    View Detail
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>    
    </div>
  );
};

export default UseParam;
