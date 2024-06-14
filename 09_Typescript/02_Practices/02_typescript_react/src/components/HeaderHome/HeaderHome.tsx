import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/store";
import { ACCESS_TOKEN, USER_LOGIN } from "../../utils/api";
import { delCookie } from "../../utils/helper";
import { routeLink } from "../../App";
import { setLogoutAction } from "../../redux/reducers/userReducer";

const HeaderHome = () => {
  const { userLogin, userProfile } = useSelector(
    (state: RootState) => state.userReducer
  );
  const dispatch: DispatchType = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_LOGIN);
    delCookie(USER_LOGIN);

    const action = setLogoutAction();
    dispatch(action);

    routeLink.push("/");
  };

  const render = () => {
    if (userLogin) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              {userProfile?.name}
            </NavLink>
          </li>
          <li className="nav-item">
            <button type="button" className="btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      );
    }

    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="#">
          Shoes Shop
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            {render()}
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderHome;
