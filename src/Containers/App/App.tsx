import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from '../../Components/DefaultLayout/DefaultLayout';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
