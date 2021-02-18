import { Route, Switch } from "react-router-dom";
import App from "../App";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/form/page-1"></Route>
      <Route exact path="/form/page-2"></Route>
    </Switch>
  );
}

export default Routes;
