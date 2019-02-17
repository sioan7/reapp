import React, {Component} from 'react'
import './Header.css';

import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <div className="Header-logo"></div>
        </Link>
      </div>
    )
  }
}

export default Header