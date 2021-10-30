import HomePage from "../container/Client/Home";
import SignIn from "../container/Client/Login";
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
];
export { RouteHome };
