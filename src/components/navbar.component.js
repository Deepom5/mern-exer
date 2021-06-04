import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Syook</Link>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collpase navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/order" className="nav-link">Create Order</Link>
          </li>
          <li className="navbar-item">
          <Link to="/item" className="nav-link">Create Item</Link>
          </li>
          <li className="navbar-item">
          <Link to="/customer" className="nav-link">Create customer</Link>
          </li>
          <li className="navbar-item">
          <Link to="/vehicle" className="nav-link">Create vehicle</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}