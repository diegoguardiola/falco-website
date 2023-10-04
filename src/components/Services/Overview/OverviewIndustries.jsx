import './OverviewIndustries.scss'
import {FaFighterJet} from 'react-icons/fa'
import {GiMedicines} from 'react-icons/gi'
import {LuPackageOpen} from 'react-icons/lu'
import {PiGearBold} from 'react-icons/pi'
import {FiMonitor} from 'react-icons/fi'
import {MdOutlinePrecisionManufacturing} from 'react-icons/md'

import aerospace from '../../../images/capabilities/Aerospace-Engineering.jpg'
import pharmaAutomation from '../../../images/services/Pharma/pharmaHeader.jpg'
import packaging from '../../../images/industries/packaging.jpg'
import partManufacturing from '../../../images/capabilities/partManufacturing.jpg'
import foodAndBev from '../../../images/capabilities/FoodandBev.jpg'
import industrialAutomation from '../../../images/capabilities/industrial-automation.jpg'

const imgs = [aerospace, pharmaAutomation, packaging, partManufacturing, foodAndBev, industrialAutomation ];


function Overview() {


  return (
    <div className='service_overview_card_container'>
        {/*Row 1*/}
        <div className='service_overview_card_row'>  
            <a href="/services/aerospace" className= 'service_overview_card' style={{ backgroundImage: `url(${imgs[0]})` }}>
                <FaFighterJet className='services_icon'/>
                <h1>Aerospace</h1>
            </a>
            <a href="/services/pharmaceutical" className= 'service_overview_card' style={{ backgroundImage: `url(${imgs[1]})` }}>
                <GiMedicines className='services_icon'/>
                <h1>Pharmaceutical Manufacturing</h1>
            </a>
        </div>
        {/*Row 2*/}
        <div className='service_overview_card_row'>
            <a href="/services/packaging" className='service_overview_card' style={{ backgroundImage: `url(${imgs[2]})` }}>
                <LuPackageOpen className='services_icon'/>
                <h1>Packaging</h1>
            </a>
            <a href="/services/partmanufacturing" className='service_overview_card' style={{ backgroundImage: `url(${imgs[3]})` }}>
                <PiGearBold className='services_icon' />
                <h1>Part Manufacturing</h1>
            </a>
        </div>
        {/*Row 3*/}
        <div className='service_overview_card_row'>
            <a href="/services/foodandbeverage" className='service_overview_card' style={{ backgroundImage: `url(${imgs[4]})` }}>
                <FiMonitor className='services_icon' />
                <h1>Food and Beverage</h1>
            </a>
            <a href="/services/industrial" className='service_overview_card' style={{ backgroundImage: `url(${imgs[5]})` }}>
                <MdOutlinePrecisionManufacturing className='services_icon' />
                <h1>Industrial Automation</h1>
            </a>
        </div>
    </div>
  )
}

export default Overview
