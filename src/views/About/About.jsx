import React from 'react'
import './About.scss'
import { images } from '../../images/'
import Footer from '../../components/Footer/Footer'

function About() {
  return (
    <div className='about-container'>
        <div className='about-header'>
            <h1>About Falco Automation</h1>
        </div>
        <div className='about-header-image'>
            <img src={images.aboutUsHeader1}/>
        </div>
        <div className='about-overview'>
            <div className='about-overview-text'>
                <p>
                    Falco Automation is an engineering consulting and service provider based in Sacramento, California 
                    focused on automation solutions. We develop and implement solutions for a wide range of industries 
                    whether it be project based, field service, design, or system upgrades. Since 2017 our teams of 
                    experienced engineers have helped hundreds of clients with their automation needs.
                    
                </p>
                <h2>Our Services</h2>
                <p>
                    At Falco Automation, we pride ourselves in 
                    Our goal is to increase the efficiency and productivity of your business with world-class solutions.
                </p>
                <ul className='about-menu'>
                    <li><a href="/aerospace">Aerospace</a></li>
                    <li><a href="/foodandbeverage">Food & Beverage</a></li>
                    <li><a href="/pharmamanufacturing">Pharmaceutical Manufacturing</a></li>
                    <li><a href="/industrialautomation">Industrial Automation</a></li>
                    <li><a href="/partmanufacturing">Part Manufacturing</a></li>
                    <li><a href="/packaging">Packaging</a></li>
                </ul>
            </div>
            <div className='about-map'>
                <img className='about-map-img' src={images.aboutUsMap}/>
            </div>
        </div>
        <div className='about-automation-impact'> 
            <h1>Our Impact In the World of Automation</h1>
            <div className='about-automation-impact-info'>
                <div className='about-automation-impact-info-article'>
                    <p>
                        Specializing in automation services, Falco Automation has swiftly become a best-in-class automation solution
                        provider for clients across a number of manufacturing sectors. Through the implementation of cutting-edge topRobotics
                        and highly skilled specialists to support these systems, Falco continues to meet the ever-increasing need among
                        manufacturers to apply industrial automation technologies into their manufacturing processes.
                    </p>
                    <p>
                        Falco has risen to the top of the industrial automation space not only because of the company's ability to develop superior
                        solutions that vastly improve manufacturing efficiencies but it's machines are specifically built and programmed to handle 
                        the unique needs of each client. Thge professionals behind Falco's propriety robotics are also a key component to the firm's 
                        solid position within the industry
                    </p>
                    <p>
                        Falco Automation provides state-of-the-art automation solutions and services to multiple industry sectors, including consumer 
                        products pharmaceutical, automotive, and aerospace, among others. 
                    </p>
                    <p>
                        Concurrently, as an OEM and integrator firm, Falco Automation designs and builds custom equipment including robotic arms, 
                        with vision systems and proprietary AI software, assembly lines, packing solutions, palletizers, and SCADA systems, among others. 
                        The company also works as a servicing and equipment rebuild firm to help its clients upgrade and automate their existing equipment.
                    </p>
                    <p>
                        Falco's highly competent compliance professionals enable the firm to consistently maintain the varied standards put forth by the 
                        range of markets the company serves. In addition, Falco's R&D team thoroughly assesses every client's specific demand and performs 
                        excessive research to develop the most cost-effective, flexible, and advanced solution. 
                    </p>
                    <p>
                        Falco Automation is growing its North American footprint as the company is openinbg new engineering and service offices in Denver 
                        along with plans to open a new manufacturing facility in Houston. Falco plans to establish facilities in countries across the globe. 
                        From a portfolio standpoint, the company is perfectly poised to build new products and services that can push the boundaries of 
                        industrial automation and transform the way manufacturing processes are performed. Another key objective in the company's roadmap 
                        is to simplify industrial automation in the U.S. to drive cost-efficient manufacturing processes and boost the U.S. economy.
                    </p>
                </div>
                <div className='about-automation-impact-info-images'>
                    <img className='haig' src={images.haig}/>
                    <p className='haig-quote'>
                        "Unlike most automation companies, we have diffderent departments with unmatched engineering capabilities 
                        specialized to design products aligning with all our client's needs."
                    </p>
                    <img className='award' src={images.topRobotics}/>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About
