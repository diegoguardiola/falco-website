import './OverviewSupport.scss'
import {BiSupport} from 'react-icons/bi'
import {BiWrench} from 'react-icons/bi'
import {BiServer} from 'react-icons/bi'

import remoteSupport from '../../../images/support/technical_support_services.jpg'
import fieldServices from '../../../images/support/overview-field-service.jpeg'
import systemUpgrades from '../../../images/support/overview-system-upgrades.jpg'


const imgs = [remoteSupport, fieldServices, systemUpgrades];


function Overview() {


  return (
    <div className='service_overview_card_container'>
        {/*Row 1*/}
        <div className='service_overview_card_row'>  
            <a href="/support/remotesupport" className= 'service_overview_card' style={{ backgroundImage: `url(${imgs[0]})` }}>
                <BiSupport className='services_icon'/>
                <h1>Remote Technical Support</h1>
            </a>
            <a href="/support/fieldservice" className= 'service_overview_card' style={{ backgroundImage: `url(${imgs[1]})` }}>
                <BiWrench className='services_icon'/>
                <h1>Field Services</h1>
            </a>
        </div>
        {/*Row 2*/}
        <div className='service_overview_card_row'>
            <a href="/support/systemupgrades" className='service_overview_card' style={{ backgroundImage: `url(${imgs[2]})` }}>
                <BiServer className='services_icon'/>
                <h1>System Upgrades</h1>
            </a>
        </div>
    </div>
  )
}

export default Overview
