import askExpertIcon from '../../assets/ask-expert-icon.svg'
import callIcon from '../../assets/call-icon.svg'


import './NavBar.css'

export const AskExpertHeading = () => {
    return (
        <div className='ask-expert-heading'>
            <img alt="Ask experts" src={askExpertIcon}/>
            <h2 style={{
                color: "var(--WHITE-PRIMARY)"
            }}>AskExperts</h2>
        </div>
    )
}

const NavItems = () => {
    const navItems = ["Home", "Pages", "Services", "Work", "Contact"]
    return (
        <nav className='nav-items-bar'>
        {
        navItems.map(item => {
            return <span key={item} className='nav-item'>
                <img alt={item} className='nav-item-fill'/>
                <a key={item}>{item}</a>
            </span>
        })
    }
            </nav>
    )
}

const CallButton = () => {
    return (
        <button className='call-button'>
            <img src={callIcon}/>
            <p>+ (888) 452 1505</p>
        </button>
    )
}

const NavBar = () => {
    return (
        <div className='navbar'>
            <AskExpertHeading/>
            <NavItems/>
            <CallButton/>
        </div>
    )
}

export default NavBar