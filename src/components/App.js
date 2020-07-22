import React from "react";
import { Route, Switch } from "react-router-dom";
import CounterPage from "../features/counter/CounterPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={CounterPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;