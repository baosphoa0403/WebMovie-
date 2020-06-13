import React ,{Suspense, lazy}from "react";
import "./App.css";
import PageNotFound from "../src/pages/PageNotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import DetailMovie from "./pages/home/DeatailMovie";
// import TicketBooking from "./pages/home/TicketBooking";
import {routesAdmin, routesHome} from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Admin from "./pages/admin/Admin";
import Loading from "./components/Loading";
const DetailMovie = lazy(()=>import('./pages/home/DeatailMovie'))
const TicketBooking = lazy(()=>import('./pages/home/TicketBooking'))
// const TicketBooking = lazy(()=>import('./pages/home/TicketBooking')) 
function App() {
  const showMenuHome = (routes) => {
        if (routes && routes.length > 0) {
          return routes.map((item, index)=>{
             return(
              <HomeTemplate 
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
              />
             )
             
          })
        }
  }
  const showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index)=>{
        return(
          <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
          />
        )
         
      })
    }
  }
  return (
    <BrowserRouter>
      <Switch>
         {showMenuHome(routesHome)}
         {showMenuAdmin(routesAdmin)}
         <Suspense fallback={<Loading/>}>
         <Route path="/admin" component={Admin}/>
         <Route exact path="/detail/:id" component={DetailMovie}/>
         <Route exact path="/booking/:idLichChieu" component={TicketBooking}/>
         <Route  path="" component={PageNotFound}/>
         </Suspense>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
