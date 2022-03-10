import React, {useState, useRef, useEffect} from "react";
// import { useSpring, animated } from 'react-spring';
// import { setQuaternionFromProperEuler } from "three/src/math/MathUtils";
import "../App.scss"
import "./Contact.scss"

const setProp = (ref, prop, value) => ref.current.style.setProperty(prop, value) 

export default function Contact(props){
    const [cardActive, setCardActive] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        setProp(ref, '--dx', '0deg');
        setProp(ref, '--dy', '0deg');
    }, []);

    const onMouseMove = (e) =>{
        // if(cardActive){
            let width = ref.current.offsetWidth
		    let XRel = e.pageX - ref.current.offsetLeft
		    let YRel = e.pageY - ref.current.offsetTop
		
		    let YAngle = -(0.5 - (XRel / width)) * 40; 
		    let XAngle = (0.5 - (YRel / width)) * 40;
            // console.log(XAngle,Math.sqrt(XAngle * XAngle ))
            setProp(ref, '--dx', `${XAngle}deg`)
            setProp(ref, '--dy', `${YAngle}deg`)
            setProp(ref, '--dp', `${Math.sqrt(XAngle * XAngle ) + Math.sqrt(YAngle * YAngle ) / 2}%`)
        // }
    };

    const onPointerOut = (e) =>{
        setProp(ref, '--dx', '0deg')
        setProp(ref, '--dy', '0deg')
        setProp(ref, '--dp', '0%')
        setCardActive(false)
    };
    
    const onMouseEnter = () =>{
        setCardActive(true);
    }

    return(
    <div id="ContactPage" class="background" night={props.night} nightShift={props.shift}>
        <h1>Send me a postcard</h1>
        <div ref={ref}
            className="card"
            onMouseMove={onMouseMove}
            onMouseLeave={onPointerOut}
            onMouseEnter={onMouseEnter}
        >
            <div className="cardContent">
                <div>Hello there !<br/>I'm looking for a freelancer to help me with : </div>
                {/* <input className="largeInput" type="text"></input> */}
                <textarea className="largeInput input" night={props.night} ></textarea>

                <div>You can reach me at <input type="text" className="input" night={props.night}></input></div>
                <div>Xoxo, <input type="text" className="input" night={props.night}></input></div>
                <div className="buttonWrapper">
                    <a className="cardButton">SEND</a>
                </div>
            </div>
            <div className="verticalDivider" style={{backgroundColor: "mediumturquoise" , height:"80%" , width:"1px", borderRadius:"5px"}}></div>
            {/* <hr style={{backgroundColor:"mediumturquoise"}}/> */}
            <div className="cardTo">
                <div style={{height:"30%", width:"100%", display:"flex", justifyContent:"flex-end"}}>
                    <div className="Img" style={{height:"100%", width:"25%", backgroundColor:"blue", marginRight:"20px"}}></div>
                </div>
                <div style={{width:"100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
                    <div>marie.gavillon@gmail.com</div>
                    <div className="horizontallDivider" style={{backgroundColor: "mediumturquoise" , height:"1px" , width:"80%", borderRadius:"5px"}}></div>
                </div>
                <div className="horizontallDivider" style={{backgroundColor: "mediumturquoise" , height:"1px" , width:"80%", borderRadius:"5px"}}></div>
                <div className="horizontallDivider" style={{backgroundColor: "mediumturquoise" , height:"1px" , width:"80%", borderRadius:"5px"}}></div>

            </div>
        </div>
        <h2>or pm me !</h2>
    </div>
    );
}