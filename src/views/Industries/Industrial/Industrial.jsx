import React from 'react'
import './Industrial.scss'
import SideNavbar from '../../../components/sideNavbarIndustries/SideNavbar'
import Footer from '../../../components/Footer/Footer'
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
                        <span className='industrial-info-bold'>Control Systems:</span> These include Programmable Logic Controllers (PLCs), Distributed Control 
                        Systems (DCS), and Supervisory Control and Data Acquisition (SCADA) systems, which manage and 
                        monitor industrial processes in real-time.
                    </li>
                    <li>
                        <span className='industrial-info-bold'>Robotic Systems:</span> Robots are used for various tasks such as welding, assembly, pick and place, 
                        painting, and more.
                    </li>
                    <li>
                        <span className='industrial-info-bold'>Sensors and Actuators:</span> Sensors monitor conditions such as temperature, pressure, or position, 
                        while actuators perform actions based on the information received from the control systems.
                    </li>
                    <li>
                        <span className='industrial-info-bold'>Industrial Internet of Things (IIoT):</span> This represents devices, vehicles, buildings, and other 
                        items embedded with electronics, software, and sensors connected to collect and exchange data.
                    </li>
                    <li>
                        <span className='industrial-info-bold'>Machine-to-Machine (M2M) Communication:</span> Allows devices and machines to communicate and make 
                        decisions without human intervention.
                    </li>
                    <li>
                        <span className='industrial-info-bold'>Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM):</span> Software tools that aid in 
                        the design and manufacturing processes.
                    </li>
                    <li>
                        <span className='industrial-info-bold'>Manufacturing Execution Systems (MES):</span> Computerized systems that track and document the 
                        manufacturing process.
                    </li>
                    <li>
                        <span className='industrial-info-bold'>Enterprise Resource Planning (ERP):</span> Integrates manufacturing processes with other business 
                        functions such as inventory management, finance, and customer relationship management.
                    </li>
                </ul>
                <img src={images.industrialBody2}/>
                <p>
                    Falco Automation specializes in industrial manufacturing and can offer a wide range of services to 
                    enhance productivity, efficiency, and precision within manufacturing processes. We, they may provide 
                    custom automation system design, tailoring solutions to meet the unique needs of specific industries 
                    and production facilities. This includes the development of automated machinery, robotics, and control 
                    systems that streamline operations and reduce human intervention.
                </p>
                <a href='/contact'>Contact Our Automation Experts</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Industrial
