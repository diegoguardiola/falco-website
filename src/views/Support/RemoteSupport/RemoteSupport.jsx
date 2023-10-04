import React from 'react'
import './RemoteSupport.scss'
import SideNavbar from '../../../components/sideNavbarSupport/SideNavbar'
import ContactUs from '../../../components/ContactUsButton/ContactUs'
import Footer from '../../../components/Footer/Footer'
import { images } from '../../../images'


function RemoteSupport() {
  return (
    <div className='remote-support-container'>
        <div className='remote-support-header'>
            <h1>Remote Support</h1>
        </div>
        <div className='remote-support-body'>
            <div className='industries-side-navbar'> 
                <SideNavbar />
            </div>
            <div className='remote-support-info'>
                <h1>Remote Support Services</h1>
                <p>
                    Falco Automation provides 24/7 remote technical support for your automation equipment whenever you
                    need it. Our technical support team can help resolve issues that arise with your automation 
                    equipment, not matter where you are or time of day.
                </p>
                <p>
                    Falco Automation's remote technical support team has a deep and wide understanding of technologies 
                    as well as how they interface. Our team consists of experienced engineers who can help determine the
                    root cause of an issue and immediately determine the best solution to get your equipment running.
                    When you choose Falco Automation, we are here to support you from day one.
                </p>
                <img 
                    src={images.remoteSupportBody}
                    alt='support worker at workstation'
                />
                <h2>Falco Automation Real Time Service (FRS)</h2>
                <p>
                    Take full advantage of Industry 4.0 technologies with Falco’s Real Time Service. As companies 
                    contend with rising complexity, cost and regulation, more are looking to Industry 4.0 manufacturing 
                    and services as a solution. Smart autonomous factories managed with data and machine learning are
                    lowering manufacturing costs, improving quality, and reducing capacity constraints.
                </p>
                <h4>What We Can Do For You</h4>
                <div className='remote-support-info-bullet'>
                    <div>
                        <ul>
                            <li>Majority of repairs and service are handled remotely</li>
                            <li>Upgradability with your existing equipment</li>
                            <li>The end of long and costly downtimes</li>
                            <li>Advanced analytics for predictive maintenance</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Using data from sensors to identify breakdown patterns</li>
                            <li>Falco’s early warning system reduces production losses and helps prevent expensive repairs</li>
                        </ul>
                    </div>
                </div>
                <h2>Privcing Structure</h2>
                <p>Falco Automation offers flexible options for pricing; from per task to time & materials (T&M).</p>
                <ContactUs />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default RemoteSupport
