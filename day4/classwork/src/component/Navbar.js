import './Navbar.css'
import './Button'
import { Button } from './Button';
import logo from './../assets/images/logo_navbar.svg';

function Navbar (){
    return (
        <>
            <nav className ="navbar">
                <div className='vertical-centre' style={{gap:"1rem"}}>
                    {/* add brand logo and name */}
                    <img src={logo} alt="GeekFoods Logo"/>
                    <span>GeekFoods</span>
                </div>

                <div className = 'nav-links vertical-centre'>
                    <div><span>Home</span></div>
                    <div><span>Quote</span></div>
                    <div><span>Restaurant</span></div>
                    <div><span>Foods</span></div>
                    <div><span>Contact</span></div>
                </div>

                <div className='vertical-centre'>
                    <Button borderRadius={"10px"} backgroundColor={"#1c4ed8"} fontColor={"#FFFFFF"}>Get Started</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;