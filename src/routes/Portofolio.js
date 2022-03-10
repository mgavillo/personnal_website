import React, {useEffect, useState, useRef} from "react"
import "./Portofolio.scss"
import "../flex.scss"
const setProp = (ref, prop, value) => ref.current.style.setProperty(prop, value) 

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

    useEffect(() => {
        setProp(carousel, '--dy', `150px`)
        setProp(carousel, '--dx', `1250px`);
    }, [])
    const onPreviousClick = () => {
        var prev = current === 0 ? slides.length -1 : current - 1;
        setCurrent(prev)
        setProp(carousel, '--dy', `${-prev * (imgHeight + 40) + 150}px`)
        setProp(carousel, '--dx', `${-prev * (imgWidth + 40) + 1400}px`)

    }
    const onNextClick = () => {
        var next = current === slides.length -1 ? 0 : current + 1;
        setCurrent(next)
        setProp(carousel, '--dy', `${-next * (imgHeight + 40) + 150}px`)
        setProp(carousel, '--dx', `${-next * (imgWidth + 40) + 1250}px`)

    }
    return(
        <div id="portofolioPage" className="background" night={props.night} nightshift={props.shift}>
            <div className="projectContent">
                <h1>My Project</h1>
                <a id="github"href="https://www.google.com">Github</a>
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
                        <img className="arrow" src={require('../Design/arrow.svg').default} style={{margin:"40px 20px", zIndex:"6", position:"relative"}} onClick={onPreviousClick}/>
                        <img className="bigArrow" src={require('../Design/bigArrow.svg').default}/>
                    </div>
                    <div className="arrowContainer">
                        <img className="arrow arrowDown" src={require('../Design/arrow.svg').default} style={{margin:"40px 20px", zIndex:"6", position:"relative"}} onClick={onNextClick}/>
                        <img className="bigArrow arrowDown" src={require('../Design/bigArrow.svg').default}/>
                    </div>
                </div>
            </div>

        </div>
    );
}