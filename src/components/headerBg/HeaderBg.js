import './HeaderBg.css'

const HeaderBg = () => {
   return <div className="header-bg-img">
        <div className='header-bg-div'>
            <span className='services-tag' style={{
                backgroundColor: "var(--YELLOW-PRIMARY)",
                color: "var(--BLACK-PRIMARY)"
            }}>SERVICES</span>
            <h1>Creative Services To 
                <span style={{
                    display: "block"
                }}>Boost Your Business Growth</span>
            </h1>
        </div>
    </div>
}

export default HeaderBg