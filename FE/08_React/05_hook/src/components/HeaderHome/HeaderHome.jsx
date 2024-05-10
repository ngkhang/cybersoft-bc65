import { NavLink } from "react-router-dom";
import ROUTES_NAME from "../../routesName";

const HeaderHome = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <NavLink className="navbar-brand" to="/">
        Hook
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
          {ROUTES_NAME.map((route, index) => {
            return (
              <li key={index} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {route.name}
                </a>
                <ul className="dropdown-menu">
                  {route.subs.map((subRoute) => {
                    return (
                      <li key={subRoute.path} className="nav-item">
                        <NavLink
                          className={({isActive}) => isActive ? "dropdown-item text-success fw-bold" : "dropdown-item"}
                          to={`/${route.path}/${subRoute.path}/${subRoute.options?.idParam ? 1 : '' }`}
                        >
                          {subRoute.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderHome;
