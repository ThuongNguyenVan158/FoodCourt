<<<<<<< HEAD
import HomePage from "../container/Client/Home";
import SignIn from "../container/Client/Login";
=======
import DetailFood from "../container/Client/DetailFood";
import HomePage from "../container/Client/Home";
import SignIn from "../container/Client/Login";
import Order from "../container/Client/Order";
>>>>>>> nhat
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
<<<<<<< HEAD
=======
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
>>>>>>> nhat
];
export { RouteHome };
