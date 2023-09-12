import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const menuItems = [
    { name: "Home", path: "/falco-website" },
    { name: "Services", path: "/services/welcome" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {menuItems.map((item) => (
          <li className='app__flex p-text' key={`link-${item.name}`}>
            <div>
              <Link className='link-style' to={item.path}>{item.name}</Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link className='link-style' to={item.path} onClick={() => setToggle(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
