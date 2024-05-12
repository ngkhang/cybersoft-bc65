import React from 'react'

const Cart = (props) => {
const {arrProductCart, delProd, handleQuantity} = props;
  return (
    <div className='mb-4'>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            arrProductCart.map((item, index) => {
              return <>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.image}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <button className='btn btn-dark d-inline-block me-2' onClick={() => handleQuantity(item.id, 'UP')}>+</button>
                    <button className='btn btn-dark d-inline-block me-2' onClick={() => handleQuantity(item.id, 'DOWN')}>-</button>
                    <button className='btn btn-dark d-inline-block' onClick={()=> delProd(item.id)}>x</button>
                  </td>
                </tr>
              </>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cart;
