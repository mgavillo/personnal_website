import React, {useEffect, useState, useRef} from "react"
import "./Portofolio.scss"
import "../flex.scss"
// import {ReactCommponent as Arrow} from '../Design/arrow.svg';

const Arrow = <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 14H0L10 0L20 14H14L10 9L6 14Z" fill="white"/>
            </svg>
const setProp = (ref, prop, value) => ref.current.style.setProperty(prop, value);

const slides = ["https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
"https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg",
"https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg",
"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
"https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg"];

const imgHeight= 400;
const imgWidth=590;
const Slide = (props) => {
    // console.log(index);
    console.log(`${props.index}`)
    return(
        <li style={{perspectiveOrigin: "150% 150%",
            transformStyle :"preserve-3d"}} key={`${props.index}`}>
        <img key ={`image${props.index}`} alt="" className={props.current === props.index ? "currentImg" : "otherImg"}
            style={{display:"block", width:"auto", height:`${imgHeight}px`, padding:"20px 20px", 
            perspective: "20px", transform: "scaleZ(3) translateZ(50px) rotateX(15deg) rotateY(20deg)",
            border: "solid", borderColor:"#0038FF", borderRadius:"5px", padding:"0", margin:"10px", boxShadow:"0 0 20px 2px #0038FF"}}
            src={slides[props.index]}></img>
        </li>
    )
}

export default function Portofolio(props){
    const [current, setCurrent] = useState(0);
    const carousel = useRef();

    const switchClass = `${props.night === 1 ? "dark2" : "light2"} ${props.shift == 1 ? "shifting2" : ""}`
    const switchSvg = `${props.night === 1 ? "darkSvg" : "lightSvg"} ${props.shift == 1 ? "shiftingSvg" : ""}`
    const switchSvg2 = `${props.night === 1 ? "darkSvg2" : "lightSvg2"} ${props.shift == 1 ? "shiftingSvg2" : ""}`
    useEffect(() => {
        setProp(carousel, '--dy', `150px`)
        setProp(carousel, '--dx', `2430px`);
    }, [])
    const onPreviousClick = () => {
        var prev = current === 0 ? slides.length -1 : current - 1;
        setCurrent(prev)
        setProp(carousel, '--dy', `${-prev * (imgHeight + 40) + 150}px`)
        setProp(carousel, '--dx', `${-prev * (imgWidth + 40) + 2430}px`)

    }
    const onNextClick = () => {
        var next = current === slides.length -1 ? 0 : current + 1;
        setCurrent(next)
        setProp(carousel, '--dy', `${-next * (imgHeight + 40) + 150}px`)
        setProp(carousel, '--dx', `${-next * (imgWidth + 40) + 2430}px`)

    }
    return(
        <div id="portofolioPage" className={`background ${switchClass}`}>
            <div className="projectContent">
                <h1>My Project</h1>
                <a id="github"href="https://www.google.com" className={switchClass}>Github</a>
                <h3>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h3>
                {/* <a id="browseProject">Browse project</a> */}
                {/* <img alt={""} src={slideData[0]}></img> */}

            </div>
            <div id="carouselNav" className="horizontalFlex">
                <div id="carouselWrapper">
                    <ul id="carousel" ref={carousel} className="horizontalFlex">
                    {slides.map((slide, index) => {
                        return(
                            <Slide index={index} current={current}/>
                        )
                    })
                    }
                    </ul>
                </div>
                <div id="arrowsWrapper" className="verticalFlex">
                    <div className="arrowContainer">
                        <svg className={`arrow ${switchSvg}`} onClick={onPreviousClick} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 14H0L10 0L20 14H14L10 9L6 14Z" fill="white"/>
                        </svg>
                        <svg className={`bigArrow ${switchSvg2}`} width="60" height="46" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 22H3H1L15 1L29 22H17L15 19L13 22Z" stroke="white"/>
                        </svg>
                    </div>
                    <div className="arrowContainer">
                        <svg className={`arrow arrowDown ${switchSvg}`} onClick={onNextClick} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 14H0L10 0L20 14H14L10 9L6 14Z" fill="white"/>
                        </svg>
                        <svg className={`bigArrow arrowDown ${switchSvg2}`} width="60" height="46" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 22H3H1L15 1L29 22H17L15 19L13 22Z" stroke="white"/>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
}