import React from 'react'
import './About.scss'
import { images } from '../../images/'

function About() {
  return (
    <div className='about-container'>
        <div className='about-header'>
            <h1>About Falco Automation</h1>
        </div>
        <div className='about-header-image'>
            <img src={images.aboutUsHeader}/>
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
            
        </div>
    </div>
  )
}

export default About
