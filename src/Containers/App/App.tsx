import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AdminLayout } from '../../Components/AdminLayout';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={AdminLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
