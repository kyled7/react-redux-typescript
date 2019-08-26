import React, {Component, Suspense} from 'react';
import { HashRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
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
import PickersHeader from '../../Components/DefaultLayout/PickersHeader';
import DefaultFooter from '../../Components/DefaultLayout/DefaultFooter';
import DefaultHeader from '../../Components/DefaultLayout/DefaultHeader';

import Routes from "./AppRoutes";
import "./App.scss";

export default class App extends Component {
  private menuItems = [
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
      <HashRouter>
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
                <AppSidebarNav navConfig={{items: this.menuItems}} {...this.props} />
              </Suspense>
              <AppSidebarFooter/>
              <AppSidebarMinimizer/>
            </AppSidebar>
            <main className="main">
              <Suspense fallback={this.loading()}>
                <nav>
                  <PickersHeader/>
                </nav>
              </Suspense>
              <Container fluid>
                <Suspense fallback={this.loading()}>
                  <Routes />
                </Suspense>
              </Container>
            </main>
          </div>
          <AppFooter>
            <Suspense fallback={this.loading()}>
              <DefaultFooter/>
            </Suspense>
          </AppFooter>
        </div>
      </HashRouter>
    );
  }
}
