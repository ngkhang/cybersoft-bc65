import { createSlice } from "@reduxjs/toolkit";
import { httpStore } from "../../utils/config";
import {
  KEYS,
  getDataJsonStorage,
  setDataJsonStorage,
  setDataTextStorage,
} from "../../utils/utilFunction";
import api from "../../utils/api";
import { historyRouter } from '../../main';

const initialState = {
  userLogin: getDataJsonStorage(KEYS.userLogin),
  userList: undefined,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, { payload }) => {
      state.userLogin = payload;
    },
    getUserList: (state, { payload }) => {
      state.userList = payload;
    },
    logoutAction: (state) => {
      localStorage.removeItem(KEYS.accessToken);
      localStorage.removeItem(KEYS.userLogin);
      state.userLogin = getDataJsonStorage(KEYS.userLogin);
      // state. = getDataJsonStorage(KEYS.userLogin);
    }
  },
});

export const { loginAction, getUserList, logoutAction } = userReducer.actions;

export default userReducer.reducer;

// ------------ ACTION THUNK ------------
export const loginActionApi = (values) => {
  // Trước khi disptach chạy
  return async (dispatch) => {
    // Dispatch chạy, xử lý API
    const res = await httpStore.post(api.USER_SIGNIN, values);
    const result = res.data.content;

    const actionCreator = loginAction(result);
    dispatch(actionCreator);
    setDataJsonStorage(KEYS.userLogin, result);
    setDataTextStorage(KEYS.accessToken, result[KEYS.accessToken]);
    historyRouter.push('user/profile')
  };
};

export const getUserListApi = () => {
  return async (dispatch) => {
    const res = await httpStore.get(api.GET_ALL_USER);
    const result = res.data.content;

    const actionCreator = getUserList(result);
    dispatch(actionCreator);
  };
};

export const addUserActionApi = (values) => {
  return async (dispatch) => {
    const res = await httpStore.post(api.ADD_USER, values);
  };
};
