import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../images';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const menuItems = [
    {
      name: "Industries", 
      path: "/industries", 
      subMenu: [
          { name: "Aerospace", path: "/aerospace" },
          { name: "Food & Beverage", path: "/foodandbeverage" },
          { name: "Pharmaceutical Manufacturing", path: "/pharmamanufacturing" },
          { name: "Industrial Automation", path: "/industrialautomation" },
          { name: "Part Manufacturing", path: "/partmanufacturing" },
          { name: "Packaging", path: "/packaging" },
      ]
    },
    { 
      name: "Capabilities", 
      path: "/capabilities",
      subMenu: [
        { name: "Manufacturing", path: "/manufacturing" },
        { name: "Building Automation", path: "/buildingautomation" },
        { name: "SCADA", path: "/scada" },
        { name: "System Integration", path: "/systemintegration" },
        { name: "Calibration", path: "/calibration" },
        { name: "Mechanical Design", path: "/mechdesign" }
      ]
  },
    { name: "About", path: "/about" },
    { 
      name: "Support", 
      path: "/support",
      subMenu: [
        { name: "Remote Technical Support", path: "/remotesupport" },
        { name: "Field Services", path: "/fieldservice" },
        { name: "System Upgrades", path: "/upgrades" },
      ]
    },
    { name: "Contact", path: "/contact" },
];


  return (
    <nav className='app__navbar'>
      <Link to='/falco-website'>
        <div className='app__navbar-logo'>
          <img src={images.logo} alt='logo' />
        </div>
      </Link>
      <ul className='app__navbar-links'>
        {menuItems.map((item) => (
            <li className='app__flex p-text' key={`link-${item.name}`}>
                <div>
                    <Link className='link-style' to={item.path}>{item.name}</Link>
                    {item.subMenu && (
                        <ul className='submenu'>
                            {item.subMenu.map(sub => (
                                <li key={`submenu-${sub.name}`}>
                                    <Link className='link-style' to={sub.path}>{sub.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
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
