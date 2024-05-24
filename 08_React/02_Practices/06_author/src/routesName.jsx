import HomeStore from "./pages/HomeStore";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Page404 from './pages/Page404';
import AdminTemplate from './template/AdminTemplate';
import CreateUser from './pages/AdminUser/CreateUser';
import DetailUser from './pages/AdminUser/DetailUser';
import UserList from './pages/AdminUser/UserList';
import DefaultTemplate from './template/DefaultTemplate';

const router = [
  {
    path: '/',
    element: <DefaultTemplate/>,
    children: [
      {
        path: '/',
        element: <HomeStore/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'user/profile',
        element: <Profile/>,
      },
    ],
  },
  {
    path: 'admin',
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
