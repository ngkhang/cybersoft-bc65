import { useEffect, useState } from "react";
import ChildUpdating from "./ChildUpdating";

const Updating = () => {
  const [number, setNumber] = useState(1);
  const [idProduct, setIdProduct] = useState(1);
  useEffect(() => {
    console.log("Parent component");
  }, []);
  return (
    <div className="container">
      <h3>Parent Component</h3>
      <button
        className="btn btn-primary"
        onClick={() => setNumber((state) => state + 1)}
      >
        {number}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setIdProduct(idProduct + 1)}
      >
        <i className="fa fa-heart"></i>
      </button>
      <ChildUpdating idProduct={idProduct} number={number} />
    </div>
  );
};

export default Updating;
