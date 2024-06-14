import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DispatchType, GetStateMethodType } from "../store";
import ProductModelType, {
  ProductDetailModelType,
  ProductStateType,
} from "../../models/ProductModel";
import { httpClient } from "../../utils/config";
import { PRODUCT_API } from "../../utils/api";

const initialState: ProductStateType = {
  arrProduct: [],
  productDetail: null,
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (
      state: ProductStateType,
      action: PayloadAction<ProductModelType[]>
    ) => {
      state.arrProduct = action.payload;
    },
    setProductDetail: (
      state: ProductStateType,
      action: PayloadAction<ProductDetailModelType>
    ) => {
      state.productDetail = action.payload;
    },
  },
});

export const { setArrProductAction, setProductDetail } = productReducer.actions;

export default productReducer.reducer;

export const getAllProductApi =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  () => async (dispatch: DispatchType, _getState: GetStateMethodType) => {
    const res = await httpClient.get(PRODUCT_API.LIST);
    const action: PayloadAction<ProductModelType[]> = setArrProductAction(
      res.data.content
    );
    dispatch(action);
  };

export const getProductDetailApi =
  (id: number | string) => async (dispatch: DispatchType) => {
    const res = await httpClient.get(PRODUCT_API.DETAIL(id));
    const action: PayloadAction<ProductDetailModelType> = setProductDetail(
      res.data.content
    );
    dispatch(action);
  };
