import React from "react";
import banner from "./banner.png";
import "./promo-banner.css";

const Promo = ({openModal}) => {
    return (
        <div className="relative">
            <img className="promo-banner" src={banner} alt="promo"/>
            <span className="banner-title">Join {<span style={{color: "#FFFFFF"}}>MOViE Plus</span>} team right now</span>
            {window.screen.width < 768 ? null : <span className="banner-text">Get early access to world premieres,  watch world-famous classics  and your favourite movies and TV shows in one place with our {<span style={{color: "#FBCB50"}}>MOViE Plus</span>} subscription</span>}
            <button onClick={() => openModal()} className="banner-button">GET 3 MONTHS FREE</button>
        </div>

    )
}

export default Promo;