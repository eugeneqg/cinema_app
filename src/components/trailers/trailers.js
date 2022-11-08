import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import Service from "../../services/service";
import "./trailers.css";
import arrow from "./arrow.svg";
import VideoComponent from "./videos-component/videos-component";


const Trailers = () => {

    const getData = new Service();

    const trailersData = useSelector(state => state.trailer);
    const dispatch = useDispatch();

    useEffect(() => {

        getData.getData("https://api.themoviedb.org/3/movie/upcoming?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US&page=1")
            .then(data => {
                if (data.results.length !== 0) {
                   const newData = data.results.slice(4, 7);
                   dispatch({type: "DATA", payload: newData});
                   return newData;
                }
            })
            .then(data => {
                let arr = [];
                data.map(item => arr.push(item.id));
                dispatch({type: "FILM_ID", payload: arr});
                return arr;       
            })
            .then(data => {
                let newArr = [];
                data.map(item => {
                    getData.getData(`https://api.themoviedb.org/3/movie/${item}/videos?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US`)
                    .then(data => newArr.push(data))
                    .then(data => dispatch({type: "FILMS", payload: newArr}));
                })

                return newArr;
            })
    }, []);

    return (
        <div className="container">
            <span className="titles">New trailers{<img className="arrow" src={arrow} alt=""/>}</span>
            <div className="spacer"></div>
            <div className="videos">
                <VideoComponent data={trailersData}/>
            </div>
        </div>
    )
}

export default Trailers;