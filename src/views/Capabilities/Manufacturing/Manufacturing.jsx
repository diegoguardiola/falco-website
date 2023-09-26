import React from 'react'
import './Manufacturing.scss'
import SideNavbar from '../../../components/sideNavbarCapabilities/SideNavbar'
import Footer from '../../../components/Footer/Footer'
import { images } from '../../../images'


function Manufacturing() {
  return (
    <div className='manufacturing-container'>
        <div className='manufacturing-header'>
            <h1> Manufacturing</h1>
        </div>
        <div className='manufacturing-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='manufacturing-info'>
                <h1>Our Commitment</h1>
                <p>
                    We take pride in being your trusted partner for precision part manufacturing. With a relentless 
                    commitment to quality, state-of-the-art machinery, and a team of seasoned experts, we offer a wide 
                    array of manufacturing capabilities that cater to diverse industries.
                </p>
                <img src={images.manufacturingBody}/>
                <h2>Our Capabilities</h2>
                <ul>
                    <li>
                        <span className='manufacturing-info-bold'>Precision CNC Machining:</span> Our CNC machining centers are equipped with the latest technology, 
                        allowing us to create complex parts with the highest precision and accuracy. Whether you need one 
                        prototype or thousands of production parts, we've got you covered.
                    </li>
                    <li>
                        <span className='manufacturing-info-bold'>Multi-Axis Machining:</span> We excel in multi-axis machining, which enables us to manufacture intricate 
                        components with intricate geometries. Our advanced machinery ensures optimal surface finish and 
                        tolerances.
                    </li>
                    <li>
                        <span className='manufacturing-info-bold'>Materials Expertise:</span> We work with a wide range of materials, including metals, plastics, composites,
                         and more. Our deep understanding of materials allows us to recommend the best choices for your 
                         specific application.
                    </li>
                    <li>
                        <span className='manufacturing-info-bold'>Quality Assurance:</span> Quality is at the core of everything we do. Our quality control measures, 
                        including rigorous inspections and testing, guarantee that every part we manufacture meets or 
                        exceeds industry standards.
                    </li>
                </ul>
                <img src={images.manufacturingBody2}/>
                <h2>Why Choose Falco Automation</h2>
                <ul>
                    <li>
                        <span className='manufacturing-info-bold'>Quality Excellence:</span> We understand the critical importance of quality in manufacturing. Our 
                        quality control processes are stringent and thorough, ensuring that every part meets your exact 
                        specifications.
                    </li>
                    <li>
                        <span className='manufacturing-info-bold'>Expert Personnel:</span> Our team of engineers and machinists are industry experts with years of 
                        experience. They're dedicated to delivering exceptional results and are ready to tackle even 
                        the most challenging projects.
                    </li>
                    <li>
                        <span className='manufacturing-info-bold'>Cost-Efficiency:</span> We optimize our manufacturing processes to provide you with cost-effective 
                        solutions without compromising on quality. Our competitive pricing ensures value for your 
                        investment.
                    </li>
                    <li>
                        <span className='manufacturing-info-bold'>Timely Delivery:</span> We understand the importance of deadlines. With our efficient production 
                        processes, we ensure that your parts are delivered on time, every time.
                    </li>
                </ul>
                <a href='/contact'>Contact Our Automation Experts</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Manufacturing
