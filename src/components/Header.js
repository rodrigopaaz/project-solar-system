import React, { Component } from 'react';
import img from '../images/logo-sistema-solar.png';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={ img } alt="logo" className="logo" />
      </header>
    );
  }
}

export default Header;
