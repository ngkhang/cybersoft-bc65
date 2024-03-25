const BASE_URL = 'https://65faf78814650eb21008ea55.mockapi.io';

const END_POINTS = {
  PRODUCT: 'Products',
};

const PRODUCT_SERVER = {
  getAllProduct: () => {
    return axios({
      url: `${BASE_URL}/${END_POINTS.PRODUCT}`,
      method: 'GET',
    });
  },
  getProduct: (idProduct) => {
    return axios({
      url: `${BASE_URL}/${END_POINTS.PRODUCT}/${idProduct}`,
      method: 'GET',
    });
  },
  addProduct: (data) => {
    return axios({
      url: `${BASE_URL}/${END_POINTS.PRODUCT}`,
      method: 'POST',
      data,
    })
  },
  updateProduct: (idProduct, data) => {
    return axios({
      url: `${BASE_URL}/${END_POINTS.PRODUCT}/${idProduct}`,
      method: 'PUT',
      data,
    })
  },
  delProduct: (idProduct) => {
    return axios({
      url: `${BASE_URL}/${END_POINTS.PRODUCT}/${idProduct}`,
      method: 'DELETE',
    })
  },
}
