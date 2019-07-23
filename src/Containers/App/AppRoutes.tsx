import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../HomePage";
import Example from "../Example";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/example" component={Example} />
            <Route component={() => <div>Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
