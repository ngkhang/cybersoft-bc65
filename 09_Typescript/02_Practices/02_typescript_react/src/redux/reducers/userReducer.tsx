import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { routeLink } from "../../App";
import {
  UserLoggedType,
  UserLoginType,
  UserProfileType,
  UserStateType,
} from "../../models/UserModel";
import { httpClient } from "../../utils/config";
import { ACCESS_TOKEN, USERS_API, USER_LOGIN } from "../../utils/api";
import { DispatchType } from "../store";
import {
  getDataJsonStorage,
  setCookie,
  setDataJsonStorage,
  setDataTextStorage,
} from "../../utils/helper";

const initialState: UserStateType = {
  userLogin: getDataJsonStorage(USER_LOGIN),
  userProfile: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setLoginAction: (
      state: UserStateType,
      action: PayloadAction<UserLoggedType>
    ) => {
      state.userLogin = action.payload;
    },

    setLogoutAction: (state: UserStateType) => {
      state.userLogin = null;
      state.userProfile = null;
    },

    getProfileAction: (
      state: UserStateType,
      action: PayloadAction<UserProfileType>
    ) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setLoginAction, setLogoutAction, getProfileAction } = userReducer.actions;

export default userReducer.reducer;

export const loginApiActionAsync = (userLogin: UserLoginType) => {
  return async (dispatch: DispatchType) => {
    try {
      const res = await httpClient.post(USERS_API.SIGNIN, userLogin);

      setDataJsonStorage(USER_LOGIN, res.data.content);
      setDataTextStorage(ACCESS_TOKEN, res.data.content.accessToken);
      setCookie(ACCESS_TOKEN, res.data.content.accessToken, 30);

      const action: PayloadAction<UserLoggedType> = setLoginAction(
        res.data.content
      );
      dispatch(action);
      routeLink.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProfileApiActionAsync = () => {
  return async (dispatch: DispatchType) => {
    const res = await httpClient.post(USERS_API.PROFILE);
    const action: PayloadAction<UserProfileType> = getProfileAction(
      res.data.content
    );
    dispatch(action);
  };
};
