import './Contact.css'
import {ReactComponent as CallIcon} from '../../assets/call-icon-yellow.svg'
import {ReactComponent as ClockIcon} from '../../assets/clock-green.svg'
import {ReactComponent as MapIcon} from '../../assets/map-icon-black.svg'

const ContactDetails = () => {
    const items = [
        {
            title: "Call Today",
            details: "+1 800 100 900",
            icon: <CallIcon/>,
            bgColor: "#FFECBB"
        },
        {
            title: "Monday To Friday",
            details: "9AM - 5PM",
            icon: <ClockIcon/>,
            bgColor: "#A4EDA4",
        },
        {
            title: "USA Office",
            details: "195 Devonshire St Boston, MA 02110",
            icon: <MapIcon/>,
            bgColor: "#EAEAEA",
        },
    ]
    return (
        <div className='contact-item'>
            {
                items.map(item => {
                    return (
                        <div key={item.title}>
                            <span className='contact-img' style={{
                                backgroundColor: item.bgColor
                            }}>
                            {item.icon}
                            </span>
                            <div className='contact-item-detail'>
                                <p>{item.title}</p>
                                <h3>{item.details}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const ContactForm = () => {
    const formItems = [
        {
            label: "Full Name",
            placeholder: "john david",
            name: "FULL_NAME",
            type: "input"
        },
        {
            label: "Email",
            placeholder: "consult@mail.com",
            name: "EMAIL",
            type: "email"
        },
        {
            label: "Phone",
            placeholder: "+008 654 231",
            name: "PHONE",
            type: "phone"
        },
        {
            label: "Company (Optional)",
            placeholder: "yourcompany.com",
            name: "COMPANY",
            type: "input"
        },
    ]
    return ( 
        <form className='contact-form'>  
        <div className='input-items'>
            {
                formItems.map(item => {
                    return (
                    <div key={item.label} className='input-item'>
                            <label htmlFor={item.name}>{item.label}</label>
                            {
                                item.type === 'textarea' ? 
                                    <textarea type='textarea' rows={10} placeholder={item.placeholder}/> :
                                    <input name={item.name} id={item.name} type={item.type} placeholder={item.placeholder}/>
                            }
                    </div>
                    )
                })
            }
                 </div>
            <div className='textarea'>
                <label htmlFor="MESSAGE">Message</label>
                <textarea type='textarea' rows={10} placeholder="Briefly tell us about your project and your current goals. How can we help you?"/>
            </div>
             <button>Send Message</button>
        </form>
    )
}

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-details'>
            <span className='services-tag'>
                PROCESS
            </span>
            <h1>Contact Us. It's Easy.</h1>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
            <ContactDetails/>
            </div>
            <ContactForm/>
        </div>
    )
}

export default Contact