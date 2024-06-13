import { useQuery } from '@tanstack/react-query';
import TableAntd from '../../components/TableAntd'
import QUERY_KEY from '../../utils/reactQuery';
import { getAllUser } from '../../services/UserApi/userApi';

const UserList = () => {
  // const { isPending, isError, data, error } = query;
  const { data } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_USER],
    queryFn: getAllUser,
    staleTime: 4 * 1000,
    gcTime: 6 * 1000,
    refetchOnWindowFocus: true,
  })

  return (
    <>
      <h1>Users List</h1>
      <TableAntd data={data} />
    </>
  )
};

export default UserList;
