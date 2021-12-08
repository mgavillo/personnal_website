import React, {useEffect, useState, useRef} from "react"
import "./Portofolio.css"

const setProp = (ref, prop, value) => ref.current.style.setProperty(prop, value) 

const slides = ["https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
"https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg",
"https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg",
"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
"https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg"];

const Slide = (props) => {
    // console.log(index);
    return(
       <img className={props.current == props.index ? "currentImg" : "otherImg"} style={{width:"auto", height:"100px", padding:"20px 20px"}}src={slides[props.index]}></img>
    )
}

export default function Portofolio(){
    const [current, setCurrent] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setProp(carousel, '--dy', `${150}px`)
    }, [])
    const onPreviousClick = () => {
        console.log("length", slides.length)
        console.log(current)
        var prev = current === 0 ? slides.length -1 : current - 1;
        setCurrent(prev)
        console.log("pref", prev)
        console.log("offset", -prev * 100)
        setProp(carousel, '--dy', `${-prev * 140 + 150}px`)
    }
    const onNextClick = () => {
        console.log("length", slides.length)
        console.log(current)
        var next = current === slides.length -1 ? 0 : current + 1;
        setCurrent(next)
        console.log("next", next)
        console.log("offset", -next * 100)
        setProp(carousel, '--dy', `${-next * 140 + 150}px`)

    }
    return(
        <div className="portofolioPage">
            <div className="projectContent">
                <h1>My Project</h1>
                <h3>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h3>
                <a id="browseProject">Browse project</a>
                {/* <img alt={""} src={slideData[0]}></img> */}

            </div>
            <div>
                <div id="carouselWrapper">
                    <ul id={"carousel"} style={{display: "flex", flexDirection:"column", zIndex:"1"}} ref={carousel}>
                    {slides.map((slide, index) => {
                        return(
                            <Slide index={index} current={current}/>
                        )
                    })
                    }
                    </ul>
                </div>

                <div>
                    <a style={{margin:"40px 20px", zIndex:"6", position:"relative"}} onClick={onPreviousClick}>Previous </a>
                    <a style={{margin:"40px 20px", zIndex:"6", position:"relative"}} onClick={onNextClick}>Next</a>
                </div>
            </div>
        </div>
    );
}