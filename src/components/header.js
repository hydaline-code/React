
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className='logo' src={logo} alt="Logo" />
        <h4>Maths  Magicians</h4>
      </div>
      <nav >
        <ul className="nav-menu">
          <li>
            <Link to="/">Home |</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator |</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes |</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
