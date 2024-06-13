import AdminTemplate from './template/AdminTemplate';
import UserList from './pages/UserList/UserList';
import CreateUser from './pages/CreateUser/CreateUser';
import DetailUser from './pages/AdminUser/DetailUser';
import Page404 from './pages/Page404';

const router = [
  {
    path: '/',
    element: <AdminTemplate/>,
    children: [
      {
        path: 'users',
        element: <UserList/>,
      },
      {
        path: 'user-create',
        element: <CreateUser/>,
      },
      {
        path: 'user-detail/:idUser',
        element: <DetailUser/>,
      },
    ],
  },
  {
    path: '*',
    element: <Page404/>,
  },
]

export default router;
