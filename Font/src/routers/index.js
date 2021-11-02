import HomePage from "../container/Client/Home";
import SignIn from "../container/Client/Login/login.page";
import DetailFood from "../container/Client/DetailFood";
import Order from "../container/Client/Order";
const RouteHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/login",
    component: SignIn,
  },
  {
    exact: false,
    path: "/order",
    component: Order,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailFood,
  },
];
export { RouteHome };
