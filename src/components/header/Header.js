import clockIcon from '../../assets/clock.svg'
import mapIcon from '../../assets/map-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'
import linkedinIcon from '../../assets/linkedin-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
        <div className='header-item'>
            <img alt="Clock" src={clockIcon}/>
            <p>Monday - Friday 8AM - 9PM</p>
        </div>
        <div className='header-item'>
            <img alt="Map" src={mapIcon}/>
            <p>725 Park Ave, New York</p>
        </div>
        <div className='header-item'>
           <div className='ext-link-icons'>
           <img alt="Instagram" src={instagramIcon}/>
           <img alt="Facebook" src={facebookIcon}/>
           <img alt="Twitter" src={twitterIcon}/>
           <img alt="LinkedIn" src={linkedinIcon}/>
            </div>
        </div>
    </div>
    )
}

export default Header