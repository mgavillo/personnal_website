import React, {useEffect, useState} from "react";
import "./Header.css";
import lottie from "lottie-web";
import nightSwitch from './Design/switch.json';
import { Link } from "react-router-dom";
let switchAnim;

const Header = (props) => {

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

    const switchAnimationEnd = () => {
        props.setShift(0);
        props.setNight(props.night * -1);
    }

    return(
        <nav id="headerWrapper" onAnimationEnd={switchAnimationEnd} nightShift={props.shift} night={props.night}>
            <Link to="/" className="headerText" night={props.night}>Marie Gavillon</Link>
            <div id="headerContent">
                <Link to="/CV" draggable='false' className="headerText" night={props.night}>CV</Link>
                <Link to="/Portofolio" className="headerText" night={props.night} >Portofolio</Link>
                <Link to="/Gallery" className="headerText" night={props.night}>Gallery</Link>
                <Link to="/Contact" className="headerText" night={props.night}>Contact</Link>
            </div>
            <div id="nightSwitch" onClick={onSwitchClick}></div>
        </nav>
    );
}
export default Header;