import React from 'react'
import './Pharmaceutical.scss'
import ContactUs from '../../../../components/ContactUsButton/ContactUs'
import Footer from '../../../../components/Footer/Footer'
import { images } from '../../../../images'


function PackagingPharma() {
  return (
    <div className='packaging-pharma-container'>
        <div className='packaging-pharma-header'>
            <h1>Pharmaceutical Packaging</h1>
        </div>
        <div className='packaging-pharma-body'>
            <div className="packaging-pharma-side-nav">
                <ul>
                    <li><a href="/services/packaging">Back</a></li>
                    <li><a href="/services/packaging/food">Food</a></li>
                    <li><a href="/services/packaging/pharmaceutical">Pharmaceutical</a></li>
                    <li><a href="/services/packaging/palletization">Palletization</a></li>
                </ul>
            </div>
            <div className='packaging-pharma-info'>
                <h2>Pharmaceutical Packaging Services & Solutions</h2>
                <p>
                    At Falco Automation, we understand the critical importance of pharmaceutical packaging in maintaining the integrity, safety, and efficacy of your life-saving 
                    products. Our cutting-edge automation solutions are tailored to meet the unique needs and regulatory requirements of the pharmaceutical industry. Here's how 
                    we can help you ensure precision and reliability in your pharmaceutical packaging processes:
                </p>
                <img 
                    src={images.packagingPharmaBody1}
                    alt='glass bottles enter a conveyor system'
                />
                <ul>
                    <li><span className='packaging-pharma-info-bold'>High-Precision Packaging:</span>
                        We offer advanced packaging machinery and automation systems designed to handle pharmaceutical products with the utmost precision, ensuring accurate filling, capping, labeling, and sealing of vials, bottles, blister packs, and more.
                    </li>
                    <li><span className='packaging-pharma-info-bold'>Compliance and Quality:</span>
                        Our services adhere to the highest industry standards and regulatory requirements, including cGMP (current Good Manufacturing Practices) and FDA guidelines. We prioritize quality control and validation to guarantee the safety and consistency of your pharmaceutical products.
                    </li>
                    <li><span className='packaging-pharma-info-bold'>Customized Packaging Solutions:</span>
                        Every pharmaceutical product is unique, and our team specializes in designing custom packaging solutions to accommodate various product sizes, shapes, and packaging formats. We can adapt our automation systems to your specific needs.
                    </li>
                    <li><span className='packaging-pharma-info-bold'>Serialization and Track-and-Trace:</span>
                        Ensuring the authenticity and traceability of pharmaceutical products is paramount. We provide serialization and track-and-trace solutions to help you comply with serialization regulations and safeguard your supply chain.
                    </li>
                    <li><span className='packaging-pharma-info-bold'>Packaging Validation:</span>
                        We assist in the validation process, including IQ (Installation Qualification), OQ (Operational Qualification), and PQ (Performance Qualification), to ensure that your packaging equipment consistently meets quality and compliance standards.
                    </li>
                    <li><span className='packaging-pharma-info-bold'>Efficiency and Cost Savings:</span>
                        Our automation solutions optimize packaging processes, reduce human error, and minimize product wastage. This leads to improved operational efficiency and cost savings over time.
                    </li>
                    <li><span className='packaging-pharma-info-bold'>Remote Monitoring and Support:</span>
                        We offer remote monitoring and support services, enabling real-time diagnostics and maintenance to minimize downtime and ensure uninterrupted production.
                    </li>
                </ul>
                <img 
                    src={images.PackagingPharmaBody2}
                    alt='close up shot of pill packaging machine'
                />
                <p>
                At Falco Automation, we prioritize the safety, quality, and efficiency of pharmaceutical packaging. With our expertise and cutting-edge automation solutions, you can trust us to safeguard your pharmaceutical products and maintain your reputation for excellence in the industry. Contact us today to discuss how we can tailor our services to meet your specific pharmaceutical packaging needs.
                </p>
                <ContactUs />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PackagingPharma
