import './ServicesList.css'

import auditIcon from '../../assets/audit-icon.svg'
import financialIcon from '../../assets/financial-icon.svg'
import fundsIcon from '../../assets/funds-icon.svg'
import financeRestructIcon from '../../assets/finance-restruct-icon.svg'
import investIcon from '../../assets/invest-icon.svg'
import taxesIcon from '../../assets/taxes-icon.svg'

const ServiceCard = () => {
    const cards = [
        {
            icon: auditIcon,
            title: "Audit & Evaluation",
            description: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            icon: financialIcon,
            title: "Financial Projections",
            description: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            icon: fundsIcon,
            title: "Funds and investments",
            description: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            icon: financeRestructIcon,
            title: "Finance & Restructuring",
            description: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            icon: taxesIcon,
            title: "Taxes & Efficiency",
            description: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            icon: investIcon,
            title: "Investment Banking",
            description: "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        }
    ]
    return (
        <div className='services-grid'>
            {
                cards.map(card => {
                    return (
                        <div key={card.title} className='service-card'>
                            <img src={card.icon}/>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const ServicesList = () => {
    return (
        <div className="services-list">
            <div className='services-list-header'>
            <span className='services-tag'>
                SERVICES
            </span>
                <h1 className='services-list-heading'>
                Get Control Over Your Business <span>I take your finances to the next level</span>
                </h1>
            </div>
            <ServiceCard/>
        </div>
    )
}

export default ServicesList