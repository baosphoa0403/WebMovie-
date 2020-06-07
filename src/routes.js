import Home from "./pages/home/Home";
import ListMovie from "./components/ListMovie";
// import Admin from "./pages/admin/Admin";
import DashBoard from "./pages/admin/DashBoard";
import Form from "./components/Form";
import DeatailMovie from "./pages/home/DeatailMovie";
import DashboardMovie from "./pages/admin/DashboardMovie";

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/list-movie",
        exact: false,
        component: ListMovie
    },
    {
        path: "/form",
        exact: false,
        component: Form
    },
    {
        path: "/detailMovie/:id",
        exact: false,
        component: DeatailMovie
    }
]

const routesAdmin = [
    {
        path: "/admin/dashboardUser",
        exact: false,
        component: DashBoard
    },
    {
        path: "/admin/dashboardMovie",
        exact: false,
        component: DashboardMovie
    }

]

export {routesAdmin, routesHome};