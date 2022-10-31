import Investors from "./investors"
import HeroSection from "./heroSection"
import Innovation from "./innovation"
import Properties from "./properties"
import Socials from './socials'
import Contact from "./contact"
import Footer from '../footer'



function HomePage (){
    return (
        <>
        <HeroSection />
        <Innovation />
        <Investors />
        <Properties />
        <Socials />
        <Contact />
        <Footer/>
        </>
    )
}

export default HomePage