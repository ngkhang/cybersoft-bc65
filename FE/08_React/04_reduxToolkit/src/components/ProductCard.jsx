import { useDispatch } from 'react-redux';
import { TYPE } from '../redux/action';

const ProductCard = (props) => {
  const dispatch = useDispatch(); 
  const {prod} = props;
  const handleAddToCart = (prod) => {
    const action = {
      type: TYPE.ADD_TO_CART,
      payload: {
        prod,
      },
    };

    dispatch(action);
  }
  return (
    <div className='card'>
      <div className="card-header text-center text-uppercase">
        <h6>{prod.name}</h6>
      </div>
      <div className="card-body">
        <div>
          <img src={prod.img} alt="..."  className='img-fluid'/>
        </div>
        <p className='text-end'>${prod.price}</p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-primary" onClick={() => handleAddToCart(prod)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;
