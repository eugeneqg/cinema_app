import React from "react";
import "./main-banner.css";
import icon2 from "./ic_baseline-ondemand-video.svg";
import SimpleSlider from "../slider/slider";


const MainBanner = ({openModal}) => {


    return (
        <>
        <div className="position">
        <SimpleSlider/>
            <span className="release-info">Now in {<span style={{color: "#FBCB50"}}>MOViE Plus</span>} subscription</span>
            <div className="buttons">
                <button onClick={() => openModal()} className="watch-now-button"><img src={icon2} alt=""/>Watch now</button>
            </div>
        </div>
        </>
    )
}

export default MainBanner;