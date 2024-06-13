import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./routesName";

const queryClient = new QueryClient();
export const routeLink = createBrowserHistory();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HistoryRouter history={routeLink}>
        <Routes>
          {router.map((parentRouter, index) => {
            return (
              <Route
                key={index}
                path={parentRouter.path}
                element={parentRouter.element}
              >
                {parentRouter.children?.map((childRoute, idxChild) => {
                  return (
                    <Route
                      key={idxChild}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Routes>
      </HistoryRouter>

      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  );
};

export default App;
