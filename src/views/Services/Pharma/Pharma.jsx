import React from 'react'
import './Pharma.scss'
import SideNavbar from '../../../components/sideNavbarIndustries/SideNavbar'
import ContactUs from '../../../components/ContactUsButton/ContactUs'
import Footer from '../../../components/Footer/Footer'
import { images } from '../../../images'
import { TbRulerMeasure } from 'react-icons/tb';
import { GiChemicalTank } from 'react-icons/gi';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';



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
                <img 
                    src={images.pharmaBody}
                    alt='pahrma manufacturing workers in a clean room using equipment'
                />
                <h2>Our Pharmaceutical Automation Capabilities Include:</h2>
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
                <div className='pharma-capabilities-links'>
                    <div className='pharma-capabilities-links-box'>
                        <a href='/services/pharmaceutical/calibration'>
                            <h4>Calibration</h4>
                            <div className='pharma-icon'>
                                <TbRulerMeasure />
                            </div>
                        </a>
                    </div>
                    <div className='pharma-capabilities-links-box'>
                        <a href='/services/pharmaceutical/bioreactors'>
                            <h4>Bioreactors</h4>
                            <div className='pharma-icon'>
                                <GiChemicalTank />
                            </div>
                        </a>
                    </div>
                    <div className='pharma-capabilities-links-box'>
                        <a href='/services/pharmaceutical/validation'>
                            <h4>Validation</h4>
                            <div className='pharma-icon'>
                                <HiOutlineClipboardDocumentCheck />
                            </div>
                        </a>
                    </div>
                </div>
                <img 
                    src={images.pharmaBody2}
                    alt='an automated line for processing medicine'
                />
                <p>
                    In a sector where precision, reliability, and compliance are non-negotiable, our pharmaceutical automation 
                    services stand as a testament to innovation and excellence. Partner with us to drive efficiency, quality, 
                    and competitiveness in your pharmaceutical manufacturing processes. Together, we'll shape the future of 
                    pharmaceutical automation.
                </p>
                <ContactUs />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Pharma
