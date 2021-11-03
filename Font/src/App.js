import "./App.css";
import { RouteHome } from "./routers";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./container/Client";
import { Route } from "react-router";
import SignIn from "./container/Client/Login/login.page";
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {showLayoutHome(RouteHome)}
          <Route path="/login" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
