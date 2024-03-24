import bankingIcon from '../../assets/banking-icon.svg'
import gearIcon from '../../assets/gear-icon.svg'
import tradingIcon from '../../assets/trading-icon.svg'
import processImg from '../../assets/process-bg.svg'
import patternImg from '../../assets/pattern-bg.svg'
import './Process.css'

const ProcessList = () => {
    const items = [
        {
            icon: bankingIcon,
            title: "Banking and Finance",
            description: "Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas."
        },
        {
            icon: gearIcon,
            title: "Logistic and Transportation",
            description: "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes."
        },
        {
            icon: tradingIcon,
            title: "Trading",
            description: "Uniquely matrix economically sound value through cooperative technology parallel task fully researched data and enterprise."
        },

    ]
    return (
        <div className='process-list-items'>
            {
                items.map(item => {
                    return (
                    <div key={item.title} className='process-item'>
                        <img src={item.icon}/>
                        <div className='process-list-desc'>
                            <h3>{item.title}</h3>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

const Process = () => {
    return (
        <div className="process">
            <div className='process-img-container'>
                <div className='green-bg-container'></div>
                <img className="process-img" alt="processBg" src={processImg}/>
                <img className="pattern-img" alt="patternBg" src={patternImg}/>
            </div>
            <div className='process-list'>
            <span className='services-tag'>
                PROCESS
            </span>
            <h1>
            Our Consuting Service Development
            </h1>
            <ProcessList/>
            </div>
        </div>
    )
}

export default Process