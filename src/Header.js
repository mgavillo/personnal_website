import React, {useEffect, useState} from "react";
import "./Header.scss";
import lottie from "lottie-web";
import nightSwitch from './Design/switch.json';
import { Link } from "react-router-dom";
let switchAnim;

const Header = (props) => {
    const [toggle, setToggle] = useState(false);
    console.log(props.night)
    const switchClass = `${props.night === 1 ? "dark" : "light"} ${props.shift == 1 ? "shifting" : ""}`

    useEffect(() => {
        switchAnim = lottie.loadAnimation({
            container: document.querySelector("#nightSwitch"),
            animationData: nightSwitch,
            autoplay: false,
            loop: false,
            name: "lottie_ground",
          });
    }, [])

    const onSwitchClick = () => {
        props.night === 1 ? switchAnim.setSpeed(1) : switchAnim.setSpeed(-1);
        switchAnim.play();
        props.setShift(1);
    }

    const switchAnimationEnd = (e) => {
        if(e.target.id === "headerWrapper"){
            props.setShift(0);
            props.setNight(props.night * -1);
        }
    }

    const handleClick = () => {
        console.log(toggle)
        setToggle(!toggle)
    }
    return(
        <nav id="headerWrapper" onAnimationEnd={switchAnimationEnd} className={switchClass}>
            <div className="AWrapper">
                <Link to="/" className="headerText" night={props.night}>Marie Gavillon</Link>
            </div>
            <div id="headerContent" className={toggle ? `responsive ${switchClass}` :""}>
                <div className="AWrapper">
                    <Link to="/CV" draggable='false' className="headerText" night={props.night}>CV</Link>
                </div>
                <div className="AWrapper">
                    <Link to="/Portofolio" className="headerText" night={props.night}>Portofolio</Link>
                </div>
                <div className="AWrapper">
                    <Link to="/Gallery" className="headerText" night={props.night}>Gallery</Link>
                </div>
                <div id="contactWrapper">
                    <Link to="/Contact" className="headerText" night={props.night}>Contact</Link>
                </div>
                <div id="nightSwitch" onClick={onSwitchClick}></div>
                <div className="hamburger" onClick={handleClick}>
                    {/* <i className="fa fa-bars"></i> */}
                </div>
            </div>
        </nav>
    );
}
export default Header;