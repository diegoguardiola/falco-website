import React from 'react';
import './SideNavbar.scss';

const SideNavbar = () => {
  return (
    <div className="services-side-nav">
      <ul>
        <li><a href="/services/aerospace">Aerospace</a></li>
        <li><a href="/services/foodandbeverage">Food & Beverage</a></li>
        <li><a href="/services/pharmaceutical">Pharmaceutical Manufacturing</a></li>
        <li><a href="/services/industrial">Industrial Automation</a></li>
        <li><a href="/services/partmanufacturing">Part Manufacturing</a></li>
        <li><a href="/services/packaging">Packaging</a></li>
      </ul>
    </div>
  );
}

export default SideNavbar;
