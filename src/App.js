import React, { Suspense, lazy } from "react";
import "./App.css";
import PageNotFound from "../src/pages/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailMovie from "./pages/home/DeatailMovie";
import { routesAdmin, routesHome } from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Admin from "./pages/admin/Admin";
import Loading from "./components/Loading";
const TicketBooking = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/home/TicketBooking")), 2000);
  });
});
function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  const showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
          {showMenuAdmin(routesAdmin)}
        <Suspense fallback={<Loading />}>
          {showMenuHome(routesHome)}
          <Route path="/admin" component={Admin} />
          <Route exact path="/detail/:id" component={DetailMovie} />
          <Route exact path="/booking/:idLichChieu" component={TicketBooking} />
        </Suspense>
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
