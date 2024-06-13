import axios from "axios";
import { routeLink } from '../App';

import {
  KEYS,
  // getDataTextStorage,
  isTokenExpired,
  setDataTextStorage,
} from "./utilFunction";
import api, { BASE_URL } from "./api";

// Khai báo Interceptor
export const httpStore = axios.create({
  baseURL: BASE_URL,
  time: 30 * 1000, // mili giây = 30 giây huỷ request nếu không có kết quả trả về
});

// Cấu hình interceptor request
httpStore.interceptors.request.use(
  (req) => {
    // const token = getDataTextStorage(KEYS.accessToken);
    // req.headers = {
    //   ...req.headers,
    //   Authorization: token,
    // };
    return req;
  },
  (error) => Promise.reject(error)
);

// Cấu hình interceptor response
httpStore.interceptors.response.use(
  (res) => res,
  (err) => {
    //Handle xử lý lỗi
    if (err.response?.status === 400 || err.response.status === 404) {
      routeLink.push('/')
    } else if (err.response?.status === 401) {
      //Xử refeshtoken
      if (isTokenExpired(localStorage.getItem(KEYS.accessToken))) {
        //Gọi api refesh token
        const pro = httpStore.post(api.REFESH_TOKEN);
        pro.then((res) => {
          setDataTextStorage(KEYS.accessToken, res.data.content.accessToken);
        });
        pro.catch(() => {
          routeLink.push('/login');
        });
      }
      routeLink.push('/login');
    }
    return Promise.reject(err);
  }
);
