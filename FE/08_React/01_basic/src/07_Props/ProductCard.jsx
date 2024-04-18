const ProductCard = (props) => {
  const {prod} = props
  return (
    <div className="card">
      <img src={prod.img} alt="..." />
      <div className="card-body">
        <h3>{prod.name}</h3>
        <p>{prod.price}</p>
      </div>
    </div>
  )
}
export default ProductCard;
