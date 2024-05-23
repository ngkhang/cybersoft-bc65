import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from './redux/store';

import DefaultTemplate from "./template/DefaultTemplate";
import "./assets/scss/index.scss";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import ROUTES_NAME from "./routesName";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<DefaultTemplate />}>
          <Route index element={<Home />} />
          {ROUTES_NAME.map((route, index) => {
            return (
              <Route key={index} path={route.path}>
                {route.subs.map((subRoute, idx) => {
                  return (
                    <Route
                      key={idx}
                      path={`/${route.path}/${subRoute.path}/${
                        subRoute.options?.idParam
                          ? subRoute.options.idParam
                          : ""
                      }`}
                      element={<subRoute.component />}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
