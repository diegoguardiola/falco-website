import React from 'react'
import './BuildingAutomation.scss'
import SideNavbar from '../../../components/sideNavbarCapabilities/SideNavbar'
import { images } from '../../../images'


function BuildingAutomation() {
  return (
    <div className='building-automation-container'>
        <div className='building-automation-header'>
            <h1>Building Automation</h1>
        </div>
        <div className='building-automation-body'>
            <div className='building-automation-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='building-automation-info'>
                <h1>What is Building Automation</h1>
                <p>
                    Building Automation (also known as Building Management System or BMS) is a centralized control system 
                    that uses computer technology to monitor and manage various building systems and services. Its primary 
                    goal is to enhance the efficiency, comfort, security, and sustainability of a building or facility by 
                    automating and optimizing the operation of its subsystems. Building automation is commonly used in 
                    commercial, industrial, and residential buildings to control a wide range of systems and processes.
                </p>
                <img src={images.buildingAutomationBody}/>
                <h2>Key Components of Building Automation</h2>
                <ul>
                    <li>
                        Sensors and Actuators: These are the eyes and hands of the system. Sensors, such as temperature 
                        sensors, occupancy sensors, light sensors, and humidity sensors, collect data from the building 
                        environment. Actuators, like motorized valves, dampers, and relays, execute control commands 
                        based on the data received from sensors.
                    </li>
                    <li>
                        Control System: The control system is the brain of the building automation system. It processes 
                        data from sensors and uses it to make decisions and control various building systems. It often 
                        includes a central controller or a Building Management System (BMS) software.
                    </li>
                    <li>
                        Communication Networks: Building automation systems use communication networks to transmit data 
                        and commands between sensors, controllers, and other devices. Common protocols include BACnet, 
                        Modbus, LonWorks, and more recently, Internet of Things (IoT) protocols.
                    </li>
                    <li>
                        HVAC (Heating, Ventilation, and Air Conditioning): HVAC systems are a major focus of building 
                        automation. The BMS can optimize temperature, humidity, and air quality by adjusting heating, 
                        cooling, and ventilation systems based on occupancy, weather conditions, and energy efficiency 
                        goals.
                    </li>
                    <li>
                        Lighting Control: Building automation can manage lighting systems, including dimming, scheduling,
                         and occupancy-based control. This not only improves energy efficiency but also enhances occupant 
                         comfort.
                    </li>
                    <li>
                        Security and Access Control: Building security is often integrated into the BMS. This includes 
                        access control systems, surveillance cameras, alarms, and automated responses to security breaches.
                    </li>
                    <li>
                        Fire and Life Safety Systems: These systems can be integrated with the BMS to monitor and 
                        respond to fire alarms, smoke detection, and emergency evacuation procedures.
                    </li>
                    <li>
                        Energy Management: Building automation systems can track energy usage, optimize energy consumption,
                         and even generate reports for energy management and sustainability purposes.
                    </li>
                </ul>
                <h2>Processes Involved in Building Automation</h2>
                <ul>
                    <li>
                        Data Collection: Sensors collect data from various building systems, including temperature, 
                        humidity, occupancy, lighting levels, and security status.
                    </li>
                    <li>
                        Data Processing: The BMS or control system processes the data and uses algorithms to make decisions 
                        based on predefined rules and user settings.
                    </li>
                    <li>
                        Control and Actuation: The system sends commands to actuators, adjusting the settings of HVAC, 
                        lighting, security, and other subsystems to achieve desired conditions and energy efficiency.
                    </li>
                    <li>
                        Monitoring and Visualization: Building operators and facility managers can monitor the building's 
                        performance through a user-friendly interface. Visualization tools provide real-time data, 
                        historical trends, and alerts for anomalies or system faults.
                    </li>
                    <li>
                        Optimization: Building automation systems continually analyze data and make adjustments to optimize
                         building performance, energy consumption, and occupant comfort.
                    </li>
                    <li>
                        Reporting and Analysis: These systems generate reports and data analytics to help building owners and 
                        operators make informed decisions about energy management, maintenance, and system upgrades.
                    </li>
                </ul>
                <p>
                    Building automation plays a crucial role in modern buildings by enhancing sustainability, reducing 
                    energy costs, improving comfort, and simplifying facility management. It allows for proactive control 
                    and monitoring of building systems, ensuring they operate efficiently and reliably.
                </p>
            </div>
        </div>
    </div>
  )
}

export default BuildingAutomation
