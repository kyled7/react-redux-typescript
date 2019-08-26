import React, { Component } from 'react';
import {DropdownMenu, DropdownToggle, Nav, DropdownItem} from 'reactstrap';
import {
  AppHeaderDropdown,
  AppSidebarToggler,
  // @ts-ignore
} from '@coreui/react';
import { Link } from 'react-router-dom';

import logo from "../../Assets/logo.svg";
import avatar from "../../Assets/logo.svg";

export default class DefaultHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        <span className="navbar-brand">
        <img src={logo} width="32" height="35" alt="Core-ui app" />
        <span>Core UI app</span>
        </span>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown>
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt='avatar'/>
            </DropdownToggle>
            <DropdownMenu right style={{right: 'auto', height: 'auto'}}>
              <DropdownItem tag={Link} to="/logout">Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    )
  }
};
