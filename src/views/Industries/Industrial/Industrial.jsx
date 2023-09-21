import React from 'react'
import './Industrial.scss'
import SideNavbar from '../../../components/sideNavbarIndustries/SideNavbar'
import { images } from '../../../images'


function Industrial() {
  return (
    <div className='industrial-container'>
        <div className='industrial-header'>
            <h1>Industrial Manufacturing</h1>
        </div>
        <div className='industrial-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='industrial-info'>
                <h1>What Is Industrial Manufacturing Automation</h1>
                <p>
                    Industrial manufacturing automation refers to the use of control systems, machinery, and 
                    information technologies to handle different processes and tasks in an industry that previously 
                    required human intervention. The primary aim of industrial automation is to increase production 
                    efficiency, quality, and reliability while reducing costs, errors, and manual interventions.
                </p>
                <img src={images.industrialBody}/>
                <h2>Key Components of Industrial Automation</h2>
                <ul>
                    <li>
                        Control Systems: These include Programmable Logic Controllers (PLCs), Distributed Control 
                        Systems (DCS), and Supervisory Control and Data Acquisition (SCADA) systems, which manage and 
                        monitor industrial processes in real-time.
                    </li>
                    <li>
                        Robotic Systems: Robots are used for various tasks such as welding, assembly, pick and place, 
                        painting, and more.
                    </li>
                    <li>
                        Sensors and Actuators: Sensors monitor conditions such as temperature, pressure, or position, 
                        while actuators perform actions based on the information received from the control systems.
                    </li>
                    <li>
                        Industrial Internet of Things (IIoT): This represents devices, vehicles, buildings, and other 
                        items embedded with electronics, software, and sensors connected to collect and exchange data.
                    </li>
                    <li>
                        Machine-to-Machine (M2M) Communication: Allows devices and machines to communicate and make 
                        decisions without human intervention.
                    </li>
                    <li>
                        Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM): Software tools that aid in 
                        the design and manufacturing processes.
                    </li>
                    <li>
                        Manufacturing Execution Systems (MES): Computerized systems that track and document the 
                        manufacturing process.
                    </li>
                    <li>
                        Enterprise Resource Planning (ERP): Integrates manufacturing processes with other business 
                        functions such as inventory management, finance, and customer relationship management.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Industrial
