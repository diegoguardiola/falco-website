import React from 'react'
import './Calibration.scss'
import Footer from '../../../../components/Footer/Footer'
import { images } from '../../../../images'


function IndustrialCalibration() {
  return (
    <div className='industrial-calibration-container'>
        <div className='industrial-calibration-header'>
            <h1>Calibration</h1>
        </div>
        <div className='industrial-calibration-body'>
        <div className="side-nav">
            <ul>
                <li><a href="/services/industrial">Back</a></li>
                <li><a href="/services/industrial/startup">Start Up</a></li>
                <li><a href="/services/industrial/upgrades">Upgrades</a></li>
                <li><a href="/services/industrial/fullautomation">Full Automation</a></li>
                <li><a href="/services/industrial/calibration">Calibration</a></li>
                <li><a href="/services/industrial/documentation">Documentation</a></li>
            </ul>
        </div>
            <div className='industrial-calibration-info'>
                <h2>Calibration Services for the Industrial Manufacturing Industry</h2>
                <p>        
                    In the fast-paced and highly regulated world of industrial manufacturing, precision and reliability 
                    are paramount. Ensuring that your measurement and control instruments are accurate is essential to 
                    maintaining product quality, operational efficiency, and compliance with industry standards. That's 
                    where our Calibration Services for the Industrial Manufacturing Industry come in. We offer a comprehensive 
                    range of calibration solutions tailored to meet the unique needs of manufacturers across various sectors. 
                    Our state-of-the-art facilities, expert technicians, and commitment to excellence make us your trusted partner 
                    in instrument calibration. Here's what you can expect from our calibration services:
                </p>
                <img src={images.industrialCalibration1}/>
                <h2>Our Calibration Capabilities</h2>
                <ul>
                    <li><span className='industrial-calibration-info-bold'>Instrument Calibration:</span>
                        We calibrate a wide range of instruments critical to industrial manufacturing processes, including pressure gauges, temperature sensors, flow meters, torque wrenches, and more. Our meticulous calibration procedures ensure that your instruments meet industry-specific accuracy standards.
                    </li>    
                    <li><span className='industrial-calibration-info-bold'>Traceability and Compliance:</span>
                        We maintain strict adherence to international standards and traceability requirements. Our calibration services are NIST (National Institute of Standards and Technology) traceable, and we provide detailed certificates of calibration for each instrument, helping you meet regulatory and quality compliance.
                    </li>
                    <li><span className='industrial-calibration-info-bold'>On-Site Calibration:</span>
                        For your convenience, we offer on-site calibration services, minimizing downtime and disruption to your production processes. Our skilled technicians will visit your facility to perform calibration activities efficiently and professionally.
                    </li>
                    <li><span className='industrial-calibration-info-bold'>Quick Turnaround:</span>
                        We understand the importance of time in manufacturing. Our goal is to provide fast and efficient calibration services, ensuring your instruments are back in operation swiftly.
                    </li>
                    <li><span className='industrial-calibration-info-bold'>Equipment Repair and Adjustment:</span>
                        In addition to calibration, we provide equipment repair and adjustment services to correct any identified issues during the calibration process, further enhancing the performance of your instruments.
                    </li>
                </ul>
            

                <p>
                In the competitive landscape of industrial manufacturing, precision, consistency, and compliance 
                are not negotiable. Partner with us for Calibration Services tailored to your industry, and 
                experience the peace of mind that comes with accurate measurements and reliable instruments. Our 
                commitment to quality and expertise will support your manufacturing operations and help you maintain 
                your competitive edge.
                </p>
                <a href='/contact'>Contact Our Automation Experts</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default IndustrialCalibration
