import { TYPE } from "../action";

const initialState = [];

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE.ADD_TO_CART: {
      let currentProd = state.find((item) => item.id === payload.prod.id);
      const newList = [...state];

      if (currentProd === undefined) {
        newList.push({
          ...payload.prod,
          quantity: 1,
        })
      } else {
        currentProd.quantity++;
      }
      state = [...newList];
      return state;
    }
    case TYPE.DEL_PROD_CART: {
      const newListProd = state.filter((prod) => prod.id !== payload.id);
      state = newListProd;
      return state;
    }
    case TYPE.UP_DOWN_PROD_CART: {
      const { id, count, status } = payload;

      let product = state.find((item) => item.id === id);

      product.quantity = (status === 'input') ? count : product.quantity + count;
      state = [...state];
      return state;
    }
    default:
      return state; 
  }
};

export default cartReducer;
