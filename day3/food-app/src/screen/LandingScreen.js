import './LandingScreen.css'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Footer from '../component/Footer'

const LandingScreen = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar/>
            <Hero/>
            <Footer/>
        </>
    )
}

export default LandingScreen;