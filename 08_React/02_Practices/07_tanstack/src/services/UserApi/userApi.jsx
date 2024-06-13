import api from "../../utils/api";
import { httpStore } from "../../utils/config";

export const getAllUser = async () => {
  const res = await httpStore.get(api.GET_ALL_USER);
  return res.data.content;
};

export const signUpUser = async (registerUser) => {
  const res = httpStore.post(api.ADD_USER, registerUser);
  return res;
};
