<<<<<<< HEAD
import HomePage from "../container/Client/Home";
<<<<<<< HEAD
import SignIn from "../container/Client/Login";
=======
import DetailFood from "../container/Client/DetailFood";
import HomePage from "../container/Client/Home";
import SignIn from "../container/Client/Login";
import Order from "../container/Client/Order";
>>>>>>> nhat
=======
>>>>>>> a022d41766c16528cb2fca8dc82ef9889a35e14a
const RouteHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
<<<<<<< HEAD
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
=======
>>>>>>> a022d41766c16528cb2fca8dc82ef9889a35e14a
];
export { RouteHome };
