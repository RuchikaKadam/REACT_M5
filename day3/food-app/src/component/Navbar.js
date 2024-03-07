import './Navbar.css'
import './Button'
import { Button } from './Button';

function Navbar (){
    return (
        <>
            <nav className ="navbar">
                <div>
                    {/* add brand logo and name */}
                    <img src="./.././assets/images/logo-navbar.svg"/>
                    <span>GeekFoods</span>
                </div>
                <div className = "nav-links">
                    <div><span>Home</span></div>
                    <div><span>Quote</span></div>
                    <div><span>Restaurant</span></div>
                    <div><span>Foods</span></div>
                    <div><span>Contact</span></div>
                </div>
                <div>
                    <Button borederRadius={"4px"} backgroundColor={"#1c4ed8"} fontColor={"#FFFFFF"}>Get Started</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;