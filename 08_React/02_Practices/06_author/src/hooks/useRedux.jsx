import {useDispatch, useSelector} from 'react-redux';

const useRedux = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
  }
}

export default useRedux;
