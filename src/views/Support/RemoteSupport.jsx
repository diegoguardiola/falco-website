import React from 'react'
import './RemoteSupport.scss'
import SideNavbar from '../../components/sideNavbarSupport/SideNavbar'
import { images } from '../../images'


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
                <h1></h1>
                <p>
                    
                </p>
                <img src={images.remoteSupportBody}/>
                <h2></h2>

            </div>
        </div>
    </div>
  )
}

export default RemoteSupport
