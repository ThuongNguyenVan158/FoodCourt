import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import RoutesAdmin from "./components/Routes";
import HomeTemplate from "./container/Client";
import { RouteHome } from "./routers";
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
        <Switch>{showLayoutHome(RouteHome)}</Switch>
        <RoutesAdmin />
      </BrowserRouter>
    </div>
  );
}

export default App;
