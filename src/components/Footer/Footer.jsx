import { Link } from 'react-router-dom';
import { images } from '../../images'
import { 
    BsTwitter, BsLinkedin, BsFacebook, BsInstagram,
    BsFillTelephoneFill, BsEnvelopeFill, BsMapFill, 
} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import { TbBuildingFactory2 } from 'react-icons/tb';
import './Footer.scss'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    };

    const openGoogleMapsDirections = () => {
        const destinationAddress = encodeURIComponent('2689 Citrus Rd Suite D, Rancho Cordova, CA 95742');
        const googleMapsURL = `https://www.google.com/maps/dir/?api=1&destination=${destinationAddress}`;
        window.open(googleMapsURL, '_blank');
      };

  return (
    <div className='information_container'>
        <div className='row_1'>
            <img className='logo' src={images.logo} alt='Falco Automation Logo'/>
            <p>
                Developing a custom automation and controls solution that will meet and exceed your expectations.
            </p>
            <div className='app__social'>
                <div >
                    <a href="" target="_blank">
                    <BsTwitter className='icon'/>
                    </a>
                </div>
                <div className='icon'> 
                    <a href="https://www.linkedin.com/company/falco-automation-llc/" target="_blank">
                     <BsLinkedin className='icon'/>
                    </a>
                </div>
                <div className='icon'>
                    <a href="" target="_blank">
                        <BsFacebook className='icon'/>
                    </a>
                </div>
                <div className='icon'>
                    <a href="" target="_blank">
                        <BsInstagram className='icon'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='phone_row'>
            <div className='row_2'>
                <Link className='link-style' to="/services/welcome" onClick={scrollToTop}>Services</Link>
                <Link className='link-style' to="/contact" onClick={scrollToTop}>Contact</Link>
                <p className='menu_item'>Case Studies</p>
                <p className='menu_item'>News & Events</p>
                <p className='menu_item'>Falco Training</p>
            </div>
            <div className='row_3'>
                <p className='menu_item'>Security</p>
                <p className='menu_item'>Privacy Policy</p>
                <p className='menu_item'>Terms and Conditions</p>
                <p className='menu_item'>FAQ</p>
            </div>
        </div>
        <div className='row_4'>
            <p className='menu_item'>
                <BsFillTelephoneFill /> +1 (650) 449-9011
            </p>
            <a href="mailto:sales@falcoautomation.com" className="menu-item">
                <BsEnvelopeFill /> sales@falcoautomation.com
            </a>
            <p className='menu_item' onClick={openGoogleMapsDirections}>
                <TbBuildingFactory2 /><span className='menu_item-bold'> Manufacturing</span> Sacramento, CA
            </p>
            <p className='menu_item' onClick={openGoogleMapsDirections}>
                <TbBuildingFactory2 /><span className='menu_item-bold'> Manufacturing</span> Houston, TX
            </p>
            <p className='menu_item' onClick={openGoogleMapsDirections}>
                <HiOutlineOfficeBuilding /><span className='menu_item-bold'> Headquarters</span> 2689 Citrus Rd Suite D, Rancho Cordova, CA 95742
            </p>
            <p className='menu_item' onClick={openGoogleMapsDirections}>
                <MdOutlineDesignServices /><span className='menu_item-bold'> Design Office</span> Turin, Italy
            </p>
        </div>
    </div>
  )
}

export default Footer
