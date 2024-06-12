import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import { getAllProductApi } from "../../redux/reducers/productReducer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect } from "react";
import ProductModelType from "../../models/ProductModel";

const Home = () => {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    const getAllProduct = async () => {
      const actionThunk = getAllProductApi();
      dispatch(actionThunk);
    };
    getAllProduct();
  }, [dispatch]);

  return (
    <div className="container py-4">
      <h3 className="fs-1 text-center mb-4">Product List</h3>
      <div className="row">
        {arrProduct.map((prod: ProductModelType) => {
          return (
            <>
              <div className="col-3 mb-4">
                <ProductCard prod={prod} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
