import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  UserOutlined
} from "@ant-design/icons";

const renderUser = (userLogin) => {
  if (userLogin)
    return (
      <>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-success fw-bold" : "nav-link"
            }
            to={`/user/profile`}
          >
            <UserOutlined /> {userLogin.email}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-success fw-bold" : "nav-link"
            }
            to={`/admin/users`}
          >
            Dashboard
          </NavLink>
        </li>
      </>
    );

  return (
    <>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link text-success fw-bold" : "nav-link"
          }
          to={`/login`}
        >
          Login
        </NavLink>
      </li>
    </>
  );
};

const HeaderHome = () => {
  const { userLogin } = useSelector((state) => state.userReducer);

  return (
    <nav className="navbar navbar-expand-sm align-items-center">
      <NavLink className="navbar-brand" to="/">
        HomeStore
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
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          {renderUser(userLogin)}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderHome;
