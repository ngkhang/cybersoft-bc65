import CartPage from "./CartPage";
import ProductPage from "./ProductPage";

const CartMainPage = () => {
  return (
    <div className="container">
      <h1 className="mb-4 text-center">Main Store</h1>
      <div className="row">
        <div className="col-4">
          <h3 className="text-center my-2">Product Page</h3>
          <ProductPage />
        </div>
        <div className="col-8 bg-light">
          <h3 className="text-center my-2">Cart Page</h3>
          <CartPage />
        </div>
      </div>
    </div>
  );
};

export default CartMainPage;
