import axios from "axios";
import { historyRouter } from '../main';
// import { createBrowserHistory } from "history";

import {
  KEYS,
  getDataTextStorage,
  isTokenExpired,
  setDataTextStorage,
} from "./utilFunction";
import api, { BASE_URL } from "./api";

// history tương tự navigate dùng để chuyển hướng trang ở 1 trang không phải component
// const historyRouter = createBrowserHistory();

// Khai báo Interceptor
export const httpStore = axios.create({
  baseURL: BASE_URL,
  time: 30 * 1000, // mili giây = 30 giây huỷ request nếu không có kết quả trả về
});

// Cấu hình interceptor request
httpStore.interceptors.request.use(
  (req) => {
    const token = getDataTextStorage(KEYS.accessToken);
    req.headers = {
      ...req.headers,
      Authorization: token,
    };

    return req;
  },
  (error) => Promise.reject(error)
);

// Cấu hình interceptor response
httpStore.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log(err.response);
    //Handle xử lý lỗi
    if (err.response?.status === 400 || err.response.status === 404) {
      // alert("Đường dẫn không hợp lệ !");
      // window.location.href = '/'
      historyRouter.push('/')
    } else if (err.response?.status === 401) {
      //Xử refeshtoken
      if (isTokenExpired(localStorage.getItem(KEYS.accessToken))) {
        //Gọi api refesh token
        const pro = httpStore.post(api.REFESH_TOKEN);
        pro.then((res) => {
          setDataTextStorage(KEYS.accessToken, res.data.content.accessToken);
        });
        pro.catch(() => {
          historyRouter.push('/login');
        });
      }
      //401 có 2 trường hợp(không có token | token hết hạn)
      // alert("Không đủ quyền truy cập vào trang này ! Yêu cầu đăng nhập");
      // window.location.href = '/login'
      historyRouter.push('/login');
    }
    return Promise.reject(err);
  }
);

/*
  Các status code thường code:
    200: req thành công và nhận kết quả thành công
    201: req thành công dữ liệu đã được khởi tạo
    400: bad request (tham số không hợp lệ) (tham số gửi đi đúng nhưng không có dữ liệu)
    404: not found (không tìm thấy đường dẫn) (tham số gửi đi đúng nhưng không có dữ liệu)
    401: Unauthorize - không có quyền truy cập vào api này (token không hợp lệ hoặc thiếu token hoặc sai token)
    403: Forbiden - Chưa đủ quyền truy cập (token chưa đủ quyền truy cập vào api này)
    500: Error inserver (lỗi này có thể do frontend truyền giá trị không đúng format dẫn đến code server xử lý lỗi hoặc do front truyền đúng dữ liệu tuy nhiên backend trong quá trình xử lý logic code bị lỗi tại server)
*/
