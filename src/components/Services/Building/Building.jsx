import React from 'react'
import './Building.scss'
import { images } from '../../../images';

function Building() {
  return (
    <div className='building'>
        <h1>Building Automation</h1>
        <div className='building_1'>
            <h2>Benefits of Building Automation</h2>
            <p>
                Building automation is heavily reliant on software and warehouse equipment which use data 
                and machine learning to achieve the following:
            </p>
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
            <img src={images.buildingAutomation2}></img>
        </div>
    </div>
  )
}

export default Building
