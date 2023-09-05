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
            <Link className='link-style' to="/falco-website" onClick={scrollToTop}>Home</Link>
          </div>
        </li>
        <li className='app__flex p-text'>
          <div>
            <Link className='link-style' to="/services/welcome">Services</Link>
          </div>
        </li>
        {/*<li className='app__flex p-text dropdown'>
          <div>
            <Link className='link-style' >Resources</Link>
            <div className='dropdown-content'>
              <Link className='link-style' to="/resources/training">Training</Link>
              <Link className='link-style' to="/resources/casestudies">Case Studies</Link>
            </div>
          </div>
        </li>*/}
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
