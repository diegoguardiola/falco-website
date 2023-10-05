import React from 'react';
import './SideNavbar.scss';

const SideNavbar = () => {
  return (
    <div className="side-nav">
      <ul>
        <li><a href="/support/remotesupport">Remote Technical Support</a></li>
        <li><a href="/support/fieldservice">Field Services</a></li>
        <li><a href="/support/upgrades">System Upgrades</a></li>

      </ul>
    </div>
  );
}

export default SideNavbar;
