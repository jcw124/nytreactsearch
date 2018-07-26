import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Left side</li>
          <li className="itemCenter">Center</li>
          <li className="itemRight"> right side</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;