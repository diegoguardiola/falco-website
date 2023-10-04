import React from 'react'
import './Documentation.scss'
import ContactUs from '../../../../components/ContactUsButton/ContactUs'
import Footer from '../../../../components/Footer/Footer'
import { images } from '../../../../images'


function IndustrialDocumentation() {
  return (
    <div className='industrial-documentation-container'>
        <div className='industrial-documentation-header'>
            <h1>Documentation</h1>
        </div>
        <div className='industrial-documentation-body'>
        <div className="industrial-documentation-side-nav">
            <ul>
                <li><a href="/services/industrial">Back</a></li>
                <li><a href="/services/industrial/startup">Start Up</a></li>
                <li><a href="/services/industrial/upgrades">Upgrades</a></li>
                <li><a href="/services/industrial/fullautomation">Full Automation</a></li>
                <li><a href="/services/industrial/calibration">Calibration</a></li>
                <li><a href="/services/industrial/documentation">Documentation</a></li>
            </ul>
        </div>
            <div className='industrial-documentation-info'>
                <h2>Our Documentation Capabilities</h2>
                <p>        
                    In the fast-paced world of industrial manufacturing, efficient documentation is essential for 
                    ensuring product quality, compliance with regulations, and seamless operations. Our Industrial 
                    Manufacturing Documentation Services are tailored to meet the unique needs of your manufacturing 
                    facility, providing comprehensive solutions that drive productivity and ensure compliance.
                </p>
                <img 
                    src={images.industrialDocumentation1}
                    alt='a stack of papers, glasses, and a laptop'
                />
                <h2>Our Documentation Capabilities</h2>
                <ul>
                    <li><span className='industrial-documentation-info-bold'>Technical Writing:</span>
                        Our team of experienced technical writers specializes in creating clear and concise documentation, including operation manuals, maintenance guides, and assembly instructions. We ensure that your documentation is user-friendly and compliant with industry standards.
                    </li>    
                    <li><span className='industrial-documentation-info-bold'>Quality Control Documentation:</span>
                        We assist in developing quality control procedures and documentation to ensure that your products meet the highest quality standards. Our documentation helps you maintain consistency and traceability in your manufacturing processes.
                    </li>
                    <li><span className='industrial-documentation-info-bold'>Regulatory Compliance:</span>
                        Staying compliant with industry regulations and standards is crucial in industrial manufacturing. Our experts are well-versed in regulatory requirements and can help you create documentation that ensures compliance.
                    </li>
                    <li><span className='industrial-documentation-info-bold'>Training Materials:</span>
                        We develop training materials, including e-learning modules and training manuals, to facilitate the onboarding and ongoing training of your manufacturing staff. Well-trained employees are essential for safe and efficient operations.
                    </li>
                    <li><span className='industrial-documentation-info-bold'>Safety Documentation:</span>
                        Safety is paramount in industrial manufacturing. We create safety manuals, hazard communication documents, and safety data sheets (SDS) to ensure that your facility adheres to the highest safety standards.
                    </li>
                    <li><span className='industrial-documentation-info-bold'>CAD Drawings and Schematics:</span>
                        Our services extend to creating detailed CAD drawings and schematics, providing a visual representation of your manufacturing processes, equipment layouts, and product designs.
                    </li>
                </ul>
                <p>
                    At Falco Automation, we understand the unique challenges of the industrial manufacturing industry. Our Documentation 
                    Services are designed to help you meet these challenges head-on, ensuring that your manufacturing operations run smoothly, 
                    efficiently, and in full compliance with industry standards. Contact us today to discuss how we can tailor our services to 
                    meet your specific needs.
                </p>
                <ContactUs />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default IndustrialDocumentation
