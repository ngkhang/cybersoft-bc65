import { useEffect, useState } from 'react';
import { httpStore } from '../utils/config';
import api from '../utils/api';

const HomeStore = () => {
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    const res = await httpStore.get(api.GET_ALL_PRODUCT);
    setProducts(res.data.content);
  }

  useEffect(() => {
    getAllProduct();
  }, [])

  return (
    <div className='container'>
      <h1>Home Store</h1>

      <div className="row">
      {
        products.length > 0 && products.map((prod) => {
          return (
            <div key={prod.id} className="col-3">
              <div className="card">
                <img src={prod.image} alt="..." className='img-fluid' />
                <div className="card-body">
                  <p>{prod.name}</p>
                  <p>{prod.price}</p>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default HomeStore;
