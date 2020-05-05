import Home from "./pages/home/Home";
import ListMovie from "./components/ListMovie";
import Admin from "./pages/admin/Admin";
import DashBoard from "./pages/admin/DashBoard";

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
]

const routesAdmin = [
    {
        path: "/admin/dashBoard",
        exact: false,
        component: DashBoard
    }
]

export {routesAdmin, routesHome};