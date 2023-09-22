import React from 'react'
import './FieldServices.scss'
import SideNavbar from '../../../components/sideNavbarSupport/SideNavbar'
import { images } from '../../../images'


function FieldServices() {
  return (
    <div className='field-services-container'>
        <div className='field-services-header'>
            <h1>Field Services</h1>
        </div>
        <div className='field-services-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='field-services-info'>
                <img src={images.fieldServicesBody1}/>
                <h2>Emergency Field Services</h2>
                <p>
                    Our automation company specializes in providing top-notch emergency field services to ensure the 
                    uninterrupted operation of your automated systems. When unexpected breakdowns or critical issues 
                    arise, our highly trained technicians are available 24/7 to respond swiftly to your call. Our 
                    emergency field services include:
                </p>
                <ul>
                    <li>
                        Rapid Troubleshooting: Our skilled technicians are equipped with state-of-the-art diagnostic 
                        tools to quickly identify and assess the root cause of the issue, minimizing downtime.
                    </li>
                    <li>
                        On-Site Repairs: We dispatch our experts to your location with the necessary parts and equipment 
                        to perform on-site repairs efficiently, getting your systems back up and running as soon as possible.
                    </li>
                    <li>
                        Emergency Parts Procurement: If a specialized part is needed, our team can source it rapidly 
                        to reduce delays and ensure a smooth repair process.
                    </li>
                    <li>
                        Emergency Maintenance Plans: We offer customized emergency maintenance plans that prioritize 
                        your critical systems, reducing the risk of future emergencies and optimizing system reliability.
                    </li>
                </ul>

                <h2>Preventative Maintenance</h2>
                <p>
                    Proactive care is the key to extending the lifespan and maximizing the efficiency of your automation 
                    systems. Our automation company offers comprehensive preventative maintenance field services tailored 
                    to your specific needs. Our preventative maintenance services include:
                </p>
                <ul>
                    <li>
                        Scheduled Inspections: We develop a maintenance schedule based on your system's requirements, 
                        conducting regular inspections to identify potential issues before they become major problems.
                    </li>
                    <li>
                        Parts Replacement: Worn or aging parts are replaced proactively to prevent unexpected failures 
                        and costly downtime.
                    </li>
                    <li>
                        Software Updates: We keep your automation system's software up to date with the latest improvements 
                        and security patches.
                    </li>
                    <li>
                        Performance Optimization: Through careful analysis and adjustments, we optimize your systems 
                        for energy efficiency and productivity.
                    </li>
                    <li>
                        Documentation and Reporting: Detailed reports are provided after each maintenance visit, outlining 
                        the work performed, the condition of your systems, and recommendations for future improvements.
                    </li>
                </ul>
                <p>
                    By investing in preventative maintenance field services, you can significantly reduce the risk of 
                    unplanned downtime, increase the lifespan of your automation systems, and lower operational costs in 
                    the long run. Our goal is to help you achieve the highest level of reliability and efficiency for your 
                    automated processes.
                </p>
            </div>
        </div>
    </div>
  )
}

export default FieldServices
