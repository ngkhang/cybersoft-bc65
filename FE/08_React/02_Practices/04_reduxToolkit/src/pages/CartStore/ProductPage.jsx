import { useSelector } from 'react-redux';
import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: 1,
    name: "black car",
    img: "./img/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    name: "Steel car",
    img: "./img/steel-car.jpg",
    price: 4000,
  },
];

const ProductPage = () => {
  const {cartReducer} = useSelector(state => state);

  return (
    <div className="container">
      <div className="row justify-content-end mb-2">
          <span className="col-2 bg-light rounded-2 position-relative d-flex justify-content-center align-items-center p-3">
            <i className="text-success fa fa-cart-plus fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartReducer.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </span>
      </div>
      <div className="row">
        {products.map((item) => {
          return (
            <div key={item.id} className="col-6 mb-4">
              <ProductCard prod={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
