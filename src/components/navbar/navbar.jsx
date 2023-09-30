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
      name: "Services", 
      path: "/services", 
      subMenu: [
        { 
          name: "Aerospace", 
          path: "/services/aerospace",
        },
        { 
          name: "Food & Beverage", 
          path: "services/foodandbeverage",
          subMenu: [
            { name: "Packaging", path: "/services/foodandbeverage/packaging" },
            { name: "Processing", path: "/services/foodandbeverage/processing" },
          ] 
        },
        { 
          name: "Pharmaceutical Manufacturing", 
          path: "/services/pharmaceutical",
          subMenu: [
            { name: "Calibration", path: "/services/pharmaceutical/calibration" },
            { name: "Bioreactors", path: "/services/pharmaceutical/bioreactors" },
            { name: "Validation", path: "/services/pharmaceutical/validation" },
          ]  
        },
        { 
          name: "Industrial Automation", 
          path: "/services/industrial",
          subMenu: [
            { name: "Start Up & Comissioning", path: "/services/industrial/startup" },
            { name: "Upgrades", path: "/services/industrial/upgrades" },
            { name: "Full Automation", path: "/services/industrial/fullautomation" },
            { name: "Calibration", path: "/services/industrial/calibration" },
            { name: "Documentation", path: "/services/industrial/documentation" },
          ] 
        },
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
        { name: "Mechanical Design", path: "/mechdesign" },
        { name: "Palletization", path: "/palletization" }
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
                                {sub.subMenu && (
                                    <ul className='sub-submenu'>
                                        {sub.subMenu.map(subsub => (
                                            <li key={`sub-submenu-${subsub.name}`}>
                                                <Link className='link-style' to={subsub.path}>{subsub.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
