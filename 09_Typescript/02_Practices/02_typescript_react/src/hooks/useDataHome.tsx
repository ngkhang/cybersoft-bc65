import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../redux/store';
import { getAllProductApi } from '../redux/reducers/productReducer';
import { useEffect } from 'react';

const useDataHome = () => {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch: DispatchType = useDispatch();
  
  useEffect(() => {
    const getAllProduct = async () => {
      const actionThunk = getAllProductApi();
      dispatch(actionThunk);
    };
    getAllProduct();
  }, [dispatch]);

  return {
    data: arrProduct,
  }
}

export default useDataHome;
