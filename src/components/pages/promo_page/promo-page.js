import React from "react";
import "./promo-page.css";

const PromoPage = ({openModal}) => {
    return (
        <div className="promo-back">
            <div className="promo-info">
                <div className="text-logo">
                    <span className="text-logo">MOViE</span>
                    <div className="logo-back">Plus</div>
                </div>
                <span className="promo-text">Watch thousands of movies in the subscription</span>
                <span className="secondary-text">Get your first three month for free. Cancel any time.</span>
                <button onClick={() => openModal()} className="banner-button-page">GET 3 MONTHS FREE</button>
            </div>
        </div>
    )
}

export default PromoPage;