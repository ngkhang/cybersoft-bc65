import ProdItem from "./ProdItem";

const ProdList = (props) => {
  const { arrProd, setProductDetail } = props;

  return (
    <div className="container">
      <h3>Product List</h3>
      <div className="row">
        {arrProd.map((item, index) => {
          return (
            <div key={index} className="col-4 mb-3">
              <ProdItem prod={item} setProductDetail={setProductDetail} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProdList;
