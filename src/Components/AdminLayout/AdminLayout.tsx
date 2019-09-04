import React, {Component, Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
  // @ts-ignore
} from '@coreui/react';
import DefaultFooter from './AdminFooter';
import DefaultHeader from './AdminHeader';

import { routes } from '../../Containers/App';

export class DefaultLayout extends Component {
  private navigation = [
    {
      name: 'Homepage',
      url: '/home',
      icon: 'icon-speedometer',
    }
  ];

  loading() {
    return (
      <div className="animated fadeIn pt-1 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
      </div>
    );
  };

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader/>
            <AppSidebarForm/>
            <Suspense fallback={this.loading()}>
              <AppSidebarNav navConfig={{items: this.navigation}} {...this.props} />
            </Suspense>
            <AppSidebarFooter/>
            <AppSidebarMinimizer/>
          </AppSidebar>
          <Switch>
            {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    render={props => (
                      <route.component {...props} />
                    )} 
                  />)
                  : (null);
              },
            )}
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter/>
          </Suspense>
        </AppFooter>
      </div>
    )
  }
}

export default DefaultLayout
