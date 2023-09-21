import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';




function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="header">
      <div className="logo">
        <img className='logo' src={logo} alt="Logo" />
        <h4>Maths  Magicians</h4>
        
       
      </div>
    

      <nav>

        <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
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
        <FontAwesomeIcon icon={faBars} className="menu" onClick={handleMenuToggle}  />
      </nav>
    </header>
  );
}

export default Header;
