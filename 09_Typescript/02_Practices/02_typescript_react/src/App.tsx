import { createBrowserHistory } from "history";
import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const routeLink: any = createBrowserHistory();

function App() {
  return (
    <>
      <Provider store={store}>
        <HistoryRouter history={routeLink}>
          <Routes>
            <Route path="/" element={<HomeTemplate />}>
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="cart" element={<Cart />} />
              <Route path="profile" element={<Profile />} />
              <Route path="search" element={<Search />} />
              <Route path="detail">
                <Route path=":id" element={<Detail />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </HistoryRouter>
      </Provider>
    </>
  );
}

export default App;
