import React from 'react'
import { images } from '../../../images';
import './Pharma.scss'

function Pharma() {
  return (
    <div className='pharma'>
      <h1>Pharmaceutical Automation</h1>
      <div className='pharma_1'>
        <h2>Full-line and Complete Automation</h2>
        <p>
            Whether it’s for a single step of the process or through an entire workflow, automation solutions 
            have been proven beneficial for companies across the pharmaceutical industry especially in terms of 
            quality and productivity gains. Since its inception, Falco has been a trusted partner for leading 
            clinical and nonclinical contract research organizations (CRO), as well as drug and medical equipment 
            manufacturers with facilities within the United States, Asia, the Middle East, and Europe.
        </p>
      </div>
      <div className='pharma_2'>
        <img src={images.labRobotics}></img>
        <div className='pharma_2_1'>
            <h2>Laboratory Robotics</h2>
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
        </div>
      </div>
      <div className='pharma_3'>
        <div className='pharma_3_1'>
            <h2>On-Site Calibration</h2>
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
        <img src={images.labCalibration}></img>
      </div>
    </div>
  )
}

export default Pharma
