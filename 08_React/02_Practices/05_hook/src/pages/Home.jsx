import { Link } from "react-router-dom";
import ROUTES_NAME from "../routesName";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        {ROUTES_NAME.map((route, index) => {
          return (
            <div key={index} className="col">
              <h3 className="">{route.name}</h3>
              {route.des && (
                <ul>
                  {route.des.map((text, idxText) => (
                    <li key={idxText}>{text}</li>
                  ))}
                </ul>
              )}
              <ul className="fs-5">
                {route.subs.map((subRoute) => {
                  return (
                    <li key={subRoute.path}>
                      <Link
                        className="text-decoration-none"
                        to={`/${route.path}/${subRoute.path}/${
                          subRoute.options?.idParam ? 1 : ""
                        }`}
                      >
                        {subRoute.name}
                      </Link>
                      {subRoute.des && (
                        <ul>
                          {subRoute.des.map((text, idxText) => (
                            <li className="fs-6" key={idxText}>
                              {text}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
