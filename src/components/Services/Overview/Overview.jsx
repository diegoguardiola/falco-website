import React, { useState } from 'react'
import './Overview.scss'
import {MdOutlinePrecisionManufacturing} from 'react-icons/md'
import {GiMedicines} from 'react-icons/gi'
import {LuPackageOpen} from 'react-icons/lu'
import {PiGearBold} from 'react-icons/pi'
import {FiMonitor} from 'react-icons/fi'
import {BsFillBuildingsFill} from 'react-icons/bs'

import { images } from '../../../images';

import industrialAutomation from '../../../images/services/IndustrialAutomation.jpg'
import pharmaAutomation from '../../../images/industries/pharmaManufacturing.jpg'
import packaging from '../../../images/industries/packaging.jpg'
import partManufacturing from '../../../images/capabilities/partManufacturing.jpg'
import scada from '../../../images/capabilities/scada.jpg'
import buildingAutomation from '../../../images/capabilities/buildingAutoamtion2.jpg'

const imgs = [industrialAutomation, pharmaAutomation, packaging, partManufacturing, scada, buildingAutomation ];


function Overview() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardNumber) => {
    if (expandedCard === cardNumber) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardNumber);
    }
  }

  return (
    <div className='service_overview_card_container'>
        {/*Row 1*/}
        <div className='service_overview_card_row'>
            <div
            className={`service_overview_card ${expandedCard === 1 ? 'expanded' : ''}`}
            style={{ backgroundImage: `url(${imgs[0]})` }}
            onClick={() => toggleCard(1)}
            >
                <MdOutlinePrecisionManufacturing className='services_icon'/>
                <h1>Industrial Automation</h1>
            </div>
            <div
            className={`service_overview_card ${expandedCard === 2 ? 'expanded' : ''}`}
            style={{ backgroundImage: `url(${imgs[1]})` }}
            onClick={() => toggleCard(2)}
            >
                <GiMedicines className='services_icon'/>
                <h1>Pharmaceutical Automation</h1>
            </div>
        </div>
        <div className={`expanded_section ${expandedCard === 1 ? 'show' : ''}`}>
            <h3>Full-Line and Complete Automation</h3>
            <p>
                With extensive experience in a wide array of industries, Falco Automation prides ourselves
                in providing 100% turnkey capability in building customizable industrial Automation
                solutions. Our client-focused team ensures your automation needs are fully supported
                from and build to 24/7 troubleshooting and support.
            </p>
            <p>
                Whether you produce chocolates, package medicines, manufacture sustainable
                products, or more, Falco has the solution for you. Our ISO certified 
                cross-disciplined egineers are trained to simplify and enhance manufaturing 
                processes across a wide range of industries, no matter how complex they are. 
                We are equipped with industry compliant machinery and resoiurces that deliver
                your automation needs from R&D, design and build, programming, troubleshooting,
                or a combination of these. 
            </p>
            <img src={images.completeAutomation} />
            <p>
                Dedicated to fulfilling your integration demands, Falco offers top-notch
                and cutting-edge solutions in design, controls software, laser, and 
                high-precision equipment. Our team has been providing seamless integration
                solutions to our clients by partnering with leading automation manufacturers
            </p>
        </div>
        <div className={`expanded_section ${expandedCard === 2 ? 'show' : ''}`}>
            <h3>Laboratory Robotics</h3>
            <p>
                laboratories are increasingly investing autonomous sample preparation, handling and testing solutions. 
                In an environment where high-quality and efficient processes are required, robots can ensure:
            </p>
            <ul>
                <li>
                    Consistent, accurate, and reliable laboratory behaviors. Robots can operate repetitive tasks at 
                    higher speeds for lengthier periods, thereby increasing quality and productivity. 
                </li>
                <li>
                    Limiting the number of humans through robotics and automation decreases the chances of contamination.
                </li>
                <li>
                    Robots remove the risk of fatigue common at the end of a worker’s shift. Utilizing robots in your 
                    laboratories means workers are protected from toxic or hazardous materials.
                </li>
                <li>
                    A fully automated system avoids shifts and operate around the clock, ensuring the highest possible 
                    productivity at any given time.
                </li>
            </ul>
            <img src={images.pharma} />
            <h3>On-Site Calibration</h3>
            <p>
                Falco’s on-site calibration service is an effective means to minimize downtime. We deploy 
                technicians to your site and perform the same level of calibration received in a laboratory setting minimizing any 
                disruption. Falco offers the following:
            </p>
            <ul>
                <li>
                    Certified field petrologists
                </li>
                <li>
                    Expedited on-site calibration services
                </li>
                <li>
                    Assisting clients on minimizing downtime
                </li>
                <li>
                    More than 20k calibrations performed onsite annually.
                </li>
            </ul>
        </div>
        {/*Row 2*/}
        <div className='service_overview_card_row'>
            <div
            className={`service_overview_card ${expandedCard === 3 ? 'expanded' : ''}`}
            style={{ backgroundImage: `url(${imgs[2]})` }}
            onClick={() => toggleCard(3)}
            >
                <LuPackageOpen className='services_icon'/>
                <h1>Food, Beverage, and Packaging</h1>
            </div>
            <div
            className={`service_overview_card ${expandedCard === 2 ? 'expanded' : ''}`}
            style={{ backgroundImage: `url(${imgs[3]})` }}
            onClick={() => toggleCard(4)}
            >
                <PiGearBold className='services_icon' />
                <h1>Part Manufacturing</h1>
            </div>
        </div>
        <div className={`expanded_section ${expandedCard === 3 ? 'show' : ''}`}>
            <h3>Food</h3>
            <p>
            In the food industry, we design and manufacture automation systems that streamline various processes, such 
            as ingredient handling, mixing, cooking, and packaging. Our solutions ensure adherence to strict hygiene 
            and safety standards while optimizing production speed and reducing waste. From automated sorting and 
            quality control to recipe management systems, our expertise covers the entire spectrum of food processing.
            </p>
            <h3>Beverage</h3>
            <p>
            For the beverage industry, we develop automation solutions that cover everything from beverage production 
            to packaging. Our systems handle tasks like liquid blending, flavoring, carbonation, and pasteurization, 
            ensuring consistent quality and taste. We also excel in creating efficient filling and capping systems that 
            maintain product integrity and prevent contamination, while meeting high production demands.
            </p>
            <h3>Packaging</h3>
            <img src={images.packagingAutomation} />
            <p>
            Our packaging capabilities encompass a wide range of technologies, including automated filling, sealing, 
            labeling, and cartoning. We understand the significance of packaging in both product protection and consumer 
            appeal. Our solutions not only ensure precise and secure packaging but also enable rapid changeovers between 
            different packaging formats. We're proficient in integrating robotics, vision systems, and conveyor systems 
            to create seamless packaging lines.
            </p>

        </div>
        <div className={`expanded_section ${expandedCard === 4 ? 'show' : ''}`}>
            <h2>What Falco Can Do</h2>
            <p>
                Equipped with the best CNC machining and assemblies, Falco has been producing precision manufactured 
                components and assemblies since 2017. Our parts manufacturing, fabrication, and machining team is composed 
                of fully trained professionals who specialize in laser cutting, custom sheet metal fabrication, and welding. 
                Falco will be with you from prototype to full production using the latest technology at Falco HQ.
            </p>
            <img src={images.partManufacturing} />
            <h3>Services We Offer:</h3>
            <ul>
                <li>CNC milling</li>
                <li>CNC turning</li>
                <li>Sheet metal services</li>
                <li>Laser cutting</li>
                <li>Plasma cutting</li>
            </ul>
        </div>
        {/*Row 3*/}
        <div className='service_overview_card_row'>
            <div
            className={`service_overview_card ${expandedCard === 2 ? 'expanded' : ''}`}
            style={{ backgroundImage: `url(${imgs[4]})` }}
            onClick={() => toggleCard(5)}
            >
                <FiMonitor className='services_icon' />
                <h1>SCADA</h1>
            </div>
            <div
            className={`service_overview_card ${expandedCard === 2 ? 'expanded' : ''}`}
            style={{ backgroundImage: `url(${imgs[5]})` }}
            onClick={() => toggleCard(6)}
            >
                <BsFillBuildingsFill className='services_icon' />
                <h1>Building Automation</h1>
            </div>
        </div>
        <div className={`expanded_section ${expandedCard === 5 ? 'show' : ''}`}>
            <h2>SCADA System</h2>
            <p>
                Here at Falco, we offer Supervisory Control and Data Acquisition (SCADA) either in 
                full turnkey installation or by integrating your existing SCADA equipment and software 
                systems. Our experience in implementing effective SCADA Solutions helps your team 
                identify and deploy the most optimal SCADA architecture for your automated industrial 
                processes.
            </p>
            <img src={images.scada} />
            <h3>Falco's SCADA Solutions Have the Following Capabilities</h3>
            <ul>
                <li>Integration of different protocols/controls and different manufacturers</li>
                <li>Advanced and distributed networking</li>
                <li>Custom web, dashboard, and report development</li>
                <li>Easy navigation and user-friendly interface, minimizing navigation time</li>
                <li>Configuration and management of various databases and data storage</li>
                <li>Data collection and visualization</li>
                <li>Local and remote alarming through email, SMS, and voice</li>
                <li>Remote machine and system control and fault handling</li>
                <li>Simplified workflow with minimal operator errors</li>
                <li>Improved equipment performance</li>
                <li>Reduced maintenance costs</li>
            </ul>
        </div>
        <div className={`expanded_section ${expandedCard === 6 ? 'show' : ''}`}>
            <h2>Benefits of Building Automation</h2>
            <p>
                Building automation is heavily reliant on software and warehouse equipment which use data 
                and machine learning to achieve the following:
            </p>
            <img src={images.buildingAutomation} />
            <ul>
                <li>
                    Increased efficiency and maximized production – using automated systems in your facility allows you 
                    to quickly adjust to peak seasons or sudden market shifts
                </li>
                <li>
                    Automation systems are highly accurate and are focused on reducing himan errors
                </li>
                <li>
                    Reduced staff fatigue and injuries and addressing worker mobility issues
                </li>
            </ul>
        </div>  
    </div>
  )
}

export default Overview
