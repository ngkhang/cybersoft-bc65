const ProdItem = (props) => {
  const { prod, setProductDetail } = props;
  return (
    <div className="card h-100">
      <img className="card-img-top" src={prod.img} alt="..." />
      <div className="card-body">
        <h4 className="card-title text-uppercase">{prod.name}</h4>
        <p className="card-text">{prod.price}</p>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setProductDetail(prod)}
        >
          View detail
        </button>
      </div>
    </div>
  );
};

export default ProdItem;
