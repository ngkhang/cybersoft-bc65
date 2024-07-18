// Server Action
import { httpApiStore } from '@/app/utils/config';

const getProductApi = async () => {
  const res = await httpApiStore.get('/api/product');
  return res.data.content;
}

const getProductById = async (id) => {
  const res = await httpApiStore.get(`/api/Product/getbyid?id=${id}`);
  return res.data.content;
}

const getProductByKeyword = async (keyword) => {
  const URL = `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`;

  const res = await fetch(URL, {
    next: { revalidate: 60 * 1000 * 15 }
  })
  const resData = await res.json();
  return resData.content;
}
export {
  getProductApi,
  getProductById,
  getProductByKeyword,
}