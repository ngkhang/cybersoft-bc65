import React from "react";

const ProductListItem = (props) => {
  const { products, handleAddToCart } = props;

  return (
    <div className="row">
      {products.map((item, index) => {
        return (
          <>
            <div key={index} className="col-3 mb-2">
              <div className="card">
                <img src={item.img} alt="..." />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductListItem;
