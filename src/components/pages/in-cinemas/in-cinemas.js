import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import Service from "../../../services/service";
import "./in-cinemas.css";
import arrow from "./arrow.svg";
import PopularInCinema from "./popular-in-cinema/popular-in-cinema";
import MovieList from "../../movie-list/movie-list";

const InCinemas = ({onGetData}) => {

    const getData = new Service();
    const dispatch = useDispatch();
    const otherData = useSelector(state => state.inCinema.otherData)

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    useEffect(() => {
        getData.getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US&page=1`)
        .then(data => {
            if (data.results.length !== 0) {
            const newData = data.results.slice(0,5);
            dispatch({type: "OTHER_MOVIES", payload: data.results.slice(6, 16)})
            dispatch({type: "CINEMA_MOVIES", payload: newData});
            }
        })
    }, []);

    return (
        <div className="container gap">
            <PopularInCinema onGetData={onGetData} open={openInNewTab}/>
            <span className="titles autumn">This autumn{<img className="arrow" src={arrow} alt=""/>}</span>
            <div className="premieres-block">
                <MovieList data={otherData} onGetData={onGetData}/>
            </div>
        </div> 
    )
}

export default InCinemas;