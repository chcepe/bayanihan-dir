import { HashRouter as Router, Route, Switch } from "react-router-dom";

import ROUTES from "utils/routes";

const ALL_ROUTES = Object.keys(ROUTES).map((key) => {
  const { path, component, exact } = ROUTES[key as keyof typeof ROUTES];
  return <Route key={path} path={path} component={component} exact={exact} />;
});

const Routes = () => {
  return (
    <Router>
      <Switch>{ALL_ROUTES}</Switch>
    </Router>
  );
};

export default Routes;
