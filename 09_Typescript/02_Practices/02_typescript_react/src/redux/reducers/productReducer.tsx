import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DispatchType, GetStateMethodType } from "../store";
import axios from "axios";
import ProductModelType, {
  ProductDetailModelType,
} from "../../models/ProductModel";

export interface ProductStateType {
  arrProduct: ProductModelType[];
  productDetail: ProductDetailModelType | null;
}

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getAllProductApi =
  () => async (dispatch: DispatchType, getState: GetStateMethodType) => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );
    const action: PayloadAction<ProductModelType[]> = setArrProductAction(
      res.data.content
    );
    dispatch(action);
  };

export const getProductDetailApi =
  (id: number | string) => async (dispatch: DispatchType) => {
    const res = await axios.get(
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`
    );
    const action: PayloadAction<ProductDetailModelType> = setProductDetail(
      res.data.content
    );
    dispatch(action);
  };
