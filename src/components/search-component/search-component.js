import React from "react";
import "./search-component.css";

const SearchCard = ({title, release, image, rate, onGetData}) => {

    const classes = () => {
        const classes = "rate"
        if (rate > 6.9) {
            return classes + " green"
        } else if (rate > 5) {
            return classes + " yellow"
        } else {
            return classes + " red"
        }
    }
    return (
        <div onClick={onGetData} className="search-card">
            <div className="film-flex">
                <img className="search-pic" src={image} alt={"img"}></img>
                <div className="search-details">
                    <span className="search-title">{title.length > 0 ? title.substring(0, 20) + "..." : null}</span>
                    <span className="search-genre">{release !== undefined ? release.slice(0, 4) : null}</span>
                </div>
            </div>
            <div className={classes()}>{rate % 1 === 0 ? rate + ".0" : rate}</div>
        </div>
    )
}

export default SearchCard;