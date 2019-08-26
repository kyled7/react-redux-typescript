import React, { Component } from 'react';
import { Nav } from 'reactstrap';

class PickersHeader extends Component {
  render() {
    return (
      <Nav aria-label="breadcrumb" navbar>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">CoreUI</a></li>
          <li className="breadcrumb-item"><a href="#">Profile</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </Nav>
    )
  }
}

export default PickersHeader
