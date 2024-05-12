import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearchParams = () => {
  const [products, setProducts] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const getProductByKeyword = async (keyword) => {
    let response = await axios.get(`https://shop.cyberlearn.vn/api/product?keyword=${keyword}`);
    setProducts(response.data.content)
  };

  const form = useFormik({
    initialValues: {
      keyword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      setSearchParam({
        k: values.keyword,
      })
    }
  });

  useEffect(() => {
    let keyword = searchParam.get('k');
    getProductByKeyword(keyword);
  }, [searchParam])

  return (
    <div className="container">
      <h3>Tìm kiếm sản phẩm</h3>
      <form onSubmit={form.handleSubmit}>
        <input className='w-25 d-inline-block form-control' onInput={form.handleChange} type="text" name='keyword' />
        <button type='submit' className='btn btn-dark'>Search</button>
      </form>
      <h3>Kết quả tìm kiếm</h3>
      <div className="result row justify-content-center">
        {
          products && products.map((prod) => {
            return (
              <div key={prod.id} className="col-3">
          <div className="card">
            <img src={prod.image} alt="..." />
            <div className="card-body">
              <h3>{prod.name}</h3>
              <p>{prod.price}</p>
              <NavLink className={'btn btn-success'}>View Detail</NavLink>
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

export default UseSearchParams;
