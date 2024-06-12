import { Link } from "react-router-dom";
import ProductModelType from "../../models/ProductModel";

interface Props {
  prod: Partial<ProductModelType>;
}

const ProductCard = (props: Props) => {
  const { prod } = props;

  return (
    <div className="card">
      <img className="img-fluid" src={prod.image} alt={prod.alias} />
      <div className="card-body">
        <p className="text-center mb-2 text-capitalize">{prod.name}</p>
        <p className="text-end">
          $<span className="fw-bold fs-4">{prod.price}</span>
        </p>
      </div>
      <div className="card-footer text-center">
        <Link to={`/detail/${prod.id}`} className="btn btn-primary">
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
