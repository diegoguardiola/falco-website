import React from 'react'
import './Upgrades.scss'
import SideNavbar from '../../../components/sideNavbarSupport/SideNavbar'
import { images } from '../../../images'


function Upgrades() {
  return (
    <div className='upgrades-container'>
        <div className='upgrades-header'>
            <h1>System Upgrades</h1>
        </div>
        <div className='upgrades-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='upgrades-info'>
                <h2>PLC and HMI System Upgrade</h2>
                <p>
                    Enhance your industrial automation capabilities with our PLC and HMI system upgrade services. Our 
                    experienced team will replace outdated PLCs and HMIs with state-of-the-art technology, ensuring 
                    greater efficiency and reliability in your production processes. You'll benefit from improved 
                    control, real-time data visualization, and seamless integration with existing systems. With enhanced 
                    human-machine interfaces and advanced programming, our upgrades will empower your operators to monitor 
                    and manage your machinery with ease, resulting in reduced downtime and increased productivity.
                </p>
                <img src={images.upgradeBody1}/>
                <h2>Robotic System Upgrade:</h2>
                <p>
                    Elevate your manufacturing operations with our robotic system upgrade solutions. We specialize in 
                    modernizing robotic cells to boost precision, speed, and flexibility. Our team will integrate the 
                    latest robotic technologies and end-of-arm tooling, enabling your robots to handle a wider range of 
                    tasks efficiently. Whether you need to optimize material handling, welding, or assembly processes, 
                    our robotic upgrades will bring increased automation, reduced cycle times, and improved product 
                    quality to your production floor.
                </p>
                <h2>Entire Process Automation Upgrade</h2>
                <p>
                    Revolutionize your entire production process with our comprehensive automation upgrade services. 
                    We'll assess your current processes and design a tailored automation solution to maximize efficiency 
                    and throughput. By integrating advanced PLCs, HMIs, robotics, and sensors, we'll transform your 
                    operations into a seamless, data-driven system. Real-time monitoring and control will provide you with 
                    valuable insights, allowing for predictive maintenance, quality assurance, and streamlined production. 
                    Our end-to-end automation upgrades will significantly reduce operational costs, enhance product 
                    consistency, and position your facility for future growth in a rapidly evolving industry.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Upgrades
