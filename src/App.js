import React from "react";
import "./App.css";
import PageNotFound from "../src/pages/PageNotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import DetailMovie from "./pages/home/DeatailMovie";
import TicketBooking from "./pages/home/TicketBooking";
function App() {
  return (
    <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/detail/:id" component={DetailMovie}/>
         <Route exact path="/booking/:idLichChieu" component={TicketBooking}/>
         <Route  path="" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
