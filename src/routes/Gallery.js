import React, {useState} from "react"
import "./Gallery.scss"
import "../App.scss"
const data = ["https://picsum.photos/id/1/200/300", "https://picsum.photos/200/200", "https://picsum.photos/200/300", "https://picsum.photos/300/200", "https://picsum.photos/200/400",
    "https://picsum.photos/id/2/200/200", "https://picsum.photos/id/10/200/250", "https://picsum.photos/id/125/200/200", "https://picsum.photos/id/12/150/200", "https://picsum.photos/id/152/150/250",
    "https://picsum.photos/id/448/350/250", "https://picsum.photos/id/48/400/250", "https://picsum.photos/id/478/250/250", "https://picsum.photos/id/85/100/250"]

    function classNames(classes) {
        return Object.entries(classes)
          .filter(([key, value]) => value)
          .map(([key, value]) => key)
          .join(' ');
      }
    // const classes = {
    //     'curImg': current && props.focus,
    //     'otherImg': !current && props.focus,
    //   };

const Photo = (props) => {
    const [current, setCurrent] = useState(false)


    const onImgHover = ()=> {
        setCurrent(true);
        props.setFocus(true);
    };

    const onImgExit = () => {
        setCurrent(false);
        props.setFocus(false);
    };

    return(
        <img id={"images"} className={!current && props.focus ? "otherImg" : ""} alt="" src={data[props.index] } onMouseEnter={onImgHover} onMouseLeave={onImgExit}/>
    )
}


export default function Gallery(props){
    console.log(data.length)
    const [focus, setFocus] = useState(false);

    return(
        <div id="galleryPage" class="background" night={props.night} nightShift={props.shift}>
            <div id="catWrapper" class="horizontalFlex">
                <div class="cat">Data viz</div>
                <div class="cat">Illustration</div>
                <div class="cat">3D</div>
            </div>
            <hr style={{width: "50%", color: "white"}}/>
            <div id="images-wrapper">
            {
                data.map((photo, index) => {
                    return(
                        <Photo index={index} focus={focus} setFocus={setFocus}/>
                    )
                })
            }
            </div>
        </div>
    )
}