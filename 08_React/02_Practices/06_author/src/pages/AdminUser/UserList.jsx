import { useEffect } from 'react';
import TableAntd from "../../components/TableAntd";
import { useDispatch, useSelector } from 'react-redux';
import { getUserListApi } from '../../redux/reducers/userReducer';

const UserList = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const actionThunk = getUserListApi();
    dispatch(actionThunk);
  }, [dispatch])

  return <TableAntd data={userList} />;
};

export default UserList;
