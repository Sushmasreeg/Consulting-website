import Contact from "../../components/Contact/Contact"
import NavBar from "../../components/NavBar/NavBar"
import PricingPlan from "../../components/PricingPlan/PricingPlan"
import Header from "../../components/header/Header"
import HeaderBg from "../../components/headerBg/HeaderBg"
import Process from "../../components/process/Process"
import ServicesList from "../../components/servicesList/ServicesList"
import Footer from "../../components/Footer/Footer"

const Services = () => {
    return (
        <>
        <Header/>
        <NavBar/>
        <HeaderBg/>
        <ServicesList/>
        <Process/>
        <PricingPlan/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Services