import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import axios from "axios";

const Mounting = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductApi();
  }, []);

  const getProductApi = async () => {
    const res = await axios.get("https://shop.cyberlearn.vn/api/Product");
    setProducts(res.data.content);
  };

  return (
    <div>
      <h3>Mounting Component</h3>
      <ChildComponent />

      <h3>Get API Product</h3>
      <div className="container">
        <div className="row align-items-stretch">
          {products.map((prod) => {
            return (
              <div key={prod.id} className="col-3 h-100 mb-3">
                <div className="card">
                  <div className="card-header">
                    <h5>{prod.name}</h5>
                  </div>
                  <div className="card-body">
                    <img src={prod.image} alt="" className="img-fluid" />
                    <p className="text-truncate">{prod.description}</p>
                    <span className="fs-3 fw-bold">{prod.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mounting;
