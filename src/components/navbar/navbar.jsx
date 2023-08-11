import React from 'react';
import { images } from '../../images';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='app__flex p-text'>
          <div>
            <Link className='link-style' to="/" onClick={scrollToTop}>Home</Link>
          </div>
        </li>
        <li className='app__flex p-text'>
          <div>
            <Link className='link-style' to="/services/welcome">Services</Link>
          </div>
        </li>
        <li className='app__flex p-text'>
          <div>
            <Link className='link-style' to="/contact">Contact</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
