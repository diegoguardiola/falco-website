import React from 'react'
import { images } from '../../../images'
import './Industrial.scss'

function Industrial() {
  return (
    <div className='industrial'>
    <h1>Industrial Automation</h1>
        <div className='industrial_1'>
            <h2>Full-Line and Complete Automation</h2>
            <p>
                With extensive experience in a wide array of industries, Falco Automation prides ourselves
                in providing 100% turnkey capability in building customizable industrial Automation
                solutions. Our client-focused team ensures your automation needs are fully supported
                from and build to 24/7 troubleshooting and support.
            </p>
            <div className='industrial_1_1'>
                <p>
                Whether you produce chocolates, package medicines, manufacture sustainable
                products, or more, Falco has the solution for you. Our ISO certified 
                cross-disciplined egineers are trained to simplify and enhance manufaturing 
                processes across a wide range of industries, no matter how complex they are. 
                We are equipped with industry compliant machinery and resoiurces that deliver
                your automation needs from R&D, design and build, programming, troubleshooting,
                or a combination of these. 
                </p>
                <img src={images.plc1}></img>
            </div>
        </div>
        <div className='industrial_2'>
        <h2>System Integration</h2>
            <div className='industrial_2_1'>
                <img src={images.system_integration}></img>
                <div className='industrial_2_1_1'> 
                    <p>
                        Dedicated to fulfilling your integration demands, Falco offers top-notch
                        and cutting-edge solutions in design, controls software, laser, and 
                        high-precision equipment. Our team has been providing seamless integration
                        solutions to our clients by partnering with leading automation manufacturers
                    </p>
                    <p>
                        As a key partner to multiple manufacturing companies in different industries,
                        Falco has delivered central control systems designed to fully automate an
                        entire process while minimizing human errors brough by segregated independnet
                        systems. Our highly capable team can integrate equipment and instruments into
                        an existing manufacturing line.
                    </p>
                </div>
            </div>
        </div>
        <div className='industrial_3'> 
            <h2>Industrial Robotics</h2>
            <div className='industrial_3_1'>
                
                <p>
                    Our state-of-the-art warehouse and our team of engineering experts allow Falco 
                    to design, build, and implement custom robotic systems fully in-house, from concept 
                    to final testing. Falco acknowledges the practical and financial benefits of 
                    industrial robotics, having been able to produce the simplest to most complex robotic 
                    solutions—from a basic robot arm designed to perform a single repetitive task or a 
                    completely autonomous vehicle mounted robot. Falco can help your organization in 
                    producing robots designed to significantly increase your productivity and improve 
                    efficiency, while also reducing operational costs and ensuring your workers’ safety 
                    by minimizing hazards.
                </p>
            </div>
            <img src={images.industrialRobotics}></img>
        </div>
        <div className='industrial_4'> 
            <h2>Start Up and Comissioning</h2>
            <div className='industrial_4_1'>
                <img src={images.comissioning}></img>
                <div className='industrial_4_1_1'>
                    <p>
                        Commissioning your equipment the right way is critical to the success of your 
                        business. Here at Falco, we have the experience and expertise to handle tasks 
                        from building new equipment, extend or modify your existing ones, or re-install 
                        your machines. We understand the importance of accurate commissioning in the 
                        success and sustainability of your operations.
                    </p>
                    <p>
                        Falco evaluates your systems individually and analyze their contributions to your 
                        business processes. A detailed evaluation will allow us to develop a commissioning 
                        plan aimed to keep downtime to a minimum while ensuring you maintain the highest 
                        levels of control and operational standards. From the evaluation, development, and 
                        implementation of this plan, Falco will be your partner along the way.
                    </p>
                </div>
            </div>
            <div className='industrial_4_2'>
                <p>
                      You can trust 
                    that we deliver our services according to the best practices followed globally. With 
                    your business’s maximum efficiency and minimum cost in mind, Falco’s services give you 
                    the confidence that your machinery and equipment are in their best possible shape 
                    post commissioning.
                </p>
                <p>
                    With rapidly advancing machinery, integrating a combination of technologies and 
                    leveraging automation to deliver high-precision, computer-controlled instruments 
                    require field experts who have kept up with these latest developments through 
                    constant training. In addition to that, our team of experts has handled numerous 
                    commissioning projects at some of the top manufacturing facilities across the 
                    globe. You can rest assured that your delicate machines are truly in safe hands.
                </p>
            </div>
        </div>
        <div className='industrial_5'> 
            <h2>SCADA System</h2>
            <div className='industrial_5_1'> 
                <p>
                    Here at Falco, we offer Supervisory Control and Data Acquisition (SCADA) either in 
                    full turnkey installation or by integrating your existing SCADA equipment and software 
                    systems. Our experience in implementing effective SCADA Solutions helps your team 
                    identify and deploy the most optimal SCADA architecture for your automated industrial 
                    processes.
                </p>
                <p>
                    Falco is involved in all phases of a project including but not limited to the master 
                    plan developed based on client requirements, overall system architecture, detailed 
                    system design specifications, graphic and interface design, software development, 
                    hardware configuration, and final system implementation (installation, training, and 
                    fine-tuning).  Our team of engineers not only provide turnkey solutions on various 
                    off-the-shelf SCADA software platforms but are also trained and experienced to identify 
                    the best suited application to fit your individual requirements and your customized 
                    processes and operations.
                </p>
            </div>
            <div className='industrial_5_2'>
                <img src={images.scada}></img>
                <div className='industrial_5_2_1'>
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
            </div>
        </div>

    </div>
  )
}

export default Industrial
