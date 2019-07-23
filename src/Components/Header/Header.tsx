import React, { FunctionComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/logo.svg";
import "./Header.css";
import { Nav } from "react-bootstrap";

export interface Props {
  pageTitle: string;
  menuItems?: Array<{
    title: string;
    href: string;
  }>;
}

const Header: FunctionComponent<Props> = props => {
  let menuItems = props.menuItems || [];
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img src={logo} alt={props.pageTitle} className="logo" />
        {props.pageTitle}
      </Navbar.Brand>
      <Nav>
        {menuItems.map((item, key) => {
          return (
            <Nav.Link key={key} href={item.href}>
              {item.title}
            </Nav.Link>
          );
        })}
      </Nav>
    </Navbar>
  );
};

export default Header;
