import axios from "axios";
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 60 * 1000 * 15, // 15 mins cache
})

export const httpApiStore = axios.create({
  adapter: cache.adapter,
  baseURL: "https://apistore.cybersoft.edu.vn",
  timeout: 30 * 1000,
});

httpApiStore.interceptors.request.use(
  (request) => {
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

httpApiStore.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
