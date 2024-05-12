import useGetAPI from "./useGetAPI";

const DemoCustomHook = () => {
  const URL = "https://shop.cyberlearn.vn/api/product";
  const products = useGetAPI(URL);

  return (
    <div className="container">
      <h3>DemoCustomHook</h3>
      <div className="row">
        {products &&
          products.map((prod) => {
            return (
              <div key={prod.id} className="col-3">
                <div className="card">
                  <img src={prod.image} alt="..." />
                  <div className="card-body">
                    <h4>{prod.name}</h4>
                    <p>{prod.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DemoCustomHook;
