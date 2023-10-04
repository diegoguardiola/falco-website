import React from 'react'
import './Validation.scss'
import ContactUs from '../../../../components/ContactUsButton/ContactUs'
import Footer from '../../../../components/Footer/Footer'
import { images } from '../../../../images'


function PharmaValidation() {
  return (
    <div className='pharma-validation-container'>
        <div className='pharma-validation-header'>
            <h1>Validation</h1>
        </div>
        <div className='pharma-validation-body'>
        <div className="pharma-validation-side-nav">
            <ul>
                <li><a href="/services/pharmaceutical">Back</a></li>
                <li><a href="/services/pharmaceutical/validation">Calibration</a></li>
                <li><a href="/services/pharmaceutical/bioreactors">Bioreactors</a></li>
                <li><a href="/services/pharmaceutical/validation">Validation</a></li>
            </ul>
        </div>
            <div className='pharma-validation-info'>
                <h2>Validation Services for the Pharmaceutical Industry</h2>
                <p>
                    In the highly regulated pharmaceutical industry, ensuring the safety, efficacy, and quality of pharmaceutical products is paramount. Our Validation 
                    Services offer comprehensive solutions designed to support pharmaceutical manufacturers in complying with regulatory requirements and maintaining the 
                    highest standards of product integrity. 
                </p>
                <h2>Our Expertise:</h2>
                <ul>
                    <li><span className='pharma-validation-info-bold'>Instrument Calibration:</span>
                        We specialize in calibrating a wide array of pharmaceutical instruments, including but not limited to analytical balances, 
                        spectrophotometers, chromatography systems, and pH meters. Our certified technicians ensure that your instruments meet the 
                        highest standards of accuracy and compliance with regulatory guidelines.
                    </li>
                    <li><span className='pharma-validation-info-bold'>Equipment Qualification:</span>
                        We provide rigorous equipment qualification services, including Installation Qualification (IQ), Operational Qualification (OQ), and Performance 
                        Qualification (PQ). Our team ensures that all manufacturing and laboratory equipment meet regulatory standards and perform consistently.
                    </li>
                    <li><span className='pharma-validation-info-bold'>Process Validation:</span>
                        Our process validation services encompass Process Performance Qualification (PPQ) and ongoing monitoring to verify that manufacturing processes 
                        consistently produce products meeting predetermined specifications. We help optimize processes for efficiency and quality.
                    </li>
                    <li><span className='pharma-validation-info-bold'>Computer System Validation:</span>
                        In an increasingly digital pharmaceutical landscape, computer systems validation is critical. We validate software and computer systems used in 
                        production, quality control, and data management, ensuring data integrity and compliance with 21 CFR Part 11.
                    </li>
                    <li><span className='pharma-validation-info-bold'>Facility and Utility Validation:</span>
                        Our team validates pharmaceutical facilities and utilities, such as HVAC systems, cleanrooms, and water purification systems, to ensure they meet 
                        regulatory requirements and maintain product integrity.
                    </li>
                </ul>
                <img 
                    src={images.pharmaValidation1}
                    alt='validation technician performing tests on a system'
                />
                <h2>Why Choose Falco Automation's Validation Services:</h2>
                <ul>
                    <li><span className='pharma-validation-info-bold'>Regulatory Compliance:</span>
                        We have extensive knowledge of FDA, EMA, and other global regulatory requirements, helping you stay compliant and avoid costly regulatory issues.
                    </li>
                    <li><span className='pharma-validation-info-bold'>Experienced Team:</span>
                        Our validation experts have years of experience in the pharmaceutical industry and stay updated on the latest regulatory changes and industry best practices.
                    </li>
                    <li><span className='pharma-validation-info-bold'>Customized Solutions:</span>
                        We tailor our validation services to your specific needs, whether you are a large pharmaceutical manufacturer or a smaller biotech company.
                    </li>
                    <li><span className='pharma-validation-info-bold'>Documentation:</span>
                        We provide comprehensive documentation, including validation protocols, reports, and regulatory submissions, to support your compliance efforts.
                    </li>
                </ul>
                <p>
                    Our Validation Services to help you navigate the complex landscape of pharmaceutical regulations, ensuring that your products consistently meet quality standards and regulatory expectations, thus safeguarding patient health and your company's reputation.
                </p>
                <ContactUs />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PharmaValidation
