import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailApi } from "../../redux/reducers/productReducer";
import { DispatchType, RootState } from "../../redux/store";
import ProductCard from "../../components/ProductCard/ProductCard";

const Detail = () => {
  const { id } = useParams();
  const [countProduct, setCountProduct] = useState(0);
  const dispatch: DispatchType = useDispatch();
  const prod = useSelector(
    (state: RootState) => state.productReducer.productDetail
  );

  const getProductDetail = async (id: number | string) => {
    const actionThunk = getProductDetailApi(id);
    dispatch(actionThunk);
  };

  const handleChangeCount = (action?: string, value?: string) => {
    switch (action) {
      case "up":
        setCountProduct((state) => state + 1);
        break;
      case "down":
        if (countProduct > 0) setCountProduct((state) => state - 1);
        break;
      default:
        setCountProduct(Number(value));
        break;
    }
  };

  useEffect(() => {
    if (id) getProductDetail(id);
  }, [id]);

  return (
    <div className="container py-4">
      {prod && (
        <>
          <div className="row">
            <div className="col-4 d-flex flex-column align-items-center">
              <img src={prod.image} alt={prod.alias} className="w-75" />
            </div>
            <div className="col-8">
              <h3 className="text-uppercase mb-3">{prod.name}</h3>
              <p>{prod.description}</p>
              <div>
                <span>
                  {`Categories: ${prod.categories
                    .map((item) => item.category)
                    .join(",")
                    .replace("_", " ")}`}
                </span>
              </div>
              <p className="">
                Price: $<span className="fs-4">{prod.price}</span>
              </p>

              <div className="d-flex align-items-center mb-3">
                <div className="col-4 d-flex align-items-center me-2">
                  <span id="countProduct" className="me-3">
                    Count
                  </span>
                  <div className="input-group flex-grow-1">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleChangeCount("down")}
                      type="button"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="form-control text-center"
                      value={countProduct}
                      onChange={(e) => handleChangeCount("", e.target.value)}
                      aria-label="Quantity of product"
                      aria-describedby="countProduct"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleChangeCount("up")}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="flex-grow-1 text-secondary">
                  {prod.quantity} availables
                </span>
              </div>

              <div className="d-flex align-items-center">
                <span className="me-2">Size:</span>
                {prod.size.map((size) => {
                  return (
                    <button key={size} className="me-2 btn btn-dark text-white">
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {prod.relatedProducts.length > 0 && (
            <div className="row">
              <h3 className='mb-3'>Relative Products</h3>
              {prod.relatedProducts.map((prod) => {
                return (
                  <div key={prod.id} className="col-2 mb-2">
                    <ProductCard prod={prod} />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Detail;
