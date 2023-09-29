import React from 'react'
import './Pharma.scss'
import SideNavbar from '../../../components/sideNavbarIndustries/SideNavbar'
import Footer from '../../../components/Footer/Footer'
import { images } from '../../../images'


function Pharma() {
  return (
    <div className='pharma-container'>
        <div className='pharma-header'>
            <h1>Pharmaceutical Services</h1>
        </div>
        <div className='pharma-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='pharma-info'>
                <h1>How Falco Automation Serves Pharmaceutical Industry</h1>
                <p>
                    At Falco Automation, we are at the forefront of providing cutting-edge automation solutions tailored to the unique needs of the pharmaceutical 
                    industry. With a deep understanding of the stringent regulatory requirements, safety standards, and the ever-evolving landscape of pharmaceutical 
                    manufacturing, we offer a comprehensive suite of services to optimize your processes, enhance product quality, and ensure compliance.
                </p>
                <img src={images.pharmaBody}/>
                <h4>Our Pharmaceutical Automation Capabilities Include:</h4>
                <ul>
                    <li>
                        <span className='pharma-info-bold'>Process Automation:</span> 
                        Our state-of-the-art automation systems are designed to streamline your pharmaceutical manufacturing processes, ensuring precision, consistency, 
                        and efficiency. We provide automation solutions for everything from drug formulation and mixing to granulation, tablet pressing, and packaging.
                    </li>
                    <li>
                        <span className='pharma-info-bold'>Validation and Compliance:</span> 
                        We recognize the critical importance of compliance in the pharmaceutical sector. Our team of experts specializes in the validation of automated 
                        systems, ensuring that they meet regulatory standards such as GMP (Good Manufacturing Practices) and 21 CFR Part 11. We assist in documentation, 
                        qualification, and system validation to facilitate regulatory approval.
                    </li>
                    <li>
                        <span className='pharma-info-bold'>Data Integrity:</span> 
                        Data integrity is paramount in pharmaceuticals. Our automation solutions incorporate robust data management and security features, safeguarding 
                        the integrity of critical data generated during production processes. This ensures complete traceability and auditability.
                    </li>
                    <li>
                        <span className='pharma-info-bold'>Cleanroom Automation:</span> 
                        We specialize in designing and implementing automation solutions for cleanroom environments, minimizing human intervention, and reducing 
                        contamination risks. Our systems are engineered to meet the strictest cleanroom standards.
                    </li>
                    <li>
                        <span className='pharma-info-bold'>Quality Control and Inspection:</span>
                        Our automation services extend to quality control and inspection processes, incorporating vision systems and sensors to detect defects and ensure 
                        product quality. We help you maintain the highest standards in pharmaceutical production.
                    </li>
                </ul>
                <img src={images.pharmaBody2}/>
                <h2>Our Capabilities</h2>
                <div className='pharma-capabilities-links'>
                    <div className='pharma-capabilities-links-box'>
                        <a href='/services/pharmaceutical/calibration'>
                            <h4>Calibration</h4>
                        </a>
                    </div>
                    <div className='pharma-capabilities-links-box'>
                        <a href='/services/pharmaceutical/bioreactors'>
                            <h4>Bioreactors</h4>
                        </a>
                    </div>
                    <div className='pharma-capabilities-links-box'>
                        <a href='/services/pharmaceutical/validation'>
                            <h4>Validation</h4>
                        </a>
                    </div>
                </div>

                <h2>Why Choose Falco Automation?</h2>
                
                <a href='/contact'>Contact Our Automation Experts</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Pharma
