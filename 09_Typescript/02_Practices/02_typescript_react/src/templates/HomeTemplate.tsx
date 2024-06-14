import { Outlet } from "react-router-dom";
import HeaderHome from "../components/HeaderHome/HeaderHome";
import FooterHome from "../components/FooterHome/FooterHome";

const HomeTemplate = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <HeaderHome />
      <div className="content flex-grow-1 d-flex flex-column">
        <Outlet />
      </div>
      <FooterHome />
    </div>
  );
};

export default HomeTemplate;
