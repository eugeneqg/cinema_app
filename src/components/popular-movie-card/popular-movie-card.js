import React, { useState, useEffect} from "react";
import "./popular-movie-card.css";

const PopularMovieCard = ({id, title, poster, onGetData}) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false);
    }, []);

    const adaptContent = () => {
        if (!isMobile) {
            return (
                <div onClick={(onGetData)} key={id} className="popular-card">
                    <span className="film-title">{title}</span>
                    <img className="popular-film" src={`https://image.tmdb.org/t/p/original${poster}`} alt=""></img>
                </div>
            )
        } else {
            return (
                <div onClick={(onGetData)} key={id} className="popular-card">
                    <img className="popular-film" src={`https://image.tmdb.org/t/p/original${poster}`} alt=""></img>
                    <span className="film-title">{title}</span>
                </div>
            )
        }
    }

    return (
        <>
            {adaptContent()}
        </>
    )
}

export default PopularMovieCard;