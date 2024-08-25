import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
        <p className="footer-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis tempora, voluptatem </p>
            <div className="links">
           <i> <FaFacebook /></i>
            <i><FaInstagramSquare /></i>
           <i> <FaGoogle/></i>
            </div>
        </div>
            <ul className="ul">
                   <p>Home</p><br/><br/>
                    <a>Booking</a><br/><br/>
                    <a>Facilities</a><br/><br/>
                    <a>Location</a><br/><br/>
                    <a>Contact</a><br/><br/>
            </ul>
            <ul className="ul ">
                <p>	
                    Help</p><br/><br/>
                    <a>About Us</a><br/><br/>
                    <a>Help center</a><br/><br/>
                    <a>Privacy policy</a><br/><br/>
                    <a>FAQs</a>
            </ul>
            <ul className="ul">
                <p>Get the app</p><br/><br/>
                <a>iOS app</a><br/><br/>
                <a>Android app</a><br/>
            </ul>
            </footer>
    );
};
export default Footer;