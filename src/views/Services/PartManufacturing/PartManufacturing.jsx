import React from 'react'
import './PartManufacturing.scss'
import SideNavbar from '../../../components/sideNavbarIndustries/SideNavbar'
import Footer from '../../../components/Footer/Footer'
import { images } from '../../../images'


function PartManufacturing() {
  return (
    <div className='part-manufacturing-container'>
        <div className='part-manufacturing-header'>
            <h1>Part Manufacturing</h1>
        </div>
        <div className='part-manufacturing-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='part-manufacturing-info'>
                <h1>Part Manufacturing Services by Falco Automation</h1>
                <p>
                    At Falco Automation, we offer a comprehensive range of advanced part manufacturing services that cater to diverse 
                    industry needs. Our state-of-the-art facilities and cutting-edge technology ensure precision and efficiency 
                    in every component we produce. Our services include:
                </p>
                <img src={images.partManufacturingBody}/>
                <h2>Our Capabilities</h2>
                <h4>Multi-Axis CNC Milling</h4>
                <p>
                    Our multi-axis CNC milling capabilities enable us to create intricate and complex parts with unparalleled 
                    precision. Whether you require prototypes or high-volume production, our CNC milling expertise guarantees 
                    top-notch results.
                </p>
                <h4>Laser Cutting</h4>
                <p>
                    With our advanced laser cutting equipment, we excel in producing parts with clean edges, minimal material 
                    waste, and high-speed processing. Our laser cutting services are ideal for various materials, including 
                    metals and plastics.
                </p>
                <h4>Coordinate Measuring Machine (CMM) Inspection</h4>
                <p>
                    Quality is our priority. Our CMM inspection services ensure that each manufactured part meets the most 
                    stringent tolerances and quality standards. We use cutting-edge metrology tools to guarantee the accuracy 
                    of your components.
                </p>
                <h4>Tube Bending</h4>
                <p>
                    Our tube bending capabilities allow us to create custom tubing solutions for a wide range of applications. 
                    Whether you need complex shapes or precise angles, our tube bending services deliver durability and functionality.
                </p>
                <h4>Lathes and Turning</h4>
                <p>
                    Our precision lathes and turning machines are equipped to manufacture cylindrical parts with exceptional accuracy. 
                    From small components to large-scale production runs, we can meet your turning needs efficiently.
                </p>

                <img src={images.partManufacturingBody2}/>
                <p>
                    At Falco Automation, our commitment to excellence in part manufacturing is unwavering. We take pride in our ability 
                    to deliver high-quality components that meet your specifications, no matter how intricate or demanding. Contact us 
                    today to discuss your project requirements and experience the unmatched expertise of our part manufacturing services. 
                    Your success is our priority.
                </p>
                <a href='/contact'>Contact Our Automation Experts</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PartManufacturing
