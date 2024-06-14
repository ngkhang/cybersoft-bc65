export const ACCESS_TOKEN = "access_token";
export const TOKEN_CYBERSOFT = "";
export const USER_LOGIN = "userLogin";
export const DOMAIN = "https://apistore.cybersoft.edu.vn/";

export const PRODUCT_API = {
  LIST: "/api/Product",
  DETAIL: (idProduct: string | number) =>
    `/api/Product/getbyid?id=${idProduct}`,
};

export const USERS_API = {
  SIGNIN: "/api/Users/signin",
  PROFILE: "/api/Users/getProfile",
};
