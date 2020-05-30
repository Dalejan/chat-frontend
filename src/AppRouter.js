import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import PrivateRoute from "./utils/PrivateRoute";

class AppRouter extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          if (prop.private)
            return (
              <PrivateRoute
                from={prop.path}
                component={prop.component}
                key={key}
              />
            );
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    );
  }
}

export default AppRouter;
