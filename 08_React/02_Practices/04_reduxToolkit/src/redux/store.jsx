import { configureStore } from "@reduxjs/toolkit";
import { TYPE } from "./action";
import cartReducer from './reducers/cartReducer';
import studentReducer from './reducers/studentReducer';

const initialState = {
  number: 1,
  fontSize: 16,
  arrComments: [],
};

export const store = configureStore({
  reducer: {
    number: (state = 1, action) => {
      if (action.type === TYPE.LIKE_NUMBER) {
        state = action.payload;
      }
      return state;
    },
    fontSize: (state = initialState.fontSize, action) => {
      return action.type === TYPE.FONT_NUMBER ? action.payload : state;
    },
    arrComments: (state = initialState.arrComments, action) => {
      if(action.type === TYPE.UPDATE_COMMENT) {
        state = [
          action.payload,
          ...state,
        ]
      }
      return state;
    },
    cartReducer: cartReducer,
    studentReducer,
  },
});
