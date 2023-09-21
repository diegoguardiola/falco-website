import React from 'react';
import './SideNavbar.scss';

const SideNavbar = () => {
  return (
    <div className="side-nav">
      <ul>
        <li><a href="/aerospace">Aerospace</a></li>
        <li><a href="/foodandbeverage">Food & Beverage</a></li>
        <li><a href="/pharmamanufacturing">Pharmaceutical Manufacturing</a></li>
        <li><a href="/industrialautomation">Industrial Automation</a></li>
        <li><a href="/partmanufacturing">Part Manufacturing</a></li>
        <li><a href="/packaging">Packaging</a></li>
      </ul>
    </div>
  );
}

export default SideNavbar;
