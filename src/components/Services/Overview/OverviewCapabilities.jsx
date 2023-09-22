import './OverviewCapabilities.scss'
import {PiGearBold} from 'react-icons/pi'
import {BsFillBuildingsFill} from 'react-icons/bs'
import {FiMonitor} from 'react-icons/fi'
import {LuCombine} from 'react-icons/lu'
import {TbRulerMeasure} from 'react-icons/tb'
import {MdOutlineDesignServices} from 'react-icons/md'



import manufacturing from '../../../images/capabilities/overview-manufacturing.jpg'
import buildingAutomation from '../../../images/capabilities/overview-buildingAutomation.jpg'
import scada from '../../../images/capabilities/overview-scada.png'
import systemIntegration from '../../../images/capabilities/overview-systems-integration.jpg'
import calibration from '../../../images/capabilities/overview-calibration.jpg'
import mechDesign from '../../../images/capabilities/overview-mech-design.jpg'

const imgs = [manufacturing, buildingAutomation, scada, systemIntegration, calibration, mechDesign ];


function Overview() {


  return (
    <div className='service_overview_card_container'>
        {/*Row 1*/}
        <div className='service_overview_card_row'>  
            <a href="/manufacturing" className= 'service_overview_card' style={{ backgroundImage: `url(${imgs[0]})` }}>
                <PiGearBold className='services_icon'/>
                <h1>Manufacturing</h1>
            </a>
            <a href="/pharmamanufacturing" className= 'service_overview_card' style={{ backgroundImage: `url(${imgs[1]})` }}>
                <BsFillBuildingsFill className='services_icon'/>
                <h1>Building Automation</h1>
            </a>
        </div>
        {/*Row 2*/}
        <div className='service_overview_card_row'>
            <a href="/scada" className='service_overview_card' style={{ backgroundImage: `url(${imgs[2]})` }}>
                <FiMonitor className='services_icon'/>
                <h1>SCADA</h1>
            </a>
            <a href="/systemintegration" className='service_overview_card' style={{ backgroundImage: `url(${imgs[3]})` }}>
                <LuCombine className='services_icon' />
                <h1>System Integration</h1>
            </a>
        </div>
        {/*Row 3*/}
        <div className='service_overview_card_row'>
            <a href="/calibration" className='service_overview_card' style={{ backgroundImage: `url(${imgs[4]})` }}>
                <TbRulerMeasure className='services_icon' />
                <h1>Calibration</h1>
            </a>
            <a href="/mechdesign" className='service_overview_card' style={{ backgroundImage: `url(${imgs[5]})` }}>
                <MdOutlineDesignServices className='services_icon' />
                <h1>Mechanical Design</h1>
            </a>
        </div>
    </div>
  )
}

export default Overview
