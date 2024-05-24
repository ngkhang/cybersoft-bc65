import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import router from "./routesName";

//Cấu hình biến để chuyển hướng trang
import { createBrowserHistory } from "history";
//history tương tự navigate dùng để chuyển hướng trang ở 1 trang không phải component
export const historyRouter = createBrowserHistory({ window });

import "./assets/scss/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
console.log('hi');
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={historyRouter}>
        {/* <BrowserRouter > */}
        <Routes>
          {router.map((parentRoute, idxParent) => {
            return (
              <Route
                key={idxParent}
                element={parentRoute.element}
                path={parentRoute.path}
              >
                {parentRoute.children?.length > 0 &&
                  parentRoute.children.map((childRoute, idxChild) => {
                    return (
                      <Route
                        key={idxChild}
                        element={childRoute.element}
                        path={childRoute.path}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Routes>
        {/* </BrowserRouter> */}
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
