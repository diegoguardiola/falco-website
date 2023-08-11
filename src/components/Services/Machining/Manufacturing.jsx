import React from 'react'
import { images } from '../../../images';
import './Manufacturing.scss'

function Manufacturing() {
  return (
    <div className='manufacturing'>
      <h1>Manufacturing</h1>
      <div className='manufacturing_1'>
        <img src={images.machining1}></img>
        <div className='manufacturing_1_1'>
          <h2>What Falco Can Do</h2>
          <p>
            Equipped with the best CNC machining and assemblies, Falco has been producing precision manufactured 
            components and assemblies since 2017. Our parts manufacturing, fabrication, and machining team is composed 
            of fully trained professionals who specialize in laser cutting, custom sheet metal fabrication, and welding. 
            Falco will be with you from prototype to full production using the latest technology at Falco HQ.
          </p>
          <h4>Services We Offer:</h4>
          <ul>
            <li>CNC milling</li>
            <li>CNC turning</li>
            <li>Sheet metal services</li>
            <li>Laser cutting</li>
            <li>Plasma cutting</li>
          </ul>
        </div> 
      </div>

    </div>
  )
}

export default Manufacturing
