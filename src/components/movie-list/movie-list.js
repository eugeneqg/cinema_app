import React from "react";
import spinner from "./spinner2.gif";
import "./movie-list.css";

const MovieList = ({data, onGetData}) => {

    const getData = () => {
        if (data.length !== 0) {
            const movieList = data.map(item => {
                const rate = item.vote_average;
                const classes = () => {
                    const classes = "rate";
                    if (rate > 6.9) {
                        return classes + " green";
                    } else if (rate > 5) {
                        return classes + " yellow";
                    } else if (rate === 0) {
                        return classes + " grey";
                    } else {
                        return classes + " red";
                    }
                }
                const title = item.title;
                if (item.title.length !== 0) {
                    return (
                        <li onClick={() => onGetData(data, item.id)} key={item.id} className="cinema-film-card">
                            <img className="search-poster" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt=""/>
                            <div className="side-info">
                                <p className="cinema-film-title-small">{title.length > 60 ? title.slice(0, 60) + "..." : title}</p>
                                <div className={classes()}>{rate % 1 === 0 ? rate + ".0" : rate}</div>
                            </div>
                        </li>
                    )
                } else {
                    return (
                        <div className="loading-spinner-container">
                            <img src={spinner} alt="loading"></img>
                        </div>
                    )
                    }
            });
            return movieList
        }
    }

    
    return (
        <>
                {getData()}
        </>

    )
}

export default MovieList;
