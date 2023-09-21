import React from 'react'
import './Pharma.scss'
import SideNavbar from '../../../components/sideNavbarIndustries/SideNavbar'
import { images } from '../../../images'


function Pharma() {
  return (
    <div className='pharma-container'>
        <div className='pharma-header'>
            <h1>Pharmaceutical Manufacturing</h1>
        </div>
        <div className='pharma-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='pharma-info'>
                <h1>What Is Pharmaceutical Manufacturing Automation</h1>
                <p>
                    Pharmaceutical manufacturing automation refers to the use of technology, software, and 
                    integrated systems to control, monitor, and optimize the processes involved in the 
                    production of pharmaceutical products. The goal of this automation is to increase efficiency, 
                    reduce errors, ensure consistent product quality, and maintain compliance with stringent 
                    regulatory requirements. Here are the key components and benefits of pharmaceutical manufacturing 
                    automation:
                </p>
                <img src={images.pharmaBody}/>
                <h2>Components of Automation</h2>
                <ul>
                    <li>
                        Control Systems: These include programmable logic controllers (PLCs), distributed control 
                        systems (DCS), and supervisory control and data acquisition (SCADA) systems. They manage and 
                        monitor equipment and processes in real-time.
                    </li>
                    <li>
                        Process Analytical Technology (PAT): An integrated system for designing, analyzing, and 
                        controlling manufacturing processes through timely measurements of critical quality and 
                        performance attributes.
                    </li>
                    <li>
                        Robotic Systems: Robots are used for repetitive tasks such as filling, capping, packaging, and 
                        palletizing.
                    </li>
                    <li>
                        Manufacturing Execution Systems (MES): These are computerized systems used to track and 
                        document the transformation of raw materials into finished goods, ensuring traceability and 
                        record integrity.
                    </li>
                    <li>
                        Enterprise Resource Planning (ERP) Systems: Integrates various business processes and functions
                         across an enterprise into a unified system.
                    </li>
                </ul>
                <h2>Benefits of Automation</h2>
                <p>
                    Automation in pharmaceutical manufacturing offers several benefits: It ensures consistent product 
                    quality by minimizing manual interventions and errors; boosts efficiency with continuous operation 
                    leading to increased production; although there's a high initial investment, it results in long-term 
                    cost savings from reduced labor and fewer mistakes; provides flexibility in reprogramming for varied 
                    tasks; enhances safety by handling hazardous materials; aids in maintaining regulatory compliance through 
                    detailed records; and allows real-time monitoring for immediate process adjustments.
                </p>
                <h2>Conclusion</h2>
                <p>
                    Pharmaceutical manufacturing automation is a growing field, driven by the increasing complexity of 
                    pharmaceutical products, the need for precision and consistency, and the stringent regulatory requirements 
                    of the industry. The advancements in Industry 4.0, the Industrial Internet of Things (IIoT), and artificial 
                    intelligence are expected to further enhance automation in the pharmaceutical sector.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Pharma
