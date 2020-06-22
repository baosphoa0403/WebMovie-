import React, { Suspense, lazy } from "react";
import DashBoard from "./pages/admin/DashBoard";

import DashboardMovie from "./pages/admin/DashboardMovie";
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/home/Home")), 3000);
  });
});
const ListMovie = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/ListMovie")), 3000);
  });
});
const Form = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Form")), 3000);
  });
});
const DeatailMovie = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/home/DeatailMovie")), 3000);
  });
});
const ModalUserBook = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/home/ModalUserBook")), 3000);
  });
});
const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/list-movie",
    exact: false,
    component: ListMovie,
  },
  {
    path: "/form",
    exact: false,
    component: Form,
  },
  {
    path: "/detailMovie/:id",
    exact: false,
    component: DeatailMovie,
  },
  {
    path: "/inFoUserBooking",
    exact: false,
    component: ModalUserBook,
  },
];

const routesAdmin = [
  {
    path: "/admin/dashboardUser",
    exact: false,
    component: DashBoard,
  },
  {
    path: "/admin/dashboardMovie",
    exact: false,
    component: DashboardMovie,
  },
];

export { routesAdmin, routesHome };
