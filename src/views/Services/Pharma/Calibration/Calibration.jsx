import React from 'react'
import './Calibration.scss'
import ContactUs from '../../../../components/ContactUsButton/ContactUs'
import Footer from '../../../../components/Footer/Footer'
import { images } from '../../../../images'


function CalibrationPharma() {
  return (
    <div className='pharma-calibration-container'>
        <div className='pharma-calibration-header'>
            <h1>Pharmaceutical Calibration</h1>
        </div>
        <div className='pharma-calibration-body'>
            <div className="pharma-calibration-side-nav">
                <ul>
                <li><a href="/services/pharmaceutical">Back</a></li>
                    <li><a href="/services/pharmaceutical/calibration">Calibration</a></li>
                    <li><a href="/services/pharmaceutical/bioreactors">Bioreactors</a></li>
                    <li><a href="/services/pharmaceutical/validation">Validation</a></li>
                </ul>
            </div>
            <div className='pharma-calibration-info'>
                <h2>Our Calibration Services</h2>
                <p>
                In the highly regulated and precision-driven pharmaceutical industry, accurate and reliable measurements are paramount. Ensuring the 
                quality, safety, and efficacy of pharmaceutical products hinges on precise instrumentation and equipment. Our Calibration Services 
                for the Pharmaceutical Industry are designed to meet the stringent requirements of this sector, providing comprehensive solutions 
                that guarantee the accuracy of your critical equipment and instruments. With a focus on compliance, precision, and efficiency, we 
                offer a range of calibration services tailored to pharmaceutical manufacturers, research laboratories, and healthcare institutions.
                </p>
                <img 
                    src={images.pharmaCalibration2}
                    alt='measuring of powder on a precision scale'
                />
                <ul>
                    <li><span className='pharma-calibration-info-bold'>Instrument Calibration:</span>
                        We specialize in calibrating a wide array of pharmaceutical instruments, including but not limited to analytical balances, 
                        spectrophotometers, chromatography systems, and pH meters. Our certified technicians ensure that your instruments meet the 
                        highest standards of accuracy and compliance with regulatory guidelines.
                    </li>
                    <li><span className='pharma-calibration-info-bold'>Temperature and Humidity Calibration:</span>
                        Temperature and humidity control are crucial factors in pharmaceutical manufacturing and storage. We provide precise 
                        calibration services for environmental chambers, refrigerators, freezers, and temperature-controlled storage units, helping 
                        you maintain the integrity of temperature-sensitive products.
                    </li>
                    <li><span className='pharma-calibration-info-bold'>Pressure and Flow Calibration:</span>
                        Accurate pressure and flow measurements are essential in processes such as filtration, filling, and packaging. Our calibration 
                        services cover a wide range of pressure and flow instruments, ensuring they operate within specified tolerances to maintain 
                        product quality and safety.
                    </li>
                    <li><span className='pharma-calibration-info-bold'>Validation Services:</span>
                        We offer validation services to help pharmaceutical companies comply with regulatory requirements. Our validation protocols 
                        and reports are comprehensive, assisting you in demonstrating the accuracy and reliability of your critical equipment to 
                        regulatory authorities.
                    </li>
                    <li><span className='pharma-calibration-info-bold'>Documentation and Compliance:</span>
                        We provide detailed calibration certificates and documentation that meet regulatory standards, helping you maintain a robust 
                        record-keeping system. Our services are aligned with cGMP, USP, and other pharmaceutical industry regulations.
                    </li>
                </ul>
                <img 
                    src={images.pharmaCalibration1}
                    alt='a person picking up weighted standards for calibration'
                />
                <p>
                    In the pharmaceutical industry, precision and compliance are non-negotiable. Trust our Calibration Services for the Pharmaceutical 
                    Industry to keep your operations running smoothly, your products safe, and your reputation intact. Contact us today to discuss your 
                    calibration needs and schedule a consultation.
                </p>
                <ContactUs />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default CalibrationPharma
