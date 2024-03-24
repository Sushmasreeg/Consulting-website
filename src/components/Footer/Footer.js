import './Footer.css'
import { AskExpertHeading } from '../NavBar/NavBar'
import instagramIcon from '../../assets/instagram-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'
import linkedinIcon from '../../assets/linkedin-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'

const FooterItems = () => {
    const items = {
        Product: [
            "Service", "FAQ", "Single Service", "Get Quote", "Prices"
        ],
        Company: [
            "About", "News", "Contacts", "Testimonials", "Our Team", "Our Approach" 
        ]
    }
    return (
        <div className='footer-items'>
            {
                Object.keys(items).map(item => {
                    return (
                        <div key={item} className='footer-item'>
                            <h2>{item}</h2>
                            {
                                items[item].map(listItem => {
                                    return <li key={listItem}>{listItem}</li>
                                })
                            }
                        </div>
                    )
                })
                
            }
            <div className='footer-item'>
            <h2>Address</h2>
            <span>
            1700 W Blancke St, kiyev 
port south USA, America
            </span>
            <button>
            Book an Appoinment
            </button>
            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-list'>
                <div className='footer-header'>
                <AskExpertHeading/>
                <div className='ext-link-icons'>
           <img alt="Instagram" src={instagramIcon}/>
           <img alt="Facebook" src={facebookIcon}/>
           <img alt="Twitter" src={twitterIcon}/>
           <img alt="LinkedIn" src={linkedinIcon}/>
            </div>
                </div>
          
                <FooterItems/>
                <div>

                </div>
            </div>
            <span className='copyright'>©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy</span>

        </div>
     
    )
}

export default Footer