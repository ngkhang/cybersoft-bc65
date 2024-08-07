import useDataHome from "../../hooks/useDataHome";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductModelType from "../../models/ProductModel";

const Home = () => {
  const { data } = useDataHome();

  return (
    <div className="container py-4">
      <h3 className="fs-1 text-center mb-4">Product List</h3>
      <div className="row">
        {data.map((prod: ProductModelType) => {
          return (
            <div key={prod.id} className="col-3 mb-4">
              <ProductCard prod={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
