import { NavLink } from 'react-router-dom';

const HeaderHome = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <NavLink className="navbar-brand" to="/">
        Redux
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
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/demo-redux">
              Demo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/chat-app">
              Chat App
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default HeaderHome;
