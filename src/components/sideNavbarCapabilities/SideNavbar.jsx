import React from 'react';
import './SideNavbar.scss';

const SideNavbar = () => {
  return (
    <div className="side-nav">
      <ul>
        <li><a href="/manufacturing">Manufacturing</a></li>
        <li><a href="/buildingautomation">Building Automation</a></li>
        <li><a href="/scada">SCADA</a></li>
        <li><a href="/systemintegration">System Integration</a></li>
        <li><a href="/calibration">Calibration</a></li>
        <li><a href="/mechdesign">Mechanical Design</a></li>
        <li><a href="/palletizing">Palletizing</a></li>
      </ul>
    </div>
  );
}

export default SideNavbar;
