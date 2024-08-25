import { FaLaptop } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
const Sec4 = () => {
    return(
        <div className="sec4">
        <div className="sec4-1">
            <p className="sec4-head">We provide you aur best Facilities</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque repudiandae est odit inventore iure accusantium modi consectetur. Itaque adipisci aliquam nisi mollitia magni quidem magnam neque commodi ratione exercitationem.</p>
            <button>Contact Now</button>
        </div>
        <div className="services">
            <div className="service1">
            <div className="icon">
            <FaLaptop className="i"/><br/>
                <p>Private Workspace</p>
            </div>
            <div className="icon">
            <FaParking className="i" /><br/>
                <p>Parking Area</p>
            </div>
            <div className="icon">
            <MdFreeBreakfast className="i" /><br/>
               <p>Breakfast</p>
            </div>
            <div  className="icon">
            <FaWifi className="i" /><br/>
               <p> Free Wifi</p>
            </div>
            </div>
            <div className="service2">
            <div  className="icon">
            <AiOutlineThunderbolt  className="i" /><br/>
              <p>  Free Electricity</p>
            </div>
            <div className="icon">
            <MdPool className="i" /><br/>
               <p> Swimming pool</p>
            </div>
            <div className="icon">
            <FaDumbbell className="i" /><br/>
               <p> Exercise Space</p>
            </div>
            <div className="icon">
            <BsThreeDots className="i" /><br/>
              <p>  Other Service</p>
            </div>
            </div>
            </div>
        </div>
    );
};
export default Sec4;