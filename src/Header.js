import React, {useEffect, useState} from "react";
import "./Header.css";
import lottie from "lottie-web";
import nightSwitch from './Design/switch.json';
import { Link } from "react-router-dom";
let switchAnim;

const Header = () => {
    const [night, setNight] = useState(true);
    const [shift, setShift] = useState(0);

    useEffect(() => {
        switchAnim = lottie.loadAnimation({
            container: document.querySelector("#nightSwitch"),
            animationData: nightSwitch,
            autoplay: false,
            loop: false,
            name: "lottie_ground",
          });
        switchAnim.setSpeed(1);
    }, [])

    const onSwitchClick = () => {
        night === true ? switchAnim.setSpeed(1) : switchAnim.setSpeed(-1);
        switchAnim.play();
        setShift(1);
    }

    const switchAnimationEnd = () => {
        setShift(0);
        setNight(!night);
    }

    return(
        <nav id="headerWrapper" onAnimationEnd={switchAnimationEnd} nightShift={shift} className={night ? "aller" : "retour"} style={{backgroundColor:`${night === true ? "midnightblue" : "lightblue"}`, color:`${night === true ? "white" : "midnightblue"}`}}>
            <Link to="/" className="headerText">Marie Gavillon</Link>
            <div id="headerContent">
                <Link to="/CV" draggable='false' className="headerText" >CV</Link>
                <Link to="/Portofolio" className="headerText">Portofolio</Link>
                <Link to="/Gallery" className="headerText">Gallery</Link>
                <Link to="/Contact" className="headerText">Contact</Link>
            </div>
            <div id="nightSwitch" onClick={onSwitchClick}></div>
        </nav>
    );
}
export default Header;