import { useDispatch, useSelector } from "react-redux";
import { TYPE } from "../../redux/action";

const CartPage = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  // Handle Delete product
  const handleDel = (id) => {
    const action = {
      type: TYPE.DEL_PROD_CART,
      payload: {
        id,
      },
    };

    dispatch(action);
  };

  // Handle Change Input field
  const handeChangeQuantity = (e, id, status) => {
    const { value } = e.target;
    if (Number(value) || value === '') {
      const action = {
        type: TYPE.UP_DOWN_PROD_CART,
        payload: {
          id,
          count: (Number(value) > 0) ? value * 1 : 1,
          status,
        },
      };
      dispatch(action);
    }
  };

  // Handle Click Button
  const handleClickQuantity = (prod, status) => {
    if ((prod.quantity > 1 && status === "DOWN") || status === "UP") {
      const action = {
        type: TYPE.UP_DOWN_PROD_CART,
        payload: {
          id: prod.id,
          count: status === "UP" ? 1 : -1,
          status: "button",
        },
      };

      dispatch(action);
    }
  };
  return (
    <>
      {cartReducer.length !== 0 ? (
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Img</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartReducer.map((prod, index) => {
              return (
                <tr key={prod.id}>
                  <td>{index + 1}</td>
                  <td className="w-25">
                    <img src={prod.img} alt="..." className="img-fluid" />
                  </td>
                  <td>{prod.price}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleClickQuantity(prod, "DOWN")}
                      >
                        -
                      </button>

                      <input
                        type="text"
                        name="quantity"
                        className="form-control mx-2"
                        style={{ width: "60px" }}
                        value={prod.quantity}
                        onChange={(e) =>
                          handeChangeQuantity(e, prod.id, "input")
                        }
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => handleClickQuantity(prod, "UP")}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{prod.quantity * prod.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDel(prod.id)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Cart is Empty</p>
      )}
    </>
  );
};

export default CartPage;
