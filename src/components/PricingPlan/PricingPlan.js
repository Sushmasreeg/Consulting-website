import './PricingPlan.css'

const plans = [
    {
        type: "Basic Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: "$35",
        details: [
            "24/7 system monitoring",
            "Security management",
            "Secure finance backup",
            "Remote support"
        ]
    },
    {
        type: "Standard Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: "$56",
        details: [
            "24/7 system monitoring",
            "Security management",
            "Secure finance backup",
            "Remote support"
        ]
    },
    {
        type: "Standard Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: "$75",
        details: [
            "24/7 system monitoring",
            "Security management",
            "Secure finance backup",
            "Remote support"
        ]
    },
]

const PricingCards = () => {
    return (
        <div className='pricing-cards'>
            {
                plans.map(plan => {
                    return (
                        <div key={plan.price} className='price-card'>
                            <div className='price-card-header'>
                                <h2>{plan.type}</h2>
                                <p>{plan.description}</p>
                                <div className='price'>
                                    <h1>{plan.price}</h1>
                                    <span className='services-tag per-month'>
                                        MONTHLY
                                    </span> 
                                </div>
                            </div>
                            <div className='price-card-body'>
                                    {
                                        plan.details.map(detail => {
                                            return (
                                                    <div className='list-item' key={detail}>
                                                        <div>&gt;</div>
                                                        <p>{detail}</p>
                                                    </div>
                                                )
                                        })
                                    }
                            </div>
                            <button className='get-plan-btn'>
                                <h3>Get This Plan</h3>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const PricingPlan = () => {
    return (
        <div className='pricing-plan'>
             <span className='services-tag' style={{
                backgroundColor: "var(--GREEN-PRIMARY)"
             }}>
                PRICING
            </span>
            <h1>Our Pricing Plan</h1>
            <PricingCards/>
        </div>
    )
}

export default PricingPlan